<script lang="ts">
  import IconChevronDown from "~/icons/IconChevronDown.svelte";
  import IconDotsHorizontal from "~/icons/IconDotsHorizontal.svelte";

  export let id: string;
  export let label = "";
  export let buttonStyle = "";
</script>

<details {...$$restProps}>
  <summary {id} aria-label={label ? null : "more"} style={buttonStyle}>
    {#if label}
      <div class="label">
        {label}
        <IconChevronDown
          style="height: 1.25em; vertical-align: -0.3em; width: 1.25em;"
        />
      </div>
    {:else}
      <IconDotsHorizontal
        style="height: 1em; vertical-align: -0.125em; width: 1em;"
      />
    {/if}
  </summary>
  <div class="menu" aria-labelledby={id}>
    <slot />
  </div>
</details>

<style>
  details {
    display: inline-block;
  }

  summary {
    border-radius: 0.25rem;
    color: var(--gray-400);
    list-style: none;
    padding: 0.5rem 0.9rem;
    white-space: nowrap;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  details[open] summary {
    box-shadow: var(--outline);
    color: var(--gray-100);
  }

  details[open] summary::before {
    background: transparent;
    bottom: 0;
    content: " ";
    cursor: initial;
    display: block;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;
  }

  .menu {
    background: var(--gray-700);
    border-radius: 0.25rem;
    box-shadow: 0.1rem 0.1rem 0.1rem var(--gray-900);
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0 0 -0.2rem;
    min-width: 10em;
    padding: 0.25rem 0;
    position: absolute;
    z-index: 20;
  }
</style>
