<script lang="ts">
  import { base } from "$app/paths";
  import { APP_NAME } from "../constants/app";

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
    background-color: var(--gray-700);
    box-shadow: 0 0.05rem 0.1rem var(--gray-900);
    font-family: var(--font-mono);
    position: fixed;
    width: 100%;
    z-index: 100;
  }

  nav {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0.5rem 1rem;
  }

  a {
    border-radius: 0.25rem;
    color: var(--gray-100);
    font-weight: bold;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
  }

  a:active {
    background-color: var(--gray-600);
  }

  .account {
    color: var(--gray-400);
    font-size: 0.85rem;
  }

  a:active > .account {
    color: var(--gray-100);
  }

  a:active > .repository {
    color: var(--pink-300);
  }
</style>
