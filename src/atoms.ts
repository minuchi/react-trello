import { atom } from 'recoil';

export interface ToDoListState {
  [key: string]: string[];
}

export const toDoListState = atom<ToDoListState>({
  key: 'toDos2',
  default: {
    'To Do': ['One', 'Two', 'Three'],
    Doing: ['Four', 'Five', 'Six'],
    Done: ['Seven', 'Eight', 'Nine'],
  },
});
