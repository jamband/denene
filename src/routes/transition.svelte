<script>
  import Example from "../components/Example.svelte";
  import MdnDoc from "../components/MdnDoc.svelte";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "../constants";
  import Page from "../layouts/Page.svelte";

  const title = "transition";
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:title" content="{title} ･ {APP_NAME}" />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content="{APP_URL}/{title}/" />
</svelte:head>

<Page {title} />
<h1>{title}</h1>
<MdnDoc path="Web/CSS/CSS_Transitions" text={title}>
  css transitions is a module of css that lets you create gradual transitions
  between the values of specific css properties. the behavior of these
  transitions can be controlled by specifying their timing function, duration,
  and other attributes.
</MdnDoc>
<section>
  <h2 id="progressbar">width <Example>loading indicator</Example></h2>
  <div class="example1">
    <p class="hint">
      press the button below or use the keyboard to focus on the button and
      press the spacebar.
    </p>
    <input type="checkbox" id="example1-action" />
    <label for="example1-action" role="button">press me</label>
    <div
      class="example1-content"
      role="progressbar"
      aria-labelledby="progressbar"
      aria-valuenow="0"
      aria-valuemin="0"
      aria-valuemax="100"
    />
  </div>
</section>
<section>
  <h2>opacity <Example>fade in / fade out</Example></h2>
  <p class="hint">
    press the button below or use the keyboard to focus on the button and press
    the spacebar.
  </p>
  <div class="example2">
    <input type="checkbox" id="example2-action" />
    <label for="example2-action" role="button">press me</label>
    <div class="example2-content">{APP_DESCRIPTION}.</div>
  </div>
</section>

<style>
  label[role="button"] {
    background: #88c0d0;
    border-radius: 0.25rem;
    box-shadow: 0.1rem 0.1rem 0 #434c5e;
    color: #eceff4;
    display: inline-block;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-right: 0.25rem;
    padding: 0.3rem 0.75rem;
  }

  input[type="checkbox"] {
    clip: rect(0, 0, 0, 0);
    position: absolute;
  }

  input[type="checkbox"]:focus + label {
    box-shadow: var(--outline);
  }

  .hint {
    margin-bottom: 1rem;
  }

  .example1 {
    margin-bottom: 2rem;
  }

  .example1-content {
    background: #88c0d0;
    border-top: 1px soild red;
    height: 3px;
    transition: width 3s cubic-bezier(0.1, 0.05, 0, 1);
    width: 0%;
  }

  .example1 > input:checked ~ div {
    width: 100%;
  }

  .example2-content {
    background: #434c5e;
    border-radius: 0.25rem;
    opacity: 0;
    padding: 1rem;
    transition: opacity 0.3s;
  }

  .example2 > input:checked ~ .example2-content {
    opacity: 1;
  }
</style>
