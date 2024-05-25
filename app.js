import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Determine the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve JavaScript files with the correct MIME type
app.use((req, res, next) => {
  if (req.url.endsWith('.js')) {
    res.setHeader('Content-Type', 'text/javascript');
  }
  next();
});

// Define a route to serve index.html at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
