<script lang="ts" setup>
    import { listKey } from '@/utils/key';
    import { inject, ref } from 'vue';
    const value = inject(listKey)
    defineProps(['id', 'content', 'done'])

    const isEditing = ref(false);
    function edit(e: KeyboardEvent, id: string) {
        if (e.key === 'Enter') {
            value?.editListItem(id, (e.target as HTMLInputElement).value)
            isEditing.value = false;
        }
    }
</script>
<template>
    <q-item clickable v-ripple>
        <q-item-section tag="label" side>
            <q-checkbox :model-value="done" @update:model-value="(v) => value?.checkedListItem(id, v)">
            </q-checkbox>
        </q-item-section>
        <q-item-section>
            <q-item-label v-if="!isEditing">{{ content }}</q-item-label>
            <q-input :autofocus="isEditing" dense tag="input" @blur="isEditing = false" ref="inputRef" v-else
                :model-value="content" label="回车确认" @keyup="edit($event, id)" />
        </q-item-section>
        <q-item-section side>
            <q-btn label="编辑" @click="isEditing = true" />
        </q-item-section>
        <q-item-section side>
            <q-btn label="删除" @click="value?.deleteListItem(id)" />
        </q-item-section>
    </q-item>
</template>
<style scoped></style>