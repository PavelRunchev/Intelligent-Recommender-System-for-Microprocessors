import pandas as pd
from io import BytesIO
from flask import send_file
from openpyxl.styles import Font, Alignment, PatternFill
from openpyxl.utils import get_column_letter
from datetime import datetime
from export.prepare_dataframe import prepare_export_dataframe

def create_excel_report(df):
    df = prepare_export_dataframe(df)
    output = BytesIO()

    with pd.ExcelWriter(output, engine="openpyxl") as writer:
        df.to_excel(writer, sheet_name="CPU Recommendations", index=False)
        worksheet = writer.sheets["CPU Recommendations"]
        header_fill = PatternFill(fill_type="solid", fgColor="4472C4")
        worksheet.freeze_panes = "A2"
        worksheet.auto_filter.ref = worksheet.dimensions
        # Auto width to columns
        for column_cells in worksheet.columns:
            length = max(len(str(cell.value)) if cell.value else 0 for cell in column_cells)
            worksheet.column_dimensions[column_cells[0].column_letter].width = min(length + 3, 35)

        last_row = worksheet.max_row
        worksheet.row_dimensions.group(last_row + 1, 1048576, hidden=True)
        last_col = worksheet.max_column

        for col in range(last_col + 1, 16385):
            worksheet.column_dimensions[get_column_letter(col)].hidden = True

        for cell in worksheet[1]:
            # Bolds title
            cell.font = Font(bold=True, color="FFFFFF")
            cell.fill = header_fill
            cell.alignment = Alignment(horizontal="center", vertical="center")

            if cell.value == "price":
                for row in range(2, worksheet.max_row + 1):
                    worksheet[f"{cell.column_letter}{row}"].number_format = '0.00 €'

            if cell.value == "topsis_score":
                for row in range(2, worksheet.max_row + 1):
                    worksheet[f"{cell.column_letter}{row}"].number_format = "0.00"

    output.seek(0)

    return send_file(
        output,
        as_attachment=True,
        download_name=(f"CPU_Recommendations_"f"{datetime.now():%Y-%m-%d_%H-%M}.xlsx"),
        mimetype="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    )