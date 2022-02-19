<script>
  import { base } from "$app/paths";
  import { APP_NAME } from "../constants";

  const [account, repository] = APP_NAME.split("/");
</script>

<header>
  <nav aria-label="header navigation">
    <a href="{base}/"
      ><span class="account">{account}/</span><span class="repository"
        >{repository}</span
      ></a
    >
  </nav>
</header>

<style>
  header {
    background-color: #2e3440;
    font-family: var(--font-mono);
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
    border-radius: 0.25rem;
    color: #ddd;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
  }

  a:active {
    background-color: #3b4252;
    color: #fff;
  }

  .account {
    color: #909aae;
    font-size: 0.85rem;
  }

  .repository {
    font-weight: bold;
  }
</style>
