<script lang="ts">
  import Header from "./lib/Header.svelte";
  import List from "./lib/List/List.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<div class=" mt-4 flex justify-center items-center">
  <div class="w-1/2 p-8 shadow-md rounded-2xl hover:inset-shadow-sm">
    <Header />
    <main>
      <List />
    </main>
    <Footer />
  </div>
</div>
