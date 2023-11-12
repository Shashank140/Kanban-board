// server/routes/kanbanBoardRoutes.ts
import express, { Router } from 'express';
import { KanbanBoard } from '../models/KanbanBoard';

export const kanbanBoardRoutes: Router = express.Router();

// Get all boards
kanbanBoardRoutes.get('/', async (_, res) => {
  try {
    const boards = await KanbanBoard.find();
    res.json(boards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get board by id
kanbanBoardRoutes.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const board = await KanbanBoard.findById(id);
    res.json(board);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new board
kanbanBoardRoutes.post('/', async (req, res) => {
  const { name } = req.body;
  const newBoard = new KanbanBoard({ name, columns: [] });
  try {
    const board = await newBoard.save();
    res.json(board);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update board by id
kanbanBoardRoutes.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, columns } = req.body;
  try {
    const board = await KanbanBoard.findByIdAndUpdate(id, { name, columns }, { new: true });
    res.json(board);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete board by id
kanbanBoardRoutes.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await KanbanBoard.findByIdAndDelete(id);
    res.json({ message: 'Board deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
