import { atom } from 'recoil';
import { getInitialToDos } from './utils/localStorage';

export interface ToDoState {
  id: string;
  text: string;
}

export interface ToDoListState {
  [key: string]: ToDoState[];
}

export const toDoListState = atom<ToDoListState>({
  key: 'toDos',
  default: getInitialToDos(),
});
