<script>
  import "../styles/app.css";
  import { APP_NAME } from "../constants";
  import Footer from "../layouts/Footer.svelte";
  import Header from "../layouts/Header.svelte";
</script>

<svelte:head>
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={APP_NAME} />
</svelte:head>

<div class="container">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  main {
    flex-grow: 1;
    margin: 0 auto;
    padding: 7rem 1rem;
    width: 100%;
  }

  @media (min-width: 640px) {
    main {
      max-width: 640px;
    }
  }

  @media (min-width: 768px) {
    main {
      max-width: 768px;
    }
  }
</style>
