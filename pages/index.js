import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Subscribe from "../components/Subscribe";
//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Gemway  Consult - A study abroad agency in Nigeria.
           We process your admission to study abroad in USA,UK and Canada.</title>
        <meta
          name="description"
          content="Gemway Consult is a travel/study abroad agency located in Lagos, Nigeria. We process admission and visa to 
          study abroad in USA,UK and Canada."
        />
        <link rel="icon" href="/favico.png" />
      </Head>

      <Hero />
      <SectionTitle
        // pretitle="GC Benefits"
        title=" Our Services">
      </SectionTitle> 
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitOne} />
      <SectionTitle
        title="Visit our Youtube Channel"
        pretitle="To Learn more about what we have to offer at GC.">

      </SectionTitle>
      <Subscribe />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
}
