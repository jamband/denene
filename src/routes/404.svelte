<script>
  import { base } from "$app/paths";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "../constants";
  import Page from "../layouts/Page.svelte";

  const title = "not found";
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:title" content="{title} ･ {APP_NAME}" />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content={APP_URL} />
</svelte:head>

<Page {title} />
<h1>404</h1>
<section>
  <p>this page does not exist.</p>
  <a href="{base}/">← back to home</a>
</section>

<style>
  section {
    text-align: center;
  }

  p {
    margin-bottom: 0.25rem;
  }

  a {
    display: inline-block;
    padding: 0.75rem 1rem;
  }
</style>
