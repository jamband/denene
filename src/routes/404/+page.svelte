<script lang="ts">
  import BackToHomeLink from "~/components/BackToHomeLink.svelte";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "~/constants/app";
  import Page from "~/layouts/Page.svelte";

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
</section>
<BackToHomeLink />

<style>
  section {
    text-align: center;
  }
</style>
