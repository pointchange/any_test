/// <reference types="svelte" />
/// <reference types="vite/client" />
type list = listObj[]
interface listObj {
    id: string;
    content: string;
    done: boolean;
}
type add = (content: string) => void
type deleteList = (id: string) => void
type clearDone = () => void
type checkedTodo = (id: string, bool: boolean) => void
type checkedAll = (bool: boolean) => void
type editTodo = (id: string, content: string) => void