// pages/boards/[id].tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import KanbanBoard from '../../components/KanbanBoard';

const Board = () => {
  const router = useRouter();
  const { id } = router.query;
  const [board, setBoard] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/boards/${id}`).then((response) => setBoard(response.data));
    }
  }, [id]);

  if (!board) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <KanbanBoard board={board} />
    </div>
  );
};

export default Board;
