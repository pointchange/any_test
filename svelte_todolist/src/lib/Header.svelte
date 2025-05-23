<script lang="ts">
  import { addList } from "../stores/todolist.svelte";

  function keyupHandle(e: KeyboardEvent) {
    const { value } = e.target as HTMLInputElement;
    if (value.trim() === "") return;
    if (e.key !== "Enter") return;
    addList(value);
  }
</script>

<header>
  <input
    placeholder="做点什么，按 Enter 确认"
    onkeyup={keyupHandle}
    class=" p-2 w-full shadow-md rounded-sm focus:inset-shadow-sm outline-none shadow-gray-300"
    type="text"
  />
</header>
