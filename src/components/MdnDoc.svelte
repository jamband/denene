<script lang="ts">
  import IconExternalLink from "~/icons/IconExternalLink.svelte";

  export let path: string;
  export let text: string;

  const prefix = "https://developer.mozilla.org/en-US/docs/";
</script>

<blockquote cite={prefix + path} class={$$props.class || ""}>
  <p>
    <slot />
  </p>
  <footer>
    <a href={prefix + path} rel="noopener noreferrer" target="_blank"
      >mdn » {text}<IconExternalLink
        style="height: 1em; vertical-align: -0.175em; width: 1em;"
      /></a
    >
  </footer>
</blockquote>

<style>
  p {
    margin-bottom: 0.5rem;
  }

  footer {
    text-align: center;
  }

  a {
    padding: 0.25rem 1rem;
  }
</style>
