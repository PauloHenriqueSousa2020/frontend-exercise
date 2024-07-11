// libs
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

// styles
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <title>Star Wars</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
