import Head from "next/head";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title ? `The Nexus | ${title}` : "The Nexus"}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="/league-gothic/stylesheet.css" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main role="main" className="container mx-auto min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
}
