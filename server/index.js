import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import pdf from 'pdf-parse';
import mammoth from 'mammoth';

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.json());

app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    let text = '';
    if (req.file) {
      const filePath = path.join(req.file.destination, req.file.filename);
      const fileExtension = path.extname(req.file.originalname).toLowerCase();

      if (fileExtension === '.pdf') {
        const dataBuffer = fs.readFileSync(filePath);
        const pdfData = await pdf(dataBuffer);
        text = pdfData.text;
      } else if (fileExtension === '.docx') {
        const result = await mammoth.extractRawText({ path: filePath });
        text = result.value;
      } else if (fileExtension === '.txt') {
        text = fs.readFileSync(filePath, 'utf8');
      } else {
        throw new Error('Unsupported file type');
      }

      // Clean up the uploaded file
      fs.unlinkSync(filePath);
    } else if (req.body.text) {
      text = req.body.text;
    } else {
      throw new Error('No file or text provided');
    }

    // Here you would typically save the text to a database or process it further
    console.log('Received text:', text.substring(0, 100) + '...');

    res.json({ message: 'Content uploaded successfully', textLength: text.length });
  } catch (error) {
    console.error('Error processing upload:', error);
    res.status(500).json({ error: 'Error processing upload' });
  }
});

app.post('/api/summarize', (req, res) => {
  const { content, summaryLength, tone, focus } = req.body;

  // Here you would typically use a natural language processing library or API to generate the summary
  // For this example, we'll just return a mock summary
  const summary = `This is a ${summaryLength} summary of the content, focusing on ${focus} with a ${tone} tone. The actual summary would be generated based on the provided content and parameters.`;

  res.json({ summary });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});