<script lang="ts" setup>
  import Header from './components/Header.vue';
  import List from './components/List.vue';
  import Footer from './components/Footer.vue';
  import { provide } from 'vue'
  import { listKey } from './utils/key';
  import { useTodolist } from './utils/useTodolist';
  const { list,
    addListItem,
    deleteListItem,
    editListItem,
    checkedAll,
    checkedListItem,
    clear,
    findItem,
    l, } = useTodolist();
  provide(listKey, {
    deleteListItem,
    editListItem,
    checkedListItem
  })
</script>
<template>
  <q-layout>
    <Header :addListItem="addListItem" :findItem="findItem"></Header>
    <List :list="l"></List>
    <Footer :checkedAll="checkedAll" :clear="clear" :list="list"></Footer>
  </q-layout>
</template>
<style scoped></style>