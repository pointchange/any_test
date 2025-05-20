<script lang="ts" setup>
    import ListItem from './ListItem.vue';
    defineProps(['list'])
</script>
<template>
    <q-page-container>
        <q-list bordered padding>
            <ListItem v-for="item in list" :key="item.id" v-bind="item" />
        </q-list>
    </q-page-container>
</template>
<style scoped></style>