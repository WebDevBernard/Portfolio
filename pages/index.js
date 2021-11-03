import Head from "next/head";
import App from "../components/App";
export default function Home() {
  return (
    <>
      <Head>
        <title>Bernard Yang</title>
        <meta name="Bernard Yang" content="Portfolio" />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant&family=Inter:wght@200&display=swap"
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
