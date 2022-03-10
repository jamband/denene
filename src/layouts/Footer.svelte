<script>
  import { base } from "$app/paths";
  import { APP_NAME } from "../constants";
</script>

<footer>
  <nav aria-label="footer navigation">
    <a href="{base}/about/">about</a>
    <a href="{base}/contact/">contact</a>
    <a
      href="https://github.com/{APP_NAME}"
      rel="noopener noreferrer"
      target="_blank">github</a
    >
  </nav>
</footer>

<style>
  footer {
    align-items: center;
    background-color: #24222b;
    bottom: 0;
    box-shadow: 0 0 0.1rem 0.05rem #020009;
    display: flex;
    justify-content: center;
    padding: 1.25rem 0;
    position: fixed;
    width: 100%;
  }

  a {
    border-radius: 0.25rem;
    color: var(--body-color);
    padding: 0.75rem 1.5rem;
    text-decoration: none;
  }

  a:active {
    background-color: #35333c;
    color: #eceff4;
  }
</style>
