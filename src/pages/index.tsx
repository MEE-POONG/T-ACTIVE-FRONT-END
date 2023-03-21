import Head from 'next/head';
import LayOut from "@/components/LayOut";
import HeroSection from '@/container/Home/HeroSection';
// import the interfaces from type.tsx



export default function HomePage() {
  return (
    <LayOut>
      <Head>
        <title>HOME | dxx=</title>
        <meta
          name="description"
          content="T ACTIVE"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='home-page'>
        <HeroSection />
      </div>
    </LayOut>
  );
}
