<script>
  export let items;
</script>

<h2>browser support</h2>
<table>
  <thead>
    <tr>
      <th />
      <th>chrome</th>
      <th>firefox</th>
      <th>safari</th>
    </tr>
  </thead>
  <tbody>
    {#each items as item}
      <tr>
        <td>{item.value}</td>
        <td>{item.chrome}</td>
        <td>{item.firefox}</td>
        {#if item.safari === "tp"}
          <td><abbr title="preview browser support">{item.safari}</abbr></td>
        {:else}
          <td>{item.safari}</td>
        {/if}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    table-layout: fixed;
    text-align: center;
    width: 100%;
  }

  thead {
    border-bottom: 1px solid #505662;
  }

  tr,
  td,
  th {
    padding: 0.5rem 0.75rem;
    vertical-align: middle;
  }

  td:is(:first-child) {
    overflow-x: scroll;
  }
</style>
