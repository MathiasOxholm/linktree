import "../styles/globals.scss";
import "open-props/colors";
import "open-props/gradients";
import "open-props/fonts";
import "open-props/easings";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="LinkTree"
        titleTemplate="%s | oxholm.dev"
        defaultTitle="LinkTree"
        description="My personal link tree for oxholm.dev"
        canonical="https://linktree-mathiasoxholm.vercel.app/"
        openGraph={{
          url: "https://linktree-mathiasoxholm.vercel.app/",
          title: "LinkTree",
          description: "My personal link tree for oxholm.dev",
        }}
        twitter={{
          handle: "@OxholmDev",
          site: "@OxholmDev",
          cardType: "summary_large_image",
        }}
        noindex={false}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
