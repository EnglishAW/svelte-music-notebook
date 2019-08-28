<script>
  import { writable } from "svelte/store";
  import { markupConsolidatedStore } from "./../store.js";
  import MarkupFormTool from "./MarkupFormTool.svelte";

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
    color: #afa;
  }
  .markupTool {
    margin: 0px 40px;
  }
</style>

<div class="content">
  <h1>Music Notebook</h1>
  <div class="markupTool">
    <MarkupFormTool />
  </div>
</div>
