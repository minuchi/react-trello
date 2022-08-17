import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoListState } from './atoms';
import { Button, Form, Input } from './components/Form';
import { saveToDos } from './utils/localStorage';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.boardColor};
  min-width: 20rem;
  padding: 1rem 0.2rem;
`;

function CreateCategory() {
  const [category, setCategory] = useState('');
  const setToDos = useSetRecoilState(toDoListState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (category.length < 1) {
      alert('Please fill a category input.');
      return;
    } else if (category.length > 10) {
      alert('Category length should be 1 from 10.');
      return;
    }

    setToDos((data) => {
      const newData = { ...data, [category]: [] };
      saveToDos(newData);

      return newData;
    });

    setCategory('');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          name="category"
          onChange={handleChange}
          value={category}
          placeholder="Add a new category"
        />
        <Button type="submit">ADD</Button>
      </Form>
    </Wrapper>
  );
}

export default CreateCategory;
