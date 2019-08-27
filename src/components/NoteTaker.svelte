<script>
  import { writable } from "svelte/store";
  import { markupHeaderStore, markupNotesStore } from "./../store.js";
  import MarkupNotesOnly from "./MarkupNotesOnly.svelte";
  import DescripterForm from "./DescripterForm.svelte";
  import NotationOutput from "./NotationOutput.svelte";

  let markupHeader = ""; // Will be set updated by store
  let markupNotes = ""; // Will be set updated by store
  let markup = "";

  // TODO: Research how this can be done in the store
  $: markup = markupHeader + markupNotes;

  $: console.log(markup);

  markupHeaderStore.subscribe(value => {
    markupHeader = value;
  });
  markupNotesStore.subscribe(value => {
    markupNotes = value;
  });

  const handleMarkupHeaderChange = markup => {
    markupHeaderStore.set(markup);
  };
  const handleMarkupNotesChange = markup => {
    markupNotesStore.set(markup);
  };
</script>

<style>
  h1 {
    text-align: center;
    color: purple;
  }
</style>

<h1>Music Notebook</h1>
<DescripterForm />
<MarkupNotesOnly markup={markupNotes} onChange={handleMarkupNotesChange} />
<NotationOutput {markup} />
