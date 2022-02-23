<script>
  import BackToHomeLink from "../components/BackToHomeLink.svelte";
  import ExternalLink from "../components/ExternalLink.svelte";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "../constants";
  import Page from "../layouts/Page.svelte";

  const title = "about";
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:title" content="{title} ･ {APP_NAME}" />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content="{APP_URL}{title}/" />
</svelte:head>

<Page {title} />
<h1>{title}</h1>
<section>
  <p>{APP_DESCRIPTION}.</p>
  <p>
    this website is an open source project. see
    <ExternalLink href="https://github.com/{APP_NAME}"
      >github {APP_NAME}</ExternalLink
    >
    for details.
  </p>
</section>
<BackToHomeLink />

<style>
  section {
    text-align: center;
  }
</style>
