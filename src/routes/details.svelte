<script>
  import BrowserSupport from "../components/BrowserSupport.svelte";
  import MdnDoc from "../components/MdnDoc.svelte";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "../constants";
  import Page from "../layouts/Page.svelte";

  const title = "<details>";
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:title" content="{title} ･ {APP_NAME}" />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content="{APP_URL}details/" />
</svelte:head>

<Page {title} />
<h1>{title}</h1>
<MdnDoc path="Web/HTML/Element/details" text={title}>
  the <code>{title}</code> html element creates a disclosure widget in which
  information is visible only when the widget is toggled into an "open" state. a
  summary or label must be provided using the
  <code>&lt;summary&gt;</code> element.
</MdnDoc>
<section>
  <h2>what tools do you use to build this site?</h2>
  <details>
    <summary>hosting</summary>
    <p>
      <span class="tool">github pages</span> » you can use github pages to host a
      website about yourself, your organization, or your project directly from a
      repository on github.com.
    </p>
  </details>
  <details>
    <summary>building</summary>
    <p>
      <span class="tool">sveltekit</span> » sveltekit is a framework for building
      web applications of all sizes, with a beautiful development experience and
      flexible filesystem-based routing.
    </p>
  </details>
  <details>
    <summary>palettes</summary>
    <p>
      <span class="tool">nord</span> » a total of sixteen, carefully selected, dimmed
      pastel colors for a eye-comfortable, but yet colorful ambiance.
    </p>
  </details>
</section>
<BrowserSupport
  items={[
    {
      value: title,
      chrome: "12",
      firefox: "49",
      safari: "6",
    },
    {
      value: "<summary>",
      chrome: "12",
      firefox: "49",
      safari: "6",
    },
  ]}
/>

<style>
  details {
    margin-bottom: 0.25rem;
  }

  summary {
    padding: 0.25rem 0;
  }

  details > p {
    background: #3b4252;
    border-radius: 0.25rem;
    margin-top: 0.5rem;
    padding: 1rem;
  }

  .tool {
    color: #88c0d0;
    font-weight: bold;
  }
</style>
