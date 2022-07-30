import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoListState } from './atoms';
import ToDo from './ToDo';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const Boards = styled.div``;

const Board = styled.ul`
  background-color: ${(props) => props.theme.boardColor};
  padding: 1rem 1rem 0.5rem;
  border-radius: 0.5rem;
`;

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoListState);
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (destination != null && source.index !== destination.index) {
      const newToDos = toDos.filter((_, i) => source.index !== i);
      newToDos.splice(destination.index, 0, toDos[source.index]);
      setToDos(newToDos);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(provided) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                {toDos.map((value, index) => (
                  <ToDo draggableId={value} index={index} key={value}>
                    {value}
                  </ToDo>
                ))}
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
