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
    background-color: #2e3440;
    bottom: 0;
    display: flex;
    justify-content: center;
    padding: 1.25rem 0;
    position: fixed;
    width: 100%;
  }

  a {
    color: #ddd;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
  }

  a:active {
    background-color: #3b4252;
    border-radius: 0.25rem;
    color: #fff;
  }
</style>
