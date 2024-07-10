// libs
import type { AppProps } from "next/app";
import Head from "next/head";

// styles
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Star Wars</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
