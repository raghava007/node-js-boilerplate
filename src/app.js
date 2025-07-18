import express from 'express';

import pdfRouter from './routes/pdf.js'

const app = express();

app.use(express.json());
app.use('/pdf', pdfRouter)


export default app;