// components/KanbanColumn.tsx
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import KanbanItem from './KanbanItem';

interface KanbanColumnProps {
  column: {
    _id: string;
    name: string;
    items: {
      _id: string;
      name: string;
      description: string;
      dueDate?: string;
    }[];
  };
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ column }) => {
  return (
    <div className="flex-1 p-4 border rounded mr-4">
      <h3 className="text-lg font-semibold mb-4">{column.name}</h3>
      <Droppable droppableId={column._id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {column.items.map((item, index) => (
              <KanbanItem key={item._id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default KanbanColumn;
