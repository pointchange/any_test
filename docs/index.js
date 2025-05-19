const headerInput=document.querySelector('header input');
const footerCheck=document.querySelector('.footer-check');
const clear=document.querySelector('.clear');
const footerDone=document.querySelector('.footer-done');
const ul=document.querySelector('main ul');
const search=document.querySelector('.search');
const todolist=new Todolist()

function render(){
    let html=''
    if(todolist.total>0){
        const arr= todolist.list.map(v=>
            `<li class="d-b-c" data-id="${v.id}">
                <div class="main-li-left">
                    <label  >
                        <input ${v.done?'checked':''} class="li-check" type="checkbox">
                        <span class="li-content">${v.content}</span>
                    </label>
                    <input class="inputEdit editing" type="text">
                </div>
                <div class="main-li-right">
                    <button class="edit">编辑</button>
                    <button class="delete">删除</button>
                </div>
            </li>`);
        html=arr.join('');
    }else{
        html='<div class="d-c-c empty">空</div>'
    }
    ul.innerHTML=html;
    const {done,total}=todolist;
    footerDone.textContent=`已完成：${done} / 共：${total}`;
    footerCheck.checked=total>0&&done===total;
}

headerInput.onkeyup=e=>{
    if(e.key!=="Enter")return;
    const {value}=e.target
    if(value.trim()==='')return;
    todolist.addTodo(value);
    render();
};

ul.onclick=e=>{
        const name=e.target.className;
        if(name==='delete'){
            const id=e.target.parentNode.parentNode.getAttribute('data-id');
            todolist.deleteTodo(id);
            render();

        }else if(name==='edit'){
            const id=e.target.parentNode.parentNode.getAttribute('data-id');
            const label=e.target.parentNode.parentNode.querySelector('label');
            label.classList.add('editing');
            const input=e.target.parentNode.parentNode.querySelector('.inputEdit');
            input.classList.remove('editing')
            input.value=label.querySelector('span').textContent;
            input.focus();
            input.onkeyup=e=>{
                if(e.key!=="Enter")return;
                const {value}=e.target
                if(value.trim()==='')return;
                todolist.editTodo(id,value);
                render();
            };
        }else if(name==='li-check'){
            const id=e.target.parentNode.parentNode.parentNode.getAttribute('data-id');
            e.target.onchange=e=>{
                todolist.checkedTodo(id,e.target.checked)
                render();
            }
        }
}

footerCheck.onchange=e=>{
    todolist.checkedAll(e.target.checked);
    render()
}
clear.onclick=()=>{
    todolist.clear()
    render()
}
search.onclick=()=>{
    render();
    const liContents= document.querySelectorAll('.li-content');
    const reg=new RegExp(`(${headerInput.value})`, 'ig');
    liContents.forEach(item=>{
        if(reg.test(item.textContent)){
           item.innerHTML= item.textContent.replace(reg,`<span class="search-active">$1</span>`)
        }
    })
}
window.onload=()=>{
    render()
}