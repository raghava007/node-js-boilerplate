import express from 'express';

import pdfController from '../controllers/pdf.js'
const pdfRouter = express.Router()

pdfRouter.post('/',async (req,res) => {
 return res = await pdfController.getPdfBase64(req,res)
})


export default pdfRouter
