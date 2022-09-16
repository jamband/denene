<script lang="ts">
  import BackToHomeLink from "~/components/BackToHomeLink.svelte";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "~/constants/app";
  import Page from "~/layouts/Page.svelte";

  const title = "introduction";
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:title" content="{title} ･ {APP_NAME}" />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content="{APP_URL}{title}/" />
</svelte:head>

<Page {title} />
<article>
  <header>
    <h1>introduction</h1>
  </header>
  <section>
    <h2>1</h2>
    <p>
      this site does not use cookies. it uses html and css, and a little
      javascript. it's an experimental site to think about what we can do in
      such a situation.
    </p>
  </section>
  <section>
    <h2>2</h2>
    <p>
      as much as possible, this site does not use anything that works only with
      pointing devices. e.g. such as <code>hover</code> and <code>cursor</code>.
      this is an experiment on accessibility.
    </p>
  </section>
  <section>
    <h2>3</h2>
    <p>
      this site basically consists only of lowercase letters and symbols, does
      not use uppercase letters. this is an experiment on information overload.
    </p>
  </section>
  <section>
    <h2>4</h2>
    <p>
      this site also includes features that do not work on certain browsers. for
      details, see browser support.
    </p>
  </section>
</article>
<BackToHomeLink />
