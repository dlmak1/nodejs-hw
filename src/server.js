import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(
  pino({
    transport: {
      target: 'pino-pretty',
    },
  }),
);

app.get('/notes', (req, res) => {
  res.status(200).json({
    message: 'Retrieved all notes',
  });
});

app.get('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;

  res.status(200).json({
    message: `Retrieved note with ID: ${noteId}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
