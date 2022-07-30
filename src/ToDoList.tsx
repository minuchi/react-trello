import { DragDropContext, DraggableId, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoListState } from './atoms';
import Board from './Board';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const Boards = styled.div`
  display: grid;
  gap: 0.625rem;
  grid-template-columns: repeat(3, 1fr);
`;

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoListState);
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (destination != null) {
      const sDroppableId = source.droppableId;
      const dDroppableId = destination.droppableId;
      const sIdx = source.index;
      const dIdx = destination.index;

      if (sDroppableId === dDroppableId && sIdx === dIdx) {
        return;
      }

      /*
       if (sDroppableId === dDroppableId) {
        setToDos((currToDos) => {
          const newToDos = [...currToDos[sDroppableId]];
          newToDos.splice(sIdx, 1);
          newToDos.splice(dIdx, 0, currToDos[sDroppableId][sIdx]);

          return {
            ...currToDos,
            [sDroppableId]: newToDos,
          };
        });
      } else {
        setToDos((currToDos) => {
          const sourceToDos = [...currToDos[sDroppableId]];
          const destToDos = [...currToDos[dDroppableId]];
          sourceToDos.splice(sIdx, 1);
          destToDos.splice(dIdx, 0, currToDos[sDroppableId][sIdx]);

          return {
            ...currToDos,
            [sDroppableId]: sourceToDos,
            [dDroppableId]: destToDos,
          };
        });
      }
      */

      setToDos((currToDos) => {
        const sourceToDos = currToDos[sDroppableId].filter(
          (_, i) => sIdx !== i,
        );

        let newToDos = {
          ...currToDos,
          [sDroppableId]: sourceToDos,
        };

        const destToDos =
          sDroppableId === dDroppableId
            ? sourceToDos
            : [...currToDos[dDroppableId]];
        destToDos.splice(dIdx, 0, currToDos[sDroppableId][sIdx]);

        newToDos = {
          ...newToDos,
          [dDroppableId]: destToDos,
        };

        return newToDos;
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((id) => (
            <Board key={id} droppableId={id} toDos={toDos[id]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default ToDoList;
