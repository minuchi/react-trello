import { atom } from 'recoil';

export interface ToDoState {
  id: string;
  text: string;
}

export interface ToDoListState {
  [key: string]: ToDoState[];
}

export const toDoListState = atom<ToDoListState>({
  key: 'toDos',
  default: {
    'To Do': [],
    Doing: [],
    Done: [],
  },
});
