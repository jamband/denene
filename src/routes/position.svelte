<script>
  import BackToHomeLink from "../components/BackToHomeLink.svelte";
  import BrowserSupport from "../components/BrowserSupport.svelte";
  import ExternalLink from "../components/ExternalLink.svelte";
  import MdnDoc from "../components/MdnDoc.svelte";
  import WaveLineImage from "../components/WaveLineImage.svelte";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "../constants";
  import Page from "../layouts/Page.svelte";

  const title = "position";
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:title" content="{title} ･ {APP_NAME}" />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content="{APP_URL}position/" />
</svelte:head>

<Page {title} />
<h1>{title}</h1>
<section>
  <MdnDoc path="Web/CSS/position" text={title}>
    The <code>position</code> CSS property sets how an element is positioned in a
    document. The top, right, bottom, and left properties determine the final location
    of positioned elements.
  </MdnDoc>
</section>
<section>
  <h2>overlay contents</h2>
  <p class="description">
    an example of an overlay images using <code>position: relative;</code> and
    <code>position: absolute;</code>.
  </p>
  <div class="example1">
    <WaveLineImage />
    <p class="example1-text">
      free svg background by
      <ExternalLink href="https://bgjar.com">bgjar</ExternalLink>
    </p>
  </div>
</section>
<section>
  <h2>fixed position side content</h2>
  <p class="description">
    using <code>position: sticky;</code>. please scroll down a lot.
  </p>
  <div class="example2">
    <div class="example2-main">main</div>
    <div class="example2-side">side</div>
  </div>
</section>
<section>
  <BrowserSupport
    items={[
      {
        value: "position: sticky",
        chrome: "56",
        firefox: "32",
        safari: "13",
      },
    ]}
  />
</section>
<BackToHomeLink />

<style>
  .description {
    margin-bottom: 1rem;
  }

  .example1 {
    position: relative;
  }

  .example1-text {
    font-weight: bold;
    left: 50%;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 640px) {
    .example1-text {
      font-size: 1.5rem;
    }
  }

  .example2 {
    display: flex;
    flex-direction: row-reverse;
    gap: 1rem;
    text-align: center;
  }

  .example2-main {
    background: #3b4252;
    border-radius: 0.25rem;
    font-family: var(--font-mono);
    font-weight: bold;
    height: 100vh;
    padding: 1rem;
    width: 100%;
  }

  .example2-side {
    background: #3b4252;
    border-radius: 0.25rem;
    font-family: var(--font-mono);
    font-weight: bold;
    height: 3.5em;
    padding: 1rem;
    position: -webkit-sticky;
    position: sticky;
    top: 5em;
    width: 40%;
  }
</style>
