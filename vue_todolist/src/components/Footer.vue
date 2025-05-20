<script lang="ts" setup>
    import { computed, ref } from 'vue';
    const props = defineProps<{ checkedAll: checkedAll, clear: clear, list: List }>();
    const done = computed(() => props.list.reduce((pre, cur) => pre += (cur.done ? 1 : 0), 0))
    const total = computed(() => props.list.length)
    const label = computed(() => `以完成 ${done.value} / 共 ${total.value}`)
</script>
<template>
    <q-footer>
        <div class="row justify-between">
            <q-checkbox @update:model-value="(v) => checkedAll(v)" :model-value="done === total" :label="label" />
            <q-btn color="deep-orange" label="清除已完成" @click="clear" />
        </div>
    </q-footer>
</template>
<style scoped></style>