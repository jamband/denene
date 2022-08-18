<script lang="ts">
  import BackToHomeLink from "../../components/BackToHomeLink.svelte";
  import BrowserSupport from "../../components/BrowserSupport.svelte";
  import Example from "../../components/Example.svelte";
  import MdnDoc from "../../components/MdnDoc.svelte";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "../../constants/app";
  import Page from "../../layouts/Page.svelte";

  const title = "center an element";
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
  <MdnDoc path="Web/CSS/Layout_cookbook/Center_an_element" text={title}>
    in this recipe you will see how to center one box inside another. centering
    both horizontally and vertically was difficult before flexbox, with the box
    alignment properties it is now straightforward.
  </MdnDoc>
</section>
<section>
  <h2>with <Example prefix={false}>flexbox</Example></h2>
  <div class="container flex">
    <div>center an element with flexbox</div>
  </div>
</section>
<section>
  <h2>with <Example prefix={false}>grid</Example></h2>
  <div class="container grid">
    <div>center an element with grid</div>
  </div>
</section>
<section>
  <h2>with <Example prefix={false}>position and transform</Example></h2>
  <div class="container position-transform">
    <div class="position-transform-box">
      center an element with position and transform
    </div>
  </div>
</section>
<section>
  <BrowserSupport
    items={[
      {
        value: "aspect-ratio",
        chrome: "88",
        firefox: "89",
        safari: "15",
      },
      {
        value: "display: flex",
        chrome: "29",
        firefox: "20",
        safari: "9",
      },
      {
        value: "display: grid",
        chrome: "57",
        firefox: "52",
        safari: "10.1",
      },
      {
        value: "place-items",
        chrome: "59",
        firefox: "45",
        safari: "11",
      },
      {
        value: "transform",
        chrome: "36",
        firefox: "16",
        safari: "9",
      },
    ]}
  />
</section>
<BackToHomeLink />

<style>
  .container {
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    padding: 0.75rem;
    text-align: center;
  }

  .flex {
    align-items: center;
    aspect-ratio: 1 / 1;
    background: var(--gray-700);
    display: flex;
    justify-content: center;
    width: 25%;
  }

  .grid {
    aspect-ratio: 4 / 3;
    background: var(--gray-700);
    display: grid;
    grid-template-rows: 1fr;
    place-items: center;
    width: 50%;
  }

  .position-transform {
    aspect-ratio: 16 / 9;
    background: var(--gray-700);
    position: relative;
    width: 75%;
  }

  @media (max-width: 640px) {
    .flex {
      width: 50%;
    }

    .grid {
      width: 75%;
    }

    .position-transform {
      width: 100%;
    }
  }

  .position-transform-box {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
