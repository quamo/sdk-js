<script lang="ts">
  import Quamo from '@quamo/sdk';
  import QMFrame from '@quamo/sdk/esm/frame';
  import { onMount } from 'svelte';
  import TailwindCss from './TailwindCSS.svelte'

  let element: HTMLElement;

  onMount(() => {
    Quamo.Frame.observeElementHeight(element);

    QMFrame.observeElementHeight(element);
  });
</script>

<svelte:head>
  <title>Quamo seamless-app demo in NodeJS</title>
</svelte:head>

<TailwindCss />

<main bind:this={element}>
  <h1>
    シームレスフレームアプリ<br>
    <span>NodeJS ver.</span>
  </h1>
  <div>
    シームレスフレームの動作を確認できます。<br>
    表示しているブラウザのウィンドウ幅（横）をリサイズすると、埋め込まれているコンテンツの高さに合わせて、アプリケーションの表示領域（iframeの高さ）が動的に変わります。<br>
  </div>

  <p>
    Made with <a href="https://svelte.dev">Svelte</a>
  </p>
</main>

<style type="scss">
  :global(html, body) {
    padding: 0;
    margin: 0;
    border-bottom: 2px solid #ff3e00;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 320px;
    margin: 0 auto;
    background-color: #eaeaea;
    font-size: 1.6rem;

    h1 {
      color: #ff3e00;
      font-size: 2.4em;
      font-weight: 100;

      > span {
        font-size: 1.2rem;
        color: black;
      }
    }

    > div {
      font-size: 1.4rem;
    }

    > p {
      margin-top: 3rem;
    }

    @media (min-width: 640px) {
      max-width: none;
    }
  }
</style>
