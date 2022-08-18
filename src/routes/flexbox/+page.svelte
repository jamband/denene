<script lang="ts">
  import { base } from "$app/paths";
  import BackToHomeLink from "../../components/BackToHomeLink.svelte";
  import BrowserSupport from "../../components/BrowserSupport.svelte";
  import Example from "../../components/Example.svelte";
  import MdnDoc from "../../components/MdnDoc.svelte";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "../../constants/app";
  import Page from "../../layouts/Page.svelte";

  const title = "flexbox";
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
  <MdnDoc path="Learn/CSS/CSS_layout/Flexbox" text={title}>
    {title} is a one-dimensional layout method for arranging items in rows or columns.
    items flex (expand) to fill additional space or shrink to fit into smaller spaces.
    this article explains all the fundamentals.
  </MdnDoc>
</section>
<section>
  <h2>row <Example>navigation header</Example></h2>
  <div class="row-container">
    <a href="{base}/" class="row-box">home</a>
    <a href="{base}/about/" class="row-box">about</a>
    <a href="{base}/contact/" class="row-box">contact</a>
  </div>
</section>
<section>
  <div class="anonymous-container">
    <div class="anonymous-box">
      <h2>column <Example>side navigation</Example></h2>
      <div class="column-container">
        <a href="{base}/" class="column-box">home</a>
        <a href="{base}/about/" class="column-box">about</a>
        <a href="{base}/contact/" class="column-box">contact</a>
      </div>
    </div>
    <div class="anonymous-box">
      <h2>grids and flexbox</h2>
      <MdnDoc
        path="Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout#grid_and_flexbox"
        text="grids and flexbox"
      >
        the basic difference between css grid layout and css flexbox layout is
        that flexbox was designed for layout in one dimension - either a row or
        a column. grid was designed for two-dimensional layout - rows, and
        columns at the same time.
      </MdnDoc>
    </div>
  </div>
</section>
<section>
  <BrowserSupport
    items={[
      {
        value: "display: flex",
        chrome: "29",
        firefox: "20",
        safari: "9",
      },
    ]}
  />
</section>
<BackToHomeLink />

<style>
  .row-container {
    display: flex;
    font-weight: bold;
    justify-content: space-around;
  }

  .row-box {
    border-bottom: 1px solid var(--gray-600);
    border-top: 1px solid var(--gray-600);
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    width: 100%;
  }

  @media (min-width: 640px) {
    .anonymous-container {
      display: flex;
      justify-content: space-between;
    }

    .anonymous-box {
      width: 100%;
    }

    .anonymous-box:first-child {
      padding-right: 1rem;
    }

    .anonymous-box:last-child {
      padding-left: 1rem;
    }
  }

  .column-container {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  .column-box {
    border-bottom: 1px solid var(--gray-600);
    padding: 0.75em 1rem;
    text-decoration: none;
  }

  .row-box:active,
  .column-box:active {
    background: var(--gray-700);
  }
</style>
