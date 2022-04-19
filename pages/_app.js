import "../styles/globals.scss";
import "open-props/style";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="LinkTree"
        titleTemplate="%s | oxholm.dev"
        defaultTitle="LinkTree"
        description="My personal link tree for oxholm.dev"
        //canonical="https://calculator-one-brown.vercel.app/"
        openGraph={{
          url: "https://calculator-one-brown.vercel.app/",
          title: "LinkTree",
          description: "My personal link tree for oxholm.dev",
        }}
        twitter={{
          handle: "@OxholmDev",
          site: "@OxholmDev",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
