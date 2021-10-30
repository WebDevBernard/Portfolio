import { Helmet } from "react-helmet";
import App from "../components/App";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Bernard Yang | Portfolio</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <App />
    </>
  );
}
