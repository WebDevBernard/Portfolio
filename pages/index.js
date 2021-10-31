import Head from "next/head";
import App from "../components/App";
export default function Home() {
  return (
    <>
      <Head>
        <title>Bernard Yang</title>
        <meta name="Bernard Yang" content="Portfolio" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Nunito:wght@200&family=Source+Sans+Pro:ital,wght@1,200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <App />
    </>
  );
}
