<script>
  import IconExternalLink from "../icons/IconExternalLink.svelte";
  export let path;
  export let text;
  const prefix = "https://developer.mozilla.org/en-US/docs/";
</script>

<blockquote cite={prefix + path} class={$$props.class || ""}>
  <p>
    <slot />
  </p>
  <footer>
    <a href={prefix + path} rel="noopener noreferrer" target="_blank"
      >mdn » {text} <IconExternalLink /></a
    >
  </footer>
</blockquote>

<style>
  footer {
    text-align: center;
  }

  footer > a {
    align-items: center;
    display: inline-flex;
    margin-top: 0.25rem;
    padding: 0.25rem 1rem;
  }
</style>
