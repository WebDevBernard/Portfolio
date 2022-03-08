// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" prefix="og: http://ogp.me/ns#">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        />
        <link
          href="https://fonts.cdnfonts.com/css/sofia-pro"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="Bernard Yang | Portfolio" />
        <meta
          name="image"
          property="og:image"
          content="%PUBLIC_URL%/docs/portfolio.png"
        />
        <meta name="author" content="Bernard Yang" />
        <meta
          property="og:description"
          content="Hello, I am Bernard, a software engineer in Vancouver.  Welcome to my portfolio website.  Connect with me on LinkedIn!"
        />
        <meta property="og:url" content="https://www.bernardyang.com/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
