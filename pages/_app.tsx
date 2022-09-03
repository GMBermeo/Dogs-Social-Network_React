import React from "react";
import "../styles/app.css";
import "@styles/index.css";
import "../styles/animations.css";
import "../styles/headings.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;