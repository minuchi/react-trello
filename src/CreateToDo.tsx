import { useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoListState } from './atoms';

const Wrapper = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const Button = styled.button``;

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
        [droppableId]: [toDo, ...toDos[droppableId]],
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
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
}

export default CreateToDo;
