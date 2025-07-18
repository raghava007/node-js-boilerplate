import ejs from 'ejs'
import puppeteer from 'puppeteer'

async function getPdfBase64(body, params) {
    const { template = '', data = {}} = body
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

const pdfModel = { getPdfBase64 }

export default pdfModel