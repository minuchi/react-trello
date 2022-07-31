import React, { ReactNode } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

interface ToDoProps {
  draggableId: string;
  index: number;
  children: ReactNode;
}

const Card = styled.li<{ isDragging: boolean }>`
  background-color: ${(props) =>
    props.isDragging ? '#f1f2f6' : props.theme.cardColor};
  transition: background-color 0.2s linear;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 0 0 0.5rem;
  min-width: 10rem;
  box-shadow: ${(props) =>
    props.isDragging ? '0 0.125rem 0.35rem rgba(0, 0, 0, 0.05)' : 'none'};
`;

function ToDo({ draggableId, index, children }: ToDoProps) {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, { isDragging }) => (
        <Card
          isDragging={isDragging}
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
