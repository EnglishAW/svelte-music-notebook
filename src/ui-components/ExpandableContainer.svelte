<script>
  export let title = "";

  let isExpanded = true;
  let expandCollapseIcon = "-";
  $: expandCollapseIcon = isExpanded ? "v" : ">";
</script>

<style>
  .container {
    border: 2px solid #fff;
  }
  .header {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    padding: 10px;
  }
  .title {
    font-size: 24px;
    margin-left: 10px;
  }
  .body {
    border-top: 2px solid #fff;
    padding: 10px;
  }
  .expandCollapsButton {
    text-align: center;
    width: 30px;
    height: 30px;
    font-size: 24px;
    cursor: pointer;
    margin: 0px 5px;
  }
</style>

<div class="container">
  <div class="header" on:click>
    <div
      class="expandCollapsButton"
      on:click={() => {
        isExpanded = !isExpanded;
      }}>
      {expandCollapseIcon}
    </div>
    <div class="title">{title}</div>
  </div>
  {#if isExpanded}
    <div class="body">
      <slot />
    </div>
  {/if}
</div>
