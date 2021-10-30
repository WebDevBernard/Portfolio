import Head from "next/head";
import App from "../components/App";
export default function Home() {
  return (
    <>
      <Head>
        <title>Bernard Yang | Web Developer</title>
        <meta name="Bernard Yang" content="Portfolio" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Nunito:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <App />
    </>
  );
}
