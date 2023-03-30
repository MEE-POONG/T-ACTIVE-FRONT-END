import Head from 'next/head';
import LayOut from "@/components/LayOut";
import HeroSection from '@/container/Home/HeroSection';
import AboutSection from '@/container/Home/AboutSection';
import ArtistsSection from '@/container/Home/WorkOutSection';
import ScheduleSection from '@/container/Home/BlogEventSection';
import ContactSection from '@/container/Home/ContactSection';
import PricingSection from '@/container/Home/PricingSection';
import SteviaSection from '@/container/Home/SteviaSection';

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
        <SteviaSection />
        <PricingSection />
        <AboutSection />
        <ArtistsSection />
        <ScheduleSection />
        <ContactSection />
      </div>
    </LayOut>
  );
}
