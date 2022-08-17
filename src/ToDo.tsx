import React, { ReactNode } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

interface ToDoProps {
  draggableId: string;
  index: number;
  children: ReactNode;
  remove: () => void;
}

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  right: 0.5rem;
  bottom: 0;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  color: red;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    transition: color 0.2s linear;
    color: tomato;
  }
`;

const Card = styled.li<{ isDragging: boolean }>`
  position: relative;
  background-color: ${(props) =>
    props.isDragging ? '#f1f2f6' : props.theme.cardColor};
  transition: background-color 0.2s linear;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 0 0 0.5rem;
  min-width: 10rem;
  box-shadow: ${(props) =>
    props.isDragging ? '0 0.125rem 0.35rem rgba(0, 0, 0, 0.05)' : 'none'};

  & button {
    display: none;
  }
  &:hover button {
    display: flex;
  }
`;

function ToDo({ draggableId, index, children, remove }: ToDoProps) {
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
          <ButtonWrapper>
            <Button onClick={remove}>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                width={28}
                height={28}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </Button>
          </ButtonWrapper>
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(ToDo);
