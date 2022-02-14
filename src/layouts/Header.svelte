<script>
  import { base } from "$app/paths";
  import { APP_NAME } from "../constants";
</script>

<header>
  <nav aria-label="header navigation">
    <a href="{base}/">{APP_NAME}</a>
  </nav>
</header>

<style>
  header {
    background-color: #2e3440;
    position: fixed;
    width: 100%;
  }

  nav {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0.5rem 1rem;
  }

  a {
    align-items: center;
    border-radius: 0.25rem;
    color: #ddd;
    display: inline-flex;
    font-weight: 500;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
  }

  a:active {
    background-color: #3b4252;
    color: #fff;
  }
</style>
