import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "./sections/HeroSection";
import ChiSiamo from "./sections/ChiSiamo";
import Progetti from "./sections/Progetti";
import Footer from "../components/layout/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="falegnameria,Roma, arredo su misura"
        ></meta>
        <meta name="author" content="Davide Mancini"></meta>
        <meta name="description" content="artigiani del legno" />
        <title>Falegnameria Mancini</title>
      </Head>

      <HeroSection />
      <ChiSiamo />
      <Progetti />
      <Footer />
    </div>
  );
};

export default Home;
