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
  padding: 1rem 1rem 0.5rem;
  border-radius: 0.5rem;
  min-width: 20rem;
  margin: 0 auto;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 800;
`;

const Container = styled.div``;

function Board({ droppableId, toDos }: BoardProps) {
  return (
    <Wrapper>
      <Title>{droppableId}</Title>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <Container ref={provided.innerRef} {...provided.droppableProps}>
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
