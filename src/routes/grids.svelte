<script>
  import BrowserSupport from "../components/BrowserSupport.svelte";
  import MdnDoc from "../components/MdnDoc.svelte";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "../constants";
  import Page from "../layouts/Page.svelte";

  const title = "grids";
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
  <MdnDoc path="Learn/CSS/CSS_layout/Grids" text={title}>
    css grid layout is a two-dimensional layout system for the web. it lets you
    lay content out in rows and columns. it has many features that make building
    complex layouts straightforward. this article will explain all you need to
    know to get started with page layout.
  </MdnDoc>
</section>
<div class="container">
  <div class="box box1">one</div>
  <div class="box box2">two</div>
  <div class="box box3">three</div>
  <div class="box box4">four</div>
  <div class="box box5">five</div>
  <div class="box box6">six</div>
  <div class="box box7">seven</div>
  <div class="box box8">eight</div>
  <div class="box box9">nine</div>
  <div class="box box10">ten</div>
</div>
<BrowserSupport
  items={[
    {
      value: "display: grid",
      chrome: "57",
      firefox: "52",
      safari: "10.1",
    },
  ]}
/>

<style>
  .container {
    display: grid;
    font-family: var(--font-mono);
    font-weight: bold;
    gap: 1em;
    grid-auto-rows: minmax(100px, auto);
    margin-bottom: 2.5rem;
  }

  .box {
    border-radius: 0.25rem;
    color: #eceff4;
    display: grid;
    font-size: 0.9rem;
    place-items: center;
  }

  .box1 {
    background: #88c0d0;
  }

  .box2 {
    background: #b48ead;
  }

  .box3 {
    background: #3b4252;
  }

  .box4 {
    background: #a3be8c;
  }

  .box5 {
    background: #ebcb8b;
  }

  .box6 {
    background: #d08770;
  }

  .box7 {
    background: #bf616a;
  }

  .box8 {
    background: #4c566a;
  }

  .box9 {
    background: #8fbcbb;
  }

  .box10 {
    background: #81a1c1;
  }

  @media only screen and (max-width: 640px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }

    .box3 {
      grid-column: 1 / 3;
    }

    .box6 {
      grid-column: 1 / 3;
    }

    .box9 {
      grid-column: 1 / 3;
      grid-row: 6 / 8;
    }

    .box10 {
      grid-column: 1 / 3;
    }
  }

  @media only screen and (min-width: 640px) {
    .container {
      grid-template-columns: repeat(3, 1fr);
    }

    .box1 {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }

    .box2 {
      grid-column: 3 / 3;
      grid-row: 1 / 3;
    }

    .box3 {
      grid-column: 1 / 1;
    }

    .box4 {
      grid-column: 2 / 4;
    }

    .box5 {
      grid-column: 1 / 3;
    }

    .box7 {
      grid-row: 5 / 7;
    }

    .box10 {
      grid-column: 2 / 4;
    }
  }
</style>
