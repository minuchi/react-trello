import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import styled from 'styled-components';
import ToDo from './ToDo';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const Boards = styled.div``;

const Board = styled.ul`
  background-color: ${(props) => props.theme.boardColor};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

function ToDoList() {
  const onDragEnd = (result: DropResult) => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(provided) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                <ToDo draggableId="first" index={0}>
                  One
                </ToDo>
                <ToDo draggableId="two" index={1}>
                  Two
                </ToDo>
                {provided.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default ToDoList;
