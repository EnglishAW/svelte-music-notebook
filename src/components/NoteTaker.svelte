<script>
  import { writable } from "svelte/store";
  import { markupConsolidatedStore } from "./../store.js";
  import MarkupNotesOnly from "./MarkupNotesOnly.svelte";
  import DescripterForm from "./DescripterForm.svelte";
  import NotationOutput from "./NotationOutput.svelte";

  let markupHeader = "";
  let markupNotes = "| |]";
  let markup = ""; // Will be set updated by store

  markupConsolidatedStore.subscribe(value => {
    markup = value;
  });

  const handleMarkupHeaderChange = markup => {
    markupHeader = markup;
  };
  const handleMarkupNotesChange = markup => {
    markupNotes = markup;
  };

  $: markupConsolidatedStore.set(markupHeader + markupNotes);
</script>

<style>
  h1 {
    text-align: center;
    color: purple;
  }
</style>

<h1>Music Notebook</h1>
<DescripterForm onChange={handleMarkupHeaderChange} />
<MarkupNotesOnly markup={markupNotes} onChange={handleMarkupNotesChange} />
<hr />
<div class="outputContainer">
  <NotationOutput {markup} />
</div>
