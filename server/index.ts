// server/index.ts
import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import { kanbanBoardRoutes } from './routes/kanbanBoardRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';

const client = new MongoClient(uri);

async function start() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    app.use(cors());
    app.use(express.json());
    app.use('/api/boards', kanbanBoardRoutes);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } finally {
    // Close the MongoDB connection when the server stops
    await client.close();
  }
}

start().catch(console.error);
