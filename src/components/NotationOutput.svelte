<script>
  import MarkupArea from "./MarkupArea.svelte";
  import { onMount } from "svelte";
  import abcjs from "abcjs";

  export let markup;

  onMount(async () => {
    // console.log(markup);
    await abcjs.renderAbc("engraving", markup, {
      responsive: "resize"
    });
  });

  $: abcjs.renderAbc("engraving", markup, {
    responsive: "resize"
  });
</script>

<style>
  #engravingContainer {
    border: 2px solid black;
  }
</style>

<div id="engravingContainer">
  <div id="engraving" />
</div>
