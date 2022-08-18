<script lang="ts">
  export let prefix = true;
</script>

<small>
  {#if prefix}e.g. {/if}
  <slot />
</small>

<style>
  small {
    color: var(--gray-400);
    display: inline;
    font-size: 50%;
  }
</style>
