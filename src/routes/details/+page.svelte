<script lang="ts">
  import BackToHomeLink from "~/components/BackToHomeLink.svelte";
  import BrowserSupport from "~/components/BrowserSupport.svelte";
  import Dropdown from "~/components/Dropdown.svelte";
  import DropdownDivider from "~/components/DropdownDivider.svelte";
  import DropdownLink from "~/components/DropdownLink.svelte";
  import MdnDoc from "~/components/MdnDoc.svelte";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "~/constants/app";
  import IconExternalLink from "~/icons/IconExternalLink.svelte";
  import Page from "~/layouts/Page.svelte";

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
<section>
  <MdnDoc path="Web/HTML/Element/details" text={title}>
    the <code>{title}</code> html element creates a disclosure widget in which
    information is visible only when the widget is toggled into an "open" state.
    a summary or label must be provided using the
    <code>&lt;summary&gt;</code> element.
  </MdnDoc>
</section>
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
    <summary>color palette</summary>
    <p>
      <span class="tool">tailwind css</span> » tailwind includes an expertly-crafted
      default color palette out-of-the-box that is a great starting point if you
      don't have your own specific branding in mind.
    </p>
  </details>
</section>
<section>
  <h2>dropdown</h2>
  <p>
    it can also create something like dropdown as an alternative to
    <code>&lt;select&gt;</code>. considering accessibility and semantics, it
    would be better if there was something like <code>&lt;dropdown&gt;</code>.
  </p>
  <Dropdown
    id="more-links"
    label="press me"
    style="margin-right: 0.5rem;"
    buttonStyle="background: var(--gray-700); border: 1px solid var(--gray-600);"
  >
    <DropdownLink href="/">home</DropdownLink>
    <DropdownLink href="/about">about</DropdownLink>
    <DropdownLink href="/contact">contact</DropdownLink>
    <DropdownDivider />
    <DropdownLink href="https://github.com/jamband/denene" external
      >github <IconExternalLink
        style="height: 1em; margin-left: 0.25rem; vertical-align: -0.125em; width: 1em;"
      /></DropdownLink
    >
  </Dropdown>
  <Dropdown
    id="more-links-without-label"
    buttonStyle="background: var(--gray-700); border: 1px solid var(--gray-600);"
  >
    <DropdownLink href="/">home</DropdownLink>
    <DropdownLink href="/about">about</DropdownLink>
    <DropdownLink href="/contact">contact</DropdownLink>
    <DropdownDivider />
    <DropdownLink href="https://github.com/jamband/denene" external
      >github <IconExternalLink
        style="height: 1em; margin-left: 0.25rem; vertical-align: -0.125em; width: 1em;"
      /></DropdownLink
    >
  </Dropdown>
</section>
<section>
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
</section>
<BackToHomeLink />

<style>
  p {
    margin-bottom: 1rem;
  }

  details {
    border: 1px solid var(--gray-600);
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
    padding: 0.25rem 0.5rem;
  }

  details > p {
    background: var(--gray-700);
    border-radius: 0.25rem;
    color: var(--gray-400);
    margin-top: 0.5rem;
    padding: 1rem;
  }

  details[open] {
    color: var(--gray-100);
    padding-bottom: 0.5rem;
  }

  summary {
    padding: 0.25rem 0;
  }

  .tool {
    color: var(--gray-100);
    font-weight: bold;
  }
</style>
