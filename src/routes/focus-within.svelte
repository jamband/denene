<script>
  import BrowserSupport from "../components/BrowserSupport.svelte";
  import MdnDoc from "../components/MdnDoc.svelte";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "../constants";
  import Page from "../layouts/Page.svelte";

  const title = ":focus-within";
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:title" content="{title} ･ {APP_NAME}" />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content="{APP_URL}focus-within/" />
</svelte:head>

<Page {title} />
<h1>{title}</h1>
<section>
  <MdnDoc path="Web/CSS/:focus-within" text={title}>
    the <code>:focus-within</code> css pseudo-class matches an element if the
    element or any of its descendants are focused. in other words, it represents
    an element that is itself matched by the :focus pseudo-class or has a
    descendant that is matched by <code>:focus</code>. (this includes
    descendants in shadow trees.)
  </MdnDoc>
</section>
<section>
  <form>
    <fieldset class="example1">
      <legend>#1</legend>
      <label for="username1">username</label>
      <input
        type="text"
        id="username1"
        placeholder="focus here"
        autocomplete="username"
      />
      <label for="password1">password</label>
      <input
        type="password"
        id="password1"
        placeholder="focus here"
        autocomplete="current-password"
      />
    </fieldset>
  </form>
  <form>
    <fieldset class="example2">
      <legend>#2</legend>
      <label for="username2">username</label>
      <input
        type="text"
        id="username2"
        placeholder="focus here"
        autocomplete="username"
      />
      <label for="password2">password</label>
      <input
        type="password"
        id="password2"
        placeholder="focus here"
        autocomplete="current-password"
      />
    </fieldset>
  </form>
  <form>
    <fieldset class="example3">
      <legend>#3</legend>
      <label for="username3">username</label>
      <input
        type="text"
        id="username3"
        placeholder="focus here"
        autocomplete="username"
      />
      <label for="password3">password</label>
      <input
        type="password"
        id="password3"
        placeholder="focus here"
        autocomplete="current-password"
      />
    </fieldset>
  </form>
</section>
<BrowserSupport
  items={[
    {
      value: ":focus-within",
      chrome: "60",
      firefox: "52",
      safari: "10.1",
    },
  ]}
/>

<style>
  form {
    margin-bottom: 2.5rem;
  }

  input[type="text"] {
    margin-bottom: 1rem;
  }

  .example1:focus-within {
    border: 1px solid #a3be8c;
  }

  .example1:focus-within > legend {
    color: #a3be8c;
  }

  .example2:focus-within {
    border: 1px solid #ebcb8b;
  }

  .example2:focus-within > legend {
    color: #ebcb8b;
  }

  .example3:focus-within {
    border: 1px solid #bf616a;
  }

  .example3:focus-within > legend {
    color: #bf616a;
  }
</style>
