import React, { ReactNode } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

interface ToDoProps {
  draggableId: string;
  index: number;
  children: ReactNode;
}

const Card = styled.li`
  background-color: ${(props) => props.theme.cardColor};
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 0 0 0.5rem;
  min-width: 10rem;
`;

function ToDo({ draggableId, index, children }: ToDoProps) {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {children}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(ToDo);
