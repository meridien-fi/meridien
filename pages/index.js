import Head from 'next/head';
import Intro from '../components/intro';
import Header from '../components/header';
import Footer from '../components/footer';
import SubIntro from'../components/subIntro'
import Boards from'../components/boards'
import Ceos from'../components/ceos'
import TopTalent from'../components/topTalent'
import About from'../components/about'
import Contact from'../components/contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Meridien Consulting - Strategic Leadership Advisory</title>
        <meta name='description' content='Personalized Insights for Boards, CEOs and Top Talent' />
      </Head>
      <Header />
      <main>
        <Intro />
        <SubIntro />
        <Boards />
        <Ceos />
        <TopTalent />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
