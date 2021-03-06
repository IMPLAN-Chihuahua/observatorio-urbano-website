import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import { useState } from 'react';

const data = [
  {
    id: 'q1',
    question: '¿Cuál es la periodicidad de actualización de los indicadores?',
    answer: 'La frecuencia de actualización de los datos de los indicadores depende de la periodicidad y disponibilidad de los datos que los organismos ofrecen.',
  },
  {
    id: 'q2',
    question: '¿Cómo debo de referenciar la fuente de los datos en Chihuahua Métrica?',
    answer: 'Cada indicador cuenta con su propia fuente de información que puedes citar en el formato adecuado. Si deseas citar el sitio web, puedes referenciarlo mediante el vínculo de Chihuahua Métrica.',
  },
  {
    id: 'q3',
    question: '¿Cómo me puedo contactar con el monitor de un indicador?',
    answer: 'Al visualizar a detalle cada indicador, en la parte inferior se encuentra el contacto del responsable de monitorear y actualizar el indicador. Este depende de la periodicidad y disponiblilidad de los datos de cada uno.',
  },
  {
    id: 'q4',
    question: '¿Cómo puedo diferenciar el área urbana, el área de localidad, Centro de población y área metropolitana?',
    answer: 'El área urbana de Chihuahua se refiere a la zona urbanizada de la ciudad. Su extensión actual es de 20,937.86 hectáreas. La localidad de Chihuahua se refiere al principal núcleo urbano del municipio de Chihuahua.Su exstensión actual es de ----- hectáreas. El Centro de Población o fundo legal de la ciudad tiene una superficie total de 78, 289.38 hectáreas. Mientras que el área metropolitana comprende el área de influencia de los municipios de Chihuahua, Aldama y Aquiles Serdán.',
  },
  {
    id: 'q5',
    question: '¿Cómo puedo contribuir a la plataforma?',
    answer: 'De manera técnica, puedes realizar contribuciones directamente en el <a href="https://github.com/IMPLAN-Chihuahua/observatorio-urbano-website" style="color: #31416F; font-weight: bold;">repositorio del sitio web</a> y forkear el proyecto. Uno de nuestros desarrolladores verificará tus contribuciones y en caso de que pase los filtros, lo añadiremos al proyecto. Si deseas contribuir con información o aclaraciones respecto a los datos del sitio web, puedes enviar un <a href="mailto:mike.281299@gmail.com" style="color: #31416F; font-weight: bold;">correo</a> con tus comentarios.',
  },
  {
    id: 'q6',
    question: '¿Cómo utilizo el repositorio del Censo del Arbolado?',
    answer: 'Para obtener el código fuente y utilizar la aplicación del Censo del Arbolado, puedes clonar el <a href="https://github.com/mittrees/Treepedia_Public" style="color: #31416F; font-weight: bold;">proyecto en GitHub</a> y tener una copia local en tu dispositivo de cómputo. Para ejecutar el proyecto será necesario que cuentes con Android Studio.',
  },
  {
    id: 'q7',
    question: '¿Puedo construir mi propia aplicación con base en los datos de la plataforma?',
    answer: '¡Sí! Al ser una aplicación de código abierto, puedes utilizar nuestra REST API para construir tu aplicación propia. Si tienes dudas sobre cómo consumir la API consulta nuestra <a href="http://localhost:8080/api/v1/documentation/" style="color: #31416F; font-weight: bold;">documentación</a>.',
  }
];



const Summary = () => {


  const faq = data.map(({ id, question, answer }) => {
    return (

      <Accordion key={id} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={id}
          sx={
            [
              {
                '&:hover': {
                  backgroundColor: 'rgb(49,154,197,0.1)'
                }
              }
            ]
          }

        >
          <Typography
            variant='button'
            display='block'
            gutterBottom
            sx={{
              fontWeight: 'bold',
            }}>
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
          color: '#4b4453'
        }}>
          <Typography>
            <div dangerouslySetInnerHTML={{ __html: answer }}></div>
          </Typography>
        </AccordionDetails>
      </Accordion>

    );
  })
  return faq;
};

const QuestionsContent = () => {
  return (
    <Summary />
  )
}

export default QuestionsContent;
