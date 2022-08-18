<script lang="ts">
  import { base } from "$app/paths";

  export let href: string;
  export let external = false;
</script>

{#if external}
  <a {href} rel="noopener noreferrer" target="_blank"><slot /></a>
{:else}
  <a href="{base}{href}"><slot /></a>
{/if}

<style>
  a {
    align-items: center;
    color: var(--gray-400);
    display: inline-flex;
    padding: 0.5rem 1.1rem;
    text-decoration: none;
  }

  a:focus,
  a:active {
    background: var(--gray-600);
    color: var(--gray-100);
  }
</style>
