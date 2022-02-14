<script>
  import { base } from "$app/paths";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "../constants";
  import Page from "../layouts/Page.svelte";

  const title = "home";
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:title" content={APP_NAME} />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content={APP_URL} />
</svelte:head>

<Page />
<h1>{title}</h1>
<ul>
  <li><a href="{base}/introduction/">introduction</a></li>
  <li><a href="{base}/grids/">grids</a></li>
  <li><a href="{base}/flexbox/">flexbox</a></li>
  <li><a href="{base}/center-an-element/">center an element</a></li>
  <li><a href="{base}/transition/">transition</a></li>
  <li><a href="{base}/focus-within/">:focus-within</a></li>
  <li><a href="{base}/accent-color/">accent-color</a></li>
  <li><a href="{base}/text-underline/">text underline</a></li>
  <li><a href="{base}/details/">&lt;details&gt;</a></li>
  <li><a href="{base}/dialog/">&lt;dialog&gt;</a></li>
</ul>

<style>
  ul {
    font-size: 200%;
  }

  li {
    margin-bottom: 1rem;
  }

  li::before {
    color: #b48ead;
    content: "#";
    font-size: 60%;
    padding-right: 0.25rem;
  }

  a {
    padding-bottom: 0.5rem;
  }
</style>
