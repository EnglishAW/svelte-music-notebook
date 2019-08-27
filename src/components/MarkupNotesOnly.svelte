<script>
  export let markup;
  export let onChange;
</script>

<style>

</style>

<h2>Quick Notes:</h2>
<textarea
  id="markupNotesOnly"
  rows="1"
  cols="50"
  value={markup}
  on:keyup={e => onChange(e.target.value)} />
