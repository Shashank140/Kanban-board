// components/KanbanItem.tsx
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface KanbanItemProps {
  item: {
    _id: string;
    name: string;
    description: string;
    dueDate?: string;
  };
  index: number;
}

const KanbanItem: React.FC<KanbanItemProps> = ({ item, index }) => {
  return (
    <Draggable draggableId={item._id} index={index}>
      {(provided) => (
        <div
          className="bg-white p-3 mb-2 rounded border"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4 className="text-lg font-semibold">{item.name}</h4>
          <p className="text-gray-500">{item.description}</p>
          {item.dueDate && <p className="text-gray-500">Due Date: {item.dueDate}</p>}
        </div>
      )}
    </Draggable>
  );
};

export default KanbanItem;
