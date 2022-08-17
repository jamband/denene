<script>
  import BackToHomeLink from "../../components/BackToHomeLink.svelte";
  import ExternalLink from "../../components/ExternalLink.svelte";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "../../constants";
  import Page from "../../layouts/Page.svelte";

  const title = "contact";
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
  <p>
    please to the message via
    <ExternalLink href="https://twitter.com/livejam_db">twitter</ExternalLink>
    or
    <ExternalLink href="https://github.com/{APP_NAME}/issues"
      >github</ExternalLink
    >
    issues. thank you.
  </p>
</section>
<BackToHomeLink />

<style>
  section {
    text-align: center;
  }
</style>
