import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  height: 2.5rem;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 0.5rem 0.8rem;
  font-size: 1.2rem;
`;

export const Button = styled.button`
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
