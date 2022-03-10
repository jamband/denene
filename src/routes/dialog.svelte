<script>
  import BackToHomeLink from "../components/BackToHomeLink.svelte";
  import BrowserSupport from "../components/BrowserSupport.svelte";
  import Example from "../components/Example.svelte";
  import MdnDoc from "../components/MdnDoc.svelte";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "../constants";
  import IconX from "../icons/IconX.svelte";
  import Page from "../layouts/Page.svelte";

  const title = "<dialog>";
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:title" content="{title} ･ {APP_NAME}" />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content="{APP_URL}dialog/" />
</svelte:head>

<Page {title} />
<h1>{title}</h1>
<section>
  <MdnDoc path="Web/HTML/Element/dialog" text={title}>
    the <code>&lt;dialog&gt;</code> html element represents a dialog box or other
    interactive component, such as a dismissible alert, inspector, or subwindow.
  </MdnDoc>
</section>
<section>
  <h2>1 <Example>simple alert</Example></h2>
  <button onclick="getElementById('example1').showModal();">press me</button>
  <dialog id="example1" aria-labelledby="example1-title">
    <form method="dialog">
      <div class="dialog-header">
        <h3 id="example1-title">simple alert</h3>
        <button type="submit" aria-label="close"><IconX /></button>
      </div>
      <div class="dialog-body">
        <p>press the [x] button or the <code>esc</code> key to close it.</p>
      </div>
    </form>
  </dialog>
</section>
<section>
  <h2>2 <Example>confirm</Example></h2>
  <button onclick="getElementById('example2').showModal();">press me</button>
  <dialog
    id="example2"
    aria-labelledby="example2-title"
    onclose="this.nextElementSibling.textContent = this.returnValue;"
  >
    <form method="dialog">
      <div class="dialog-header">
        <h3 id="example2-title">confirm</h3>
      </div>
      <div class="dialog-body">
        <p>you can also close it by pressing the <code>esc</code> key.</p>
      </div>
      <footer class="dialog-footer">
        <button type="submit" value="it was canceled." class="cancel"
          >cancel</button
        >
        <button type="submit" value="it was ok.">ok</button>
      </footer>
    </form>
  </dialog>
  <p class="dialog-action" />
</section>
<section>
  <BrowserSupport
    items={[
      {
        value: title,
        chrome: "37",
        firefox: "98",
        safari: "15.4",
      },
      {
        value: "::backdrop",
        chrome: "37",
        firefox: "47",
        safari: "15.4",
      },
    ]}
  />
</section>
<BackToHomeLink />

<style>
  .dialog-header {
    border-bottom: 1px solid #35333c;
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    justify-content: space-between;
    padding-bottom: 0.25rem;
  }

  .dialog-header > button {
    background: none;
    box-shadow: none;
    margin-left: 0.5rem;
    padding: 0.25rem 0.5rem 0;
  }

  .dialog-body {
    margin-top: 1rem;
  }

  .dialog-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  }

  .dialog-footer > button {
    background: #35333c;
    box-shadow: 0.05rem 0.1rem 0.1rem #13111a;
  }

  .dialog-action {
    color: var(--primary);
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .dialog-action::before {
    color: var(--body-color);
    content: "» ";
    margin-left: 0.25rem;
  }

  .cancel {
    margin-right: 0.75rem;
  }
</style>
