// pages/index.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KanbanBoardList from '../components/KanbanBoardList';

const Home = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/boards').then((response) => setBoards(response.data));
  }, []);

  return (
    <div className="container mx-auto p-8">
      <KanbanBoardList boards={boards} />
    </div>
  );
};

export default Home;
