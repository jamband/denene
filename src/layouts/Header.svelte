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
    background-color: #24222b;
    box-shadow: 0 0.05rem 0.1rem #020009;
    font-family: var(--font-mono);
    position: fixed;
    width: 100%;
    z-index: 1;
  }

  nav {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0.5rem 1rem;
  }

  a {
    border-radius: 0.25rem;
    color: #eceff4;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
  }

  a:active {
    background-color: #35333c;
  }

  .account {
    color: var(--body-color);
    font-size: 0.85rem;
  }

  .repository {
    font-weight: bold;
  }
</style>
