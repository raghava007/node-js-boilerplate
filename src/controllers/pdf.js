import pdfModel from "../models/pdf.js"

const pdfController = {
    getPdfBase64
}

async function getPdfBase64(req, res) {
    const { body, params } = req
    const data = await pdfModel.getPdfBase64(body, params)
    const response = {
        success: true,
        message: "pdf generated successfully",
        data
    }
    return res.status(200).json(response)
}

export default pdfController