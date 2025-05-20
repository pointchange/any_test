export class Todolist{
  list=<List>([]);
  constructor(){}
  addTodo(content:string) {
    const id=crypto.randomUUID();
    const done=false;
    this.list.unshift({id,content,done})
  }
  deleteTodo(id:string){
     this.list=this.list.filter(v=>v.id!==id)
  }
  editTodo(id:string,content:string){
    this.list.forEach(v=>{
        if(v.id===id){
            v.content=content;
        }
    })
  }
  checkedTodo(id:string,done:boolean){
    this.list.forEach(v=>{
        if(v.id===id){
            v.done=done
        }
    })
  }
  clear(){
    this.list=this.list.filter(v=>!v.done);
  }
  checkedAll(done:boolean){
    this.list.forEach(v=>v.done=done);
  }
}