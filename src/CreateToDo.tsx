import { useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { toDoListState } from './atoms';

const Wrapper = styled.div``;

const Form = styled.form`
  display: flex;
  height: 2.5rem;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 0.5rem 0.8rem;
  font-size: 1.2rem;
`;

const Button = styled.button`
  min-width: 5rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  background-color: #74b9ff;
  outline: none;
  color: white;
  transition: background-color 0.1s linear;
  font-size: 1.1rem;
  &:hover {
    background-color: #0984e3;
  }
`;

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
