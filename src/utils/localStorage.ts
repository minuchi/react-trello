import { ToDoListState } from '../atoms';

export const getInitialToDos = (): ToDoListState => {
  const defaultValue = {
    'To Do': [],
    Doing: [],
    Done: [],
  };

  const toDos = localStorage.getItem('toDos') ?? JSON.stringify(defaultValue);

  try {
    const data = JSON.parse(toDos);

    return data ?? defaultValue;
  } catch (_) {
    return defaultValue;
  }
};

export const saveToDos = (toDos: ToDoListState) => {
  localStorage.setItem('toDos', JSON.stringify(toDos));
};
