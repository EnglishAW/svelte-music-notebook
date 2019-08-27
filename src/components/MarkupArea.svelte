<script>
  export let text;
  export let onMarkupChange;
</script>

<style>

</style>

<textarea
  id="markupArea"
  rows="10"
  cols="50"
  value={text}
  on:keyup={e => onMarkupChange(e.target.value)} />
