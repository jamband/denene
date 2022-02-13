<script>
  export let prefix = true;
</script>

<small>
  {#if prefix}e.g. {/if}
  <slot />
</small>

<style>
  small {
    color: #b2bcd0;
    display: inline;
    font-size: 50%;
  }
</style>
