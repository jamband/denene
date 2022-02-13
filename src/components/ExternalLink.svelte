<script>
  import IconExternalLink from "../icons/IconExternalLink.svelte";
  export let href;
</script>

<a {href} rel="noopener noreferrer" target="_blank" class={$$props.class || ""}
  ><slot /><IconExternalLink /></a
>

<style>
  a {
    align-items: center;
    display: inline-flex;
  }
</style>
