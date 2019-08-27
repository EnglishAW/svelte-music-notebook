<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import abcjs from "abcjs";
  import MarkupArea from "./MarkupArea.svelte";
  import NotationOutput from "./NotationOutput.svelte";

  // Props
  export let onChange;

  // Local
  let id = "01";
  let title = "Title";
  let composer = "";
  let source = "Copyright";
  let meter = "4/4";
  let length = "1/8";
  let key = "C";

  let attrMap = [];

  $: attrMap = [
    { name: "ID", id: "id", key: "X", value: id },
    {
      name: "Title",
      id: "title",
      key: "T",
      value: title
    },
    {
      name: "Composer",
      id: "composer",
      key: "C",
      value: composer
    },
    {
      name: "Source",
      id: "source",
      key: "S",
      value: source
    },
    {
      name: "Meter",
      id: "meter",
      key: "M",
      value: meter
    },
    {
      name: "Note Duration",
      id: "length",
      key: "L",
      value: length
    },
    {
      name: "Key Signature",
      id: "key",
      key: "K",
      value: key
    }
  ];

  onMount(async () => {
    await onChange(consolidateMarkupHeader());
  });

  const handleChange = e => {
    attrMap.forEach(attr => {
      if (!!e && e.target.id === attr.id) {
        attr.value = e.target.value;
        onChange(consolidateMarkupHeader());
      }
    });
  };

  export const consolidateMarkupHeader = () => {
    let markupHeader = "";
    attrMap.forEach(attr => {
      markupHeader += `${attr.key}: ${attr.value}\n`;
    });
    return markupHeader;
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
        on:input={handleChange}
        value={attr.value} />
    </label>
  {/each}
</div>
