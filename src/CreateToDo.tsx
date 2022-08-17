import { useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { toDoListState } from './atoms';
import { Button, Form, Input } from './components/Form';

const Wrapper = styled.div``;

interface CreateToDoProps {
  droppableId: string;
}

function CreateToDo({ droppableId }: CreateToDoProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const setToDos = useSetRecoilState(toDoListState);
  const [toDo, setToDo] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.trim() === '') {
      return;
    }

    setToDos((toDos) => {
      return {
        ...toDos,
        [droppableId]: [
          {
            id: uuidv4(),
            text: toDo,
          },
          ...toDos[droppableId],
        ],
      };
    });

    setToDo('');
    inputRef.current?.focus();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="toDo"
          ref={inputRef}
          onChange={handleChange}
          value={toDo}
          placeholder={`Add a task on ${droppableId}`}
        />
        <Button type="submit">ADD</Button>
      </Form>
    </Wrapper>
  );
}

export default CreateToDo;
