import useAxios from "axios-hooks";
import Head from "next/head";
import {Link} from 'react-scroll';
import About from "../components/About/about";
import Contact from "../components/Contact/contact";
import Gallery from "../components/Gallery/gallery";
import Products from "../components/Products/products";


export default function Home() {
  const [{ data: homeTopData}, getHomeTop] = useAxios({
    url: "/api/hometop",
  });
  const [{ data: homeDetailData}, getHomeDetail] = useAxios({
    url: "/api/homedetail",
  });


  return (
    <>
      <Head>
        <title>T-ACTIVE</title>
        <meta name="description" content="I2AROBOT 2" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

        
    </>
  );
}
