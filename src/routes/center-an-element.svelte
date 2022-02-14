<script>
  import BrowserSupport from "../components/BrowserSupport.svelte";
  import MdnDoc from "../components/MdnDoc.svelte";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "../constants";
  import Page from "../layouts/Page.svelte";

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
<MdnDoc path="Web/CSS/Layout_cookbook/Center_an_element" text={title}>
  in this recipe you will see how to center one box inside another. centering
  both horizontally and vertically was difficult before flexbox, with the box
  alignment properties it is now straightforward.
</MdnDoc>
<section>
  <h2>with flexbox</h2>
  <div class="container flex">
    <div>center an element with flexbox</div>
  </div>
</section>
<section>
  <h2>with grid</h2>
  <div class="container grid">
    <div>center an element with grid</div>
  </div>
</section>
<section>
  <h2>with position and transform</h2>
  <div class="container position-transform">
    <div class="position-transform-box">
      center an element with position and transform
    </div>
  </div>
</section>
<BrowserSupport
  items={[
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
      value: "transform",
      chrome: "36",
      firefox: "16",
      safari: "9",
    },
    {
      value: "aspect-ratio",
      chrome: "88",
      firefox: "89",
      safari: "15",
    },
  ]}
/>

<style>
  .container {
    aspect-ratio: 1;
    border-radius: 0.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
    padding: 0.75rem;
    text-align: center;
    width: 12rem;
  }

  .flex {
    align-items: center;
    background: #88c0d0;
    display: flex;
    justify-content: center;
  }

  .grid {
    background: #bf616a;
    display: grid;
    place-items: center;
  }

  .position-transform {
    background: #b48ead;
    position: relative;
  }

  .position-transform-box {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
