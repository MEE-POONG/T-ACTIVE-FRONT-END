import Layout from "../components/Layout/Layout";
import "../styles/globals.scss";
import "react-datepicker/dist/react-datepicker.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
