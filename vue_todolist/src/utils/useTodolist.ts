import { computed, onBeforeMount, reactive, ref, watch } from "vue";

export function useTodolist() {
  let list = reactive<List>([]);
  onBeforeMount(() => {
    const l = window.localStorage.getItem('list');
    if (l) {
      list.push(...JSON.parse(l));
    }
  })
  watch(list, (newValue) => {
    window.localStorage.setItem('list', JSON.stringify(newValue));
  })
  const addListItem: add = (content) => {
    list.unshift({
      id: crypto.randomUUID(),
      content,
      done: false,
    });
  };
  function deleteListItem(id: string) {
    list.forEach((v, i) => {
      if (v.id === id) {
        list.splice(i, 1);
      }
    });
  }
  const editListItem: editListItem = (id, name) => {
    list.forEach((v) => {
      if (v.id === id) {
        v.content = name;
      }
    });
  };
  const checkedAll: checkedAll = (done) => {
    list.forEach((v) => (v.done = done));
  };
  const checkedListItem: checkedListItem = (id, done) => {
    list.forEach((v) => {
      if (v.id === id) {
        v.done = done;
      }
    });
  };
  const clear: clear = () => {
    for (let i = 0; i < list.length; i++) {
      const v = list[i];
      if (v.done) {
        list.splice(i, 1);
        i--;
      }
    }
  };
  const keyWord = ref("");
  const findItem: find = (value) => {
    keyWord.value = value;
  };
  const l = computed(() => {
    if (keyWord.value) {
      return list.filter((v) => new RegExp(keyWord.value).test(v.content));
    } else {
      return list;
    }
  });
  return {
    list,
    addListItem,
    deleteListItem,
    editListItem,
    checkedAll,
    checkedListItem,
    clear,
    findItem,
    l,
  };
}
