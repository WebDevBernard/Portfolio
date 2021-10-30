import Layout from "../components/Layout/Layout";
import ProjectContext from "../store/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ProjectContext.Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProjectContext.Provider>
  );
}

export default MyApp;
