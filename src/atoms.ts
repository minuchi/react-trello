import { atom } from 'recoil';

export const toDoListState = atom<string[]>({
  key: 'toDos',
  default: ['One', 'Two', 'Three', 'Four'],
});
