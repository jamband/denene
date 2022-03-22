<script>
  import IconChrvronDown from "../icons/IconChevronDown.svelte";
  import IconDotsHorizontal from "../icons/IconDotsHorizontal.svelte";

  export let id;
  export let label = "";
  export let buttonStyle = "";
</script>

<details {...$$restProps}>
  <summary
    {id}
    aria-expanded={false}
    onclick="this.setAttribute('aria-expanded', !this.parentNode.open);"
    aria-label={label ? null : "more"}
    style={buttonStyle}
  >
    {#if label}
      <div class="label">
        {label}
        <IconChrvronDown style="vertical-align: -0.15em;" />
      </div>
    {:else}
      <IconDotsHorizontal style="vertical-align: -0.125em;" />
    {/if}
  </summary>
  <p aria-labelledby={id}>
    <slot />
  </p>
</details>

<style>
  details {
    display: inline-block;
  }

  summary {
    border-radius: 0.25rem;
    color: var(--gray-400);
    cursor: pointer;
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

  p {
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
