<script>
  export let markup;
  export let onChange;
</script>

<style>
  #markupNotesOnly {
    width: 100%;
    font-size: 24px;
  }
</style>

<h2>Quick Notes:</h2>
<textarea
  id="markupNotesOnly"
  rows="1"
  cols="50"
  value={markup}
  on:keyup={e => onChange(e.target.value)} />
