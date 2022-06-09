<script>
  export let viewBox;
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
