// server/models/KanbanBoard.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IKanbanBoard extends Document {
  name: string;
  columns: IKanbanColumn[];
}

export interface IKanbanColumn extends Document {
  name: string;
  items: IKanbanItem[];
}

export interface IKanbanItem extends Document {
  name: string;
  description: string;
  dueDate?: Date;
}

const KanbanItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date },
});

const KanbanColumnSchema: Schema = new Schema({
  name: { type: String, required: true },
  items: [KanbanItemSchema],
});

const KanbanBoardSchema: Schema = new Schema({
  name: { type: String, required: true },
  columns: [KanbanColumnSchema],
});

export const KanbanBoard = mongoose.model<IKanbanBoard>('KanbanBoard', KanbanBoardSchema);
