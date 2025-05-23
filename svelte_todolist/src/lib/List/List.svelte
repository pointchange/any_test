<script lang="ts">
  import { list } from "../../stores/todolist.svelte";
  import Item from "./Item.svelte";
</script>

<ul class="mt-6">
  {#each $list as item (item.content)}
    <Item {...item}></Item>
  {/each}
</ul>
