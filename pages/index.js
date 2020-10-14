import Head from 'next/head';
import Intro from '../components/intro';
import Header from '../components/header';
import Footer from '../components/footer';
import SectionOne from '../components/section-one';
import SectionTwo from '../components/section-two';

export default function Home() {
  return (
    <>
      <Head>
        <title>Title of the Site</title>
        <meta name='description' content='Meta Description of the Site' />
      </Head>
      <Header />
      <main>
        <Intro />
        <SectionOne />
        <SectionTwo />
      </main>
      <Footer />
    </>
  );
}
