import Head from 'next/head'
import EmblaCarousel from '@components/carousel/EmblaCarousel';
import AboutDescription from '@components/information/AboutDescription';
import { ProjectsSection } from '@components/proyecto/ProjectSection';
import { Container } from '@mui/material';
import Splashscreen from '@components/commons/Splashscreen';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chihuahua Metrica</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <body>
        <Splashscreen />
        <EmblaCarousel />
        <Container maxWidth='lg' sx={{ marginTop: 3, marginBottom: 3 }}>
          <AboutDescription />
          <ProjectsSection />
        </Container>
      </body>
    </>
  )
}
