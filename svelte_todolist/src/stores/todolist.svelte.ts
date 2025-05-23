import { writable } from "svelte/store";


const list = writable<list>([
    {
        id: "001",
        content: "vue",
        done: true,
    },
    {
        id: "002",
        content: "react",
        done: true,
    },
    {
        id: "003",
        content: "angular",
        done: false,
    },
]);


const addList: add = (content) => {
    const id = crypto.randomUUID();
    const done = false;
    list.update(list => [{ id, content, done }, ...list])
};
const deleteList: deleteList = (id) => {
    list.update(list => list.filter((v) => v.id !== id))
};
const clearDone: clearDone = () => {
    list.update(list => list.filter(v => !v.done));
}

const checkedTodo: checkedTodo = (id, bool) => {
    list.update(list => list.map(v => {
        if (v.id === id) {
            v.done = bool
        }
        return v;
    }));
}

const checkedAll: checkedAll = bool => {
    list.update(list => list.map(v => {
        v.done = bool
        return v;
    }));
}

const editTodo: editTodo = (id, content) => {
    list.update(list => list.map(v => {
        if (v.id === id) {
            v.content = content
        }
        return v;
    }));
}

export {
    list,
    addList,
    deleteList,
    clearDone,
    checkedTodo,
    checkedAll,
    editTodo,
}