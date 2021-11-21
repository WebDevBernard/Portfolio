import Head from "next/head";
import App from "../components/App";
export default function Home() {
  return (
    <>
      <Head>
        <title>Bernard Yang</title>
        <meta name="author" content="Bernard Yang" />
        <meta name="keywords" content="Bernard Yang" />
        <meta
          name="description"
          content="Hi there, I am Bernard Yang, a web developer in Vancouver"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        ></link>
      </Head>
      <App />
    </>
  );
}
