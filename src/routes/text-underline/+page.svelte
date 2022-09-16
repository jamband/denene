<script lang="ts">
  import BackToHomeLink from "~/components/BackToHomeLink.svelte";
  import BrowserSupport from "~/components/BrowserSupport.svelte";
  import MdnDoc from "~/components/MdnDoc.svelte";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "~/constants/app";
  import IconExternalLink from "~/icons/IconExternalLink.svelte";
  import Page from "~/layouts/Page.svelte";

  const title = "text underline";
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:title" content="{title} ･ {APP_NAME}" />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content="{APP_URL}text-underline/" />
</svelte:head>

<Page {title} />
<h1>{title}</h1>
<section>
  <MdnDoc path="Web/CSS/text-decoration" text="text-decoration">
    the <code>text-decoration</code> shorthand css property sets the appearance of
    decorative lines on text. it is a shorthand for text-decoration-line, text-decoration-color,
    text-decoration-style, and the newer text-decoration-thickness property.
  </MdnDoc>
</section>
<section>
  <h2>1</h2>
  <pre><code>text-decoration: underline;</code></pre>
  <a
    href="https://developer.mozilla.org/en-US/"
    class="example example1-link"
    rel="noopener noreferrer"
    target="_blank"
    >mdn web docs<IconExternalLink
      style="height: 1em; vertical-align: -0.175em; width: 1em;"
    /></a
  >
</section>
<section>
  <h2>2</h2>
  <pre><code
      >text-decoration: none;
border-bottom: 1px solid var(--pink-300);</code
    ></pre>
  <a
    href="https://developer.mozilla.org/en-US/"
    class="example example2-link"
    rel="noopener noreferrer"
    target="_blank"
    >mdn web docs<IconExternalLink
      style="height: 1em; vertical-align: -0.175em; width: 1em;"
    /></a
  >
</section>
<section>
  <h2>3</h2>
  <pre><code
      >text-decoration: underline;
text-decoration-thickness: 0.1em;
text-underline-offset: 0.25em;</code
    ></pre>
  <a
    href="https://developer.mozilla.org/en-US/"
    class="example example3-link"
    rel="noopener noreferrer"
    target="_blank"
    >mdn web docs<IconExternalLink
      style="height: 1em; vertical-align: -0.175em; width: 1em;"
    /></a
  >
</section>
<section>
  <h2>4</h2>
  <pre><code
      >background-image: linear-gradient(transparent 95%, var(--pink-300) 0);
text-decoration: none;</code
    ></pre>
  <a
    href="https://developer.mozilla.org/en-US/"
    class="example example4-link"
    rel="noopener noreferrer"
    target="_blank"
    >mdn web docs<IconExternalLink
      style="height: 1em; vertical-align: -0.175em; width: 1em;"
    /></a
  >
</section>
<section>
  <BrowserSupport
    items={[
      {
        value: "text-underline-offset",
        chrome: "87",
        firefox: "70",
        safari: "12.1",
      },
      {
        value: "text-decoration-thickness",
        chrome: "89",
        firefox: "70",
        safari: "12.1",
      },
    ]}
  />
</section>
<BackToHomeLink />

<style>
  .example {
    align-items: center;
    display: inline-flex;
    text-decoration: none;
    text-underline-offset: auto;
  }

  .example1-link {
    text-decoration: underline;
  }

  .example2-link {
    border-bottom: 1px solid var(--pink-300);
    text-decoration: none;
  }

  .example3-link {
    text-decoration: underline;
    text-decoration-thickness: 0.1em;
    text-underline-offset: 0.25em;
  }

  .example4-link {
    background-image: linear-gradient(transparent 95%, var(--pink-300) 0);
    text-decoration: none;
  }
</style>
