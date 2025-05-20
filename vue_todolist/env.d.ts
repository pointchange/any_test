/// <reference types="vite/client" />
interface ListItemObj {
  id: string;
  content: string;
  done: boolean;
}

type List = ListItemObj[];
interface listOperation {
  deleteListItem: (id: string) => void;
  editListItem: editListItem;
  checkedListItem: checkedListItem;
}
type add = (content: string) => void;
type editListItem = (id: string, content: string) => void;
type checkedAll = (done: boolean) => void;
type checkedListItem = (id: string, done: boolean) => void;
type clear = () => void;
type find = (value: any) => void;
type deleteTodo = (id: string) => void;

