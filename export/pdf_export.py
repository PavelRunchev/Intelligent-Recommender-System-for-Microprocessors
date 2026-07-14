from io import BytesIO
from datetime import datetime
from flask import send_file
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import (SimpleDocTemplate,Paragraph,Spacer,Table,TableStyle)
from export.prepare_dataframe import prepare_export_dataframe
from reportlab.lib.pagesizes import A4, landscape
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

pdfmetrics.registerFont(TTFont("DejaVu", "static/fonts/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("DejaVu-Bold", "static/fonts/DejaVuSans-Bold.ttf"))

def create_pdf_report(df):
    PDF_COLUMNS = [
        "Processor",
        "Category",
        "Price (€)",
        "Predicted Price (€)",
        "Performance (CPU Mark)",
        "Cores",
        "Performance Class",
        "TOPSIS Score"
    ]

    df = prepare_export_dataframe(df)
    df = df[PDF_COLUMNS]

    df["Price (€)"] = df["Price (€)"].map(lambda x: f"{x:.2f}")
    df["Predicted Price (€)"] = df["Predicted Price (€)"].map(lambda x: f"{x:.2f}")
    df["TOPSIS Score"] = df["TOPSIS Score"].map(lambda x: f"{x:.2f}")

    output = BytesIO()
    document = SimpleDocTemplate(output,pagesize=landscape(A4))
    styles = getSampleStyleSheet()
    styles["Title"].fontName = "DejaVu-Bold"
    styles["Normal"].fontName = "DejaVu"
    elements = []
    # Title
    elements.append(Paragraph("<b>CPU Recommendation Report</b>", styles["Title"]))
    # Data
    elements.append(Paragraph(f"Generated: {datetime.now():%d.%m.%Y %H:%M}",styles["Normal"]))
    # CPU count
    elements.append(Paragraph(f"Found processors: {len(df)}",styles["Normal"]))

    elements.append(Spacer(1, 0.5 * cm))
    # Table of data
    table_data = [list(df.columns)]
    table_data.extend(df.values.tolist())

    table = Table(table_data)
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#4472C4")),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0,0), (-1,0), "DejaVu"),
        ("FONTNAME", (0, 1), (-1, -1), "DejaVu"),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.grey),
        ("BOTTOMPADDING", (0, 0), (-1, 0), 8),
        ("BACKGROUND", (0, 1), (-1, -1), colors.beige),
    ]))

    elements.append(table)
    document.build(elements)
    output.seek(0)

    return send_file(
        output,
        as_attachment=True,
        download_name=f"CPU_Recommendations_{datetime.now():%Y-%m-%d_%H-%M}.pdf",
        mimetype="application/pdf"
    )
