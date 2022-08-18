<script lang="ts">
  export let viewBox: `${number} ${number} ${number} ${number}`;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {viewBox}
  fill="currentColor"
  role="img"
  aria-hidden={true}
  {...$$restProps}
>
  <slot />
</svg>
