// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        />
        <link href="http://fonts.cdnfonts.com/css/sofia-pro" rel="stylesheet" />
      </Head>
      <link href="https://fonts.cdnfonts.com/css/sofia-pro" rel="stylesheet" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
