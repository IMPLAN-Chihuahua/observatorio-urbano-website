import Head from 'next/head'
import EmblaCarousel from '@components/carousel/EmblaCarousel';
import AboutDescription from '@components/information/AboutDescription';
import { AboutLocation } from '@components/information/AboutLocation';
import { Proyectos } from '@components/proyecto/Proyectos';
import AboutValues from '@components/information/AboutValues';
import { AboutForm } from '@components/information/AboutForm';

export default function Home() {

  return (
    <>
      <EmblaCarousel />
    <div>
      <Head>
        <title>Observatorio urbano</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutDescription/>
      <Proyectos/>
      <AboutLocation/>
      <AboutForm/>
      </div>
    </>
  )
}
