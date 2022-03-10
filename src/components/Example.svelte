<script>
  export let prefix = true;
</script>

<small>
  {#if prefix}e.g. {/if}
  <slot />
</small>

<style>
  small {
    color: var(--body-color);
    display: inline;
    font-size: 50%;
  }
</style>
