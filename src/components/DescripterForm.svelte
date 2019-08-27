<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import {
    consolidateMarkupHeaderStore,
    markupIdStore,
    markupTitleStore,
    markupComposerStore,
    markupSourceStore,
    markupMeterStore,
    markupLengthStore,
    markupKeyStore
  } from "./../store.js";
  import abcjs from "abcjs";
  import MarkupArea from "./MarkupArea.svelte";
  import NotationOutput from "./NotationOutput.svelte";

  //   export let onChange;

  const descriptionMarkup = writable("");

  // Updated by store
  let id = "01";
  let title = "Title";
  let composer = "";
  let source = "Copyright";
  let meter = "4/4";
  let length = "1/8";
  let key = "C";

  let attrMap = [];

  $: attrMap = [
    { name: "ID", id: "id", key: "X", value: id, store: markupIdStore },
    {
      name: "Title",
      id: "title",
      key: "T",
      value: title,
      store: markupTitleStore
    },
    {
      name: "Composer",
      id: "composer",
      key: "C",
      value: composer,
      store: markupComposerStore
    },
    {
      name: "Source",
      id: "source",
      key: "S",
      value: source,
      store: markupSourceStore
    },
    {
      name: "Meter",
      id: "meter",
      key: "M",
      value: meter,
      store: markupMeterStore
    },
    {
      name: "Note Duration",
      id: "length",
      key: "L",
      value: length,
      store: markupLengthStore
    },
    {
      name: "Key Signature",
      id: "key",
      key: "K",
      value: key,
      store: markupKeyStore
    }
  ];

  onMount(async () => {
    await handleChange();
  });

  const handleChange = e => {
    attrMap.forEach(attr => {
      if (!!e && e.target.id === attr.id) {
        attr.store.set(e.target.value);
      }
    });
    consolidateMarkupHeaderStore();
  };
</script>

<style>

</style>

<div>
  {#each attrMap as attr}
    <label>
      {attr.name}:
      <input
        id={attr.id}
        type="text"
        on:keyup={handleChange}
        value={attr.value} />
    </label>
  {/each}
</div>
