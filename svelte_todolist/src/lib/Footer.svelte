<script lang="ts">
  import { deleteBtn } from "../className/btn";
  import { checkedAll, clearDone, list } from "../stores/todolist.svelte";
  const done = $derived(
    $list.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0)
  );
  const total = $derived($list.length);
</script>

<footer class=" mt-4 flex justify-between items-center">
  <label>
    <input
      disabled={total === 0}
      type="checkbox"
      checked={done === total && total > 0}
      onchange={(e) => checkedAll((e.target as HTMLInputElement).checked)}
    />
    <span class="text-xl">全选</span>
    <span class="text-xl">已完成：{done} / 共：{total} </span>
  </label>
  <button
    disabled={total === 0 || done === 0}
    onclick={clearDone}
    class=" {deleteBtn} disabled:opacity-60">删除已完成</button
  >
</footer>
