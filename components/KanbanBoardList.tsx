// components/KanbanBoardList.tsx
import React from 'react';
import Link from 'next/link';

interface KanbanBoardListProps {
  boards: {
    _id: string;
    name: string;
  }[];
}

const KanbanBoardList: React.FC<KanbanBoardListProps> = ({ boards }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Kanban Boards</h2>
      <ul>
        {boards.map((board) => (
          <li key={board._id} className="mb-4">
            <Link href={`/boards/${board._id}`}>
              <a className="text-blue-500 hover:underline">{board.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KanbanBoardList;
