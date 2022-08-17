<script>
  import BackToHomeLink from "../../components/BackToHomeLink.svelte";
  import BrowserSupport from "../../components/BrowserSupport.svelte";
  import ExternalLink from "../../components/ExternalLink.svelte";
  import MdnDoc from "../../components/MdnDoc.svelte";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "../../constants";
  import Page from "../../layouts/Page.svelte";

  const title = "<img>";

  const image = (id, width, quality) => {
    return `https://images.unsplash.com/photo-${id}?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=${width}&q=${quality}`;
  };
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:title" content="{title} ･ {APP_NAME}" />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content="{APP_URL}img/" />
</svelte:head>

<Page {title} />
<h1>{title}</h1>
<section>
  <MdnDoc path="Web/HTML/Element/img" text={title}>
    the <code>&lt;img&gt;</code> html element embeds an image into the document.
    use both width and height to set the intrinsic size of the image, allowing it
    to take up space before it loads, to mitigate content layout shifts.
  </MdnDoc>
</section>
<section>
  <h2>object-fit</h2>
  <p>please compare it with the original image.</p>
  <div class="object-fit">
    <div>
      <img src={image("1488508872907-592763824245", 300, 60)} alt="" />
      <ExternalLink href={image("1488508872907-592763824245", 300, 60)}
        >original</ExternalLink
      >
    </div>
    <div class="box">
      <img src={image("1565079527389-eb2640ee27fc", 300, 60)} alt="" />
      <ExternalLink href={image("1565079527389-eb2640ee27fc", 300, 60)}
        >original</ExternalLink
      >
    </div>
    <div class="box">
      <img src={image("1563350316-9f7fc841d2c4", 300, 60)} alt="" />
      <ExternalLink href={image("1563350316-9f7fc841d2c4", 300, 60)}
        >original</ExternalLink
      >
    </div>
  </div>
</section>
<section>
  <h2>lazy loading</h2>
  <p>
    please scroll down. you can check lazy loading with chrome developer tools
    and so on.
  </p>
  <div class="lazy-loading">
    <img
      src={image("1582385272046-abd3a86f5a1a", 500, 60)}
      alt=""
      loading="lazy"
    />
    <img
      src={image("1498163641090-1df07c039069", 500, 60)}
      alt=""
      loading="lazy"
    />
    <img
      src={image("1533618821901-9e69d5f5360e", 500, 60)}
      alt=""
      loading="lazy"
    />
    <img
      src={image("1517462964-21fdcec3f25b", 500, 60)}
      alt=""
      loading="lazy"
    />
    <img
      src={image("1505151228723-18d0f726f3b1", 500, 60)}
      alt=""
      loading="lazy"
    />
    <img
      src={image("1591014441032-1c4302d2191b", 500, 60)}
      alt=""
      loading="lazy"
    />
    <img
      src={image("1465406325903-9d93ee82f613", 500, 60)}
      alt=""
      loading="lazy"
    />
    <img
      src={image("1555524554-0fdb51cd5020", 500, 60)}
      alt=""
      loading="lazy"
    />
    <img
      src={image("1519076381129-b4234ae7e573", 500, 60)}
      alt=""
      loading="lazy"
    />
    <img
      src={image("1516522973472-f009f23bba59", 500, 60)}
      alt=""
      loading="lazy"
    />
    <img
      src={image("1475533168657-e24d0e870a8a", 500, 60)}
      alt=""
      loading="lazy"
    />
    <img
      src={image("1611417352875-b015dc152660", 500, 60)}
      alt=""
      loading="lazy"
    />
  </div>
</section>
<section>
  <p class="text-center">
    all photos from <ExternalLink href="https://unsplash.com"
      >unsplash</ExternalLink
    >
  </p>
</section>
<section>
  <BrowserSupport
    items={[
      {
        value: "loading",
        chrome: "77",
        firefox: "75",
        safari: "15.4",
      },
      {
        value: "aspect-ratio",
        chrome: "88",
        firefox: "89",
        safari: "15",
      },
      {
        value: "object-fit",
        chrome: "32",
        firefox: "36",
        safari: "10",
      },
    ]}
  />
</section>
<BackToHomeLink />

<style>
  p {
    margin-bottom: 1rem;
  }

  .object-fit {
    align-items: center;
    display: flex;
    gap: 1rem;
    text-align: center;
  }

  .object-fit img {
    aspect-ratio: 1 / 1;
    background: var(--gray-700);
    border-radius: 50%;
    height: 100%;
    margin-bottom: 0.25rem;
    object-fit: cover;
    width: 234px;
  }

  .lazy-loading {
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr;
  }

  @media (min-width: 640px) {
    .lazy-loading {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .lazy-loading img {
    aspect-ratio: 2 / 3;
    background: var(--gray-700);
    border-radius: 0.25rem;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .text-center {
    text-align: center;
  }
</style>
