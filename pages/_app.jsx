import Head from "next/head";
import Link from "next/link";

import "tailwindcss/tailwind.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Description" content="theosis.app" />
        <meta name="theme-color" content="#B8860B" />
        <meta property="og:title" content="theosis.app" />
        <meta property="og:description" content="theosis.app" />
        <meta property="og:image" content="https://theosis.app/og.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>theosis.app</title>
      </Head>
      <div className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-900 bg-brand-khaki">
        <header />
        <main>
          <Component {...pageProps} />
        </main>
        <noscript className="text-center">Turn on JavaScript please.</noscript>
        <footer />
      </div>
    </>
  );
}

export default App;
