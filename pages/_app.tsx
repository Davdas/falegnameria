import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/layout/Navbar";
import { PrismicProvider } from "@prismicio/react";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <main>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </PrismicProvider>
  );
}

export default MyApp;
