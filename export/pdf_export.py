from io import BytesIO
from datetime import datetime
from flask import send_file, request
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import (SimpleDocTemplate,Paragraph,Spacer,Table,TableStyle)
from export.prepare_dataframe import prepare_export_dataframe
from reportlab.lib.pagesizes import A4, landscape
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.pdfbase.ttfonts import TTFont
from export.export_translator import translate_export, PDF_TRANSLATIONS

pdfmetrics.registerFont(TTFont("DejaVu", "static/fonts/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("DejaVu-Bold", "static/fonts/DejaVuSans-Bold.ttf"))
pdfmetrics.registerFont(UnicodeCIDFont("STSong-Light"))
pdfmetrics.registerFont(UnicodeCIDFont("HeiseiKakuGo-W5"))

def create_pdf_report(df):
    PDF_COLUMNS = ["Processor","Performance (CPU Mark)","Price (€)","Predicted Price (€)","Price Evaluation","Category","Cores","Performance Class","TOPSIS Score"]

    df = prepare_export_dataframe(df)

    df = df[PDF_COLUMNS]
    df["Price (€)"] = df["Price (€)"].map(lambda x: f"{x:.2f}")
    df["Predicted Price (€)"] = df["Predicted Price (€)"].map(lambda x: f"{x:.2f}")
    df["TOPSIS Score"] = df["TOPSIS Score"].map(lambda x: f"{x:.2f}")

    lang = request.cookies.get("language", "en")
    font_name = "DejaVu"
    title_font = "DejaVu-Bold"
    if lang == "zh":
        font_name = "STSong-Light"
        title_font = "STSong-Light"

    elif lang == "ja":
        font_name = "HeiseiKakuGo-W5"
        title_font = "HeiseiKakuGo-W5"

    df = translate_export(df, lang)

    text = PDF_TRANSLATIONS.get(lang, PDF_TRANSLATIONS["en"])

    output = BytesIO()
    document = SimpleDocTemplate(output,pagesize=landscape(A4))
    styles = getSampleStyleSheet()
    styles["Title"].fontName = title_font
    styles["Normal"].fontName = font_name
    elements = []

    pdfmetrics.registerFont(UnicodeCIDFont("STSong-Light"))
    pdfmetrics.registerFont(UnicodeCIDFont("HeiseiKakuGo-W5"))

    # Title
    elements.append(Paragraph(text["title"], styles["Title"]))
    # Data
    elements.append(Paragraph(f"{text['generated']}: {datetime.now():%d.%m.%Y %H:%M}",styles["Normal"]))
    # CPU count
    elements.append(Paragraph(f"{text['found']}: {len(df)}",styles["Normal"]))

    elements.append(Spacer(1, 0.5 * cm))
    # Table of data
    table_data = [list(df.columns)]
    table_data.extend(df.values.tolist())

    table = Table(table_data)
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#4472C4")),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0,0), (-1,0), font_name),
        ("FONTNAME", (0, 1), (-1, -1), font_name),
        ("FONTSIZE", (0, 0), (-1, -1), 8),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.grey),
        ("BOTTOMPADDING", (0, 0), (-1, 0), 5),
        ("BACKGROUND", (0, 1), (-1, -1), colors.beige),
        ("LEADING", (0, 0), (-1, -1), 9)
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
