import { effect, Injectable, signal } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class Todolist{
    list=signal<List>([]);
  // get total(){
  //   return this.list.length;
  // }
  // get done(){
  //   return this.list.reduce((pre,cur)=>pre+(cur.done?1:0),0)
  // }
  constructor(){
    const list=localStorage.getItem('list');
    if(list){
      this.list.set(JSON.parse(list))
    }
    effect(()=>{
      localStorage.setItem('list',JSON.stringify(this.list()));
    })
  }
  addTodo(content:string) {
    const id=crypto.randomUUID();
    const done=false;
    // this.list.unshift({id,content,done})
    // const list=this.list();
    // this.list.set([{id,content,done},...list]);
    this.list.update((list)=>[{id,content,done},...list])
  }
  deleteTodo(id:string){
    //  this.list=this.list.filter(v=>v.id!==id)
    // this.list.set(this.list().filter(v=>v.id!==id))
    this.list.update(list=>list.filter(v=>v.id!==id));
  }
  editTodo(id:string,content:string){
    // this.list.forEach(v=>{
    //     if(v.id===id){
    //         v.content=content;
    //     }
    // })
    // this.list.set(this.list().map(v=>{
    //   if(v.id===id){
    //       v.content=content;
    //   }
    //   return v;
    // }))
    this.list.update(list=>list.map(v=>{
      if(v.id===id){
          v.content=content;
      }
      return v;
    }))
  }
  checkedTodo(id:string,done:boolean){
    // this.list.forEach(v=>{
    //     if(v.id===id){
    //         v.done=done
    //     }
    // })
    // this.list.set(this.list().map(v=>{
    //   if(v.id===id){
    //        v.done=done;
    //   }
    //   return v;
    // }))
    this.list.update(list=>list.map(v=>{
      if(v.id===id){
          v.done=done;
      }
      return v;
    }))
  }
  clear(){
    // console.log('clear')
    // this.list=this.list.filter(v=>!v.done);
    // this.list.set(this.list().filter(v=>!v.done))
    this.list.update(list=>list.filter(v=>!v.done))
  }
  checkedAll(done:boolean){
    // this.list.forEach(v=>v.done=done);
    // this.list.set(this.list().map(v=>{
    //   v.done=done
    //   return v;
    // }))
    this.list.update(list=>list.map(v=>{
          v.done=done;
      return v;
    }))
  }
}