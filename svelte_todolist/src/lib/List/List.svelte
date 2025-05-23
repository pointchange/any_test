<script lang="ts">
  import { KEY, list } from "../../stores/todolist.svelte";
  import Item from "./Item.svelte";

  $effect(() => {
    window.localStorage.setItem(KEY, JSON.stringify($list));
  });
</script>

<ul class="mt-6">
  {#each $list as item (item.id)}
    <Item {...item}></Item>
  {/each}
</ul>
