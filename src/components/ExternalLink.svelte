<script lang="ts">
  import IconExternalLink from "~/icons/IconExternalLink.svelte";

  export let href: string;
</script>

<a {href} rel="noopener noreferrer" target="_blank" class={$$props.class || ""}
  ><slot /><IconExternalLink
    style="height: 1em; vertical-align: -0.175em; width: 1em;"
  /></a
>
