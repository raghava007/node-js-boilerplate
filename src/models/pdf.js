import ejs from 'ejs'
import puppeteer from 'puppeteer'

async function getPdfBase64(body) {
    const { template = '', data = {}} = body
    try{
        const renderedHtml = ejs.render(template, data);

        // Generate PDF from rendered HTML
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        await page.setContent(renderedHtml, { waitUntil: 'networkidle0' });
        const pdfBuffer = await page.pdf({ format: 'A4' });
        await browser.close();
    
        // Convert to base64
        const base64Pdf = pdfBuffer.toString('base64');
        return {base64: base64Pdf}
    }
    catch(error){
        throw new Error(`Failed to generate PDF: ${error.message}`)
    }
    

}

const pdfModel = { getPdfBase64 }

export default pdfModel