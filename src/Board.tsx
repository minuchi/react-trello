import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import ToDo from './ToDo';

interface BoardProps {
  droppableId: string;
  toDos: string[];
}

const Wrapper = styled.ul`
  background-color: ${(props) => props.theme.boardColor};
  padding: 1rem 0 0;
  border-radius: 0.5rem;
  min-width: 20rem;
  min-height: 18rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 0.7rem;
  font-size: 1.5rem;
  font-weight: 800;
`;

interface ContainerProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

const Container = styled.div<ContainerProps>`
  padding: 1rem 1rem 0.5rem;
  flex-grow: 1;
  background-color: ${(props) =>
    props.isDraggingOver
      ? '#dfe6e9'
      : props.isDraggingFromThis
      ? '#b2bec3'
      : 'transparent'};
  transition: background-color 0.2s linear;
`;

function Board({ droppableId, toDos }: BoardProps) {
  return (
    <Wrapper>
      <Title>{droppableId}</Title>
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={!!snapshot.draggingFromThisWith}
            {...provided.droppableProps}
          >
            {toDos.map((value, index) => (
              <ToDo draggableId={value} index={index} key={value}>
                {value}
              </ToDo>
            ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default React.memo(Board);
