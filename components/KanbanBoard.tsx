// components/KanbanBoard.tsx
import React from 'react';
import KanbanColumn from './KanbanColumn';

interface KanbanBoardProps {
  board: {
    _id: string;
    name: string;
    columns: {
      _id: string;
      name: string;
      items: {
        _id: string;
        name: string;
        description: string;
        dueDate?: string;
      }[];
    }[];
  };
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ board }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{board.name}</h2>
      <div className="flex">
        {board.columns.map((column) => (
          <KanbanColumn key={column._id} column={column} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
