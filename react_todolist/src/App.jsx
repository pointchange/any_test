import { useState, createContext, useEffect } from 'react'
import Header from './comonents/Header/header';
import Container from '@mui/material/Container';
import ToDoLIst from './comonents/ToDoLIst/ToDoLIst';
import Footer from './comonents/Footer/Footer';
const todos = createContext()
export { todos }
const KEY = 'list'
function App() {
  const [list, setList] = useState(() => {
    const storedValue = typeof window !== 'undefined' ? localStorage.getItem(KEY) : null;
    return storedValue ? JSON.parse(storedValue) : [];
  });
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(list));
  }, [KEY, list])
  function addTodo(todo) {
    setList([todo, ...list]);
  }
  function deleteTodo(id) {
    setList(list.filter(v => v.id !== id));
  }
  function editTodo(id, content) {
    list.forEach(v => {
      if (v.id === id) {
        v.content = content;
      }
    })
    setList([...list]);
  }
  function clearALL() {
    setList(list.filter(v => !v.done));
  }
  function checkedTodo(id, bool) {
    list.forEach(v => {
      if (v.id === id) {
        v.done = bool;
      }
    })
    setList([...list]);
  }
  function checkAll(bool) {
    setList(list.map(v => ({ ...v, done: bool })));
  }
  return (
    <>
      <Container>
        <Header addTodo={addTodo} ></Header>
        <todos.Provider value={
          {
            checkedTodo, editTodo, deleteTodo
          }
        }>
          <ToDoLIst list={list}></ToDoLIst>
        </todos.Provider>
        <Footer checkAll={checkAll} list={list} clearALL={clearALL}></Footer>
      </Container>
    </>
  )
}

export default App
