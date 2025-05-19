class Todolist {
  list = [];
  get total() {
    return this.list.length;
  }
  get done() {
    return this.list.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0)
  }
  constructor() {
    const list = localStorage.getItem('list');
    if (list) {
      this.list = JSON.parse(list)
    }
  }
  setList() {
    localStorage.setItem('list', JSON.stringify(this.list));
  }
  addTodo(content) {
    const id = crypto.randomUUID();
    const done = false;
    this.list.unshift({ id, content, done })
    this.setList()
  }
  deleteTodo(id) {
    this.list = this.list.filter(v => v.id !== id)
    this.setList()
  }
  editTodo(id, content) {
    this.list.forEach(v => {
      if (v.id === id) {
        v.content = content;
      }
    })
    this.setList()
  }
  checkedTodo(id, done) {
    this.list.forEach(v => {
      if (v.id === id) {
        v.done = done
      }
    })
    this.setList()
  }
  clear() {
    this.list = this.list.filter(v => !v.done);
    this.setList()
  }
  checkedAll(done) {
    this.list.forEach(v => v.done = done);
    this.setList()
  }
}
