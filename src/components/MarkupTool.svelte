<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import abcjs from "abcjs";
  import MarkupArea from "./MarkupArea.svelte";
  import NotationOutput from "./NotationOutput.svelte";

  const markup = writable(`| |]`);

  const handleMarkupChange = t => {
    $markup = t;
  };
</script>

<style>

</style>

<!-- <MarkupArea text={$markup} onMarkupChange={handleMarkupChange} /> -->
<NotationOutput markup={$markup} />
