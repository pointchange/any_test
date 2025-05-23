<script lang="ts">
  import type { Action } from "svelte/action";
  import { deleteBtn } from "../../className/btn";
  import { checkedTodo, deleteList } from "../../stores/todolist.svelte";
  const { id, content, done }: listObj = $props();
  let isEditing = $state(false);
  const inputRef: Action = (node) => {
    $effect(() => {
      if (isEditing) {
        node.focus();
      } else {
        node.blur();
      }
    });
  };
</script>

<li
  class=" has-checked:bg-gray-200 has-checked:opacity-60 group/item py-2 flex justify-between items-center hover:bg-gray-100
  "
>
  {#if isEditing}
    <input
      class=" text-xl"
      onblur={() => (isEditing = false)}
      use:inputRef
      type="text"
      value={content}
    />
  {:else}
    <label>
      <input
        onchange={(e) =>
          checkedTodo(id, (e.target as HTMLInputElement).checked)}
        class="mr-2"
        type="checkbox"
        checked={done}
      />
      <span class="text-xl {done ? 'line-through' : ''}">{content}</span>
    </label>
  {/if}
  <div class=" invisible group-hover/item:visible">
    <button
      onclick={() => (isEditing = true)}
      class="mx-2 px-2 border rounded-sm hover:bg-cyan-400 hover:text-white
      "
      disabled={done}>编辑</button
    >
    <button
      onclick={() => deleteList(id)}
      class={[deleteBtn, done ? "bg-rose-100" : ""]}>删除</button
    >
  </div>
</li>
