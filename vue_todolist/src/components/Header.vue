<script lang="ts" setup>
    import { ref } from 'vue';
    defineProps<{
        addListItem: add,
        findItem: find
    }>()
    const text = ref('');
</script>
<template>
    <q-header>
        <div class="row items-center">
            <div class="col-9">
                <q-input placeholder="请输入，按 Enter 确认" standout="bg-teal text-white" v-model="text"
                    @keyup="(e: KeyboardEvent) => e.key === 'Enter' && addListItem((e.target as HTMLInputElement).value)" />
            </div>
            <div class="col row justify-evenly">
                <q-btn label="添加" @click="addListItem(text)" />
                <q-btn label="查找" @click="findItem(text)" />
            </div>
        </div>

    </q-header>
</template>
<style scoped>
    .flex-center {
        display: flex;
        justify-content: center;
    }
</style>