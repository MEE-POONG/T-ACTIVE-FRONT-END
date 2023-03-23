import Head from 'next/head';
import LayOut from "@/components/LayOut";
import HeroSection from '@/container/Home/HeroSection';
import AboutSection from '@/container/Home/AboutSection';
import ArtistsSection from '@/container/Home/ArtistsSection';
import ScheduleSection from '@/container/Home/ScheduleSection';
import ContactSection from '@/container/Home/ContactSection';
import PricingSection from '@/container/Home/PricingSection';
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
        <PricingSection />
        <AboutSection />
        <ArtistsSection/>
        <ScheduleSection />
        <ContactSection />
      </div>
    </LayOut>
  );
}
