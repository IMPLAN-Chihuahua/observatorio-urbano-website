import { Button, Card, CardActionArea, Container, Grid, Link } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import AdbIcon from '@mui/icons-material/Adb';
import style from '../styles/indicador.module.css'



export default function Modulo(props) {
    const data = props.data;
    const modulos = data.map(modulo => {
        return (
            <Grid item xs={12} md={6} lg={4} key={modulo.codigo}>
                <Card className={style.cardSection} sx={{maxWidth: 900, boxShadow:30}} variant='outlined'>
                    <CardActionArea>
                    <Box className={style.card}>
                    <Box className={style.cardFront} >
                        <Link href={`/modulos/${modulo.id}/indicadores`} style={{textDecoration: 'none'}}>
                        
                        <Box className={style.cardFront__tp} sx={{backgroundColor: `#34495E`}} >
                            <Box sx={
                                theme => ({
                                    display: `flex`,
                                    marginTop: `5%`,
                                    marginBottom: `10%`,
                                })

                            }>
                                <AdbIcon sx={{fontSize: '100px'}} />
                            </Box>
                           
                        </Box>
                        <Box className={style.cardFront__bt} sx={{color:`main.primary`}}>
                            <p className={style.card_text}  >
                                <b>{modulo.temaIndicador}</b>
                            </p>
                        </Box>
                        </Link>
                    </Box>
                </Box>
                </CardActionArea>
            </Card>
        </Grid> 
        );
    });

    return (
        <>
            <Container>
            <Head>
                <title>Modulos</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className={style.title}>Modulos de Chihuahua</h1>
            <hr className={style.hrMin}/>
            <Grid container spacing={1}>
                <Grid item xs={12} lg={9}>
                    <div className={style.leftSide}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum mi vel risus ultricies vestibulum. Maecenas consectetur ut arcu id dignissim. Vivamus lorem purus, malesuada eu nisl nec, pharetra varius purus. In facilisis quis sem in ornare. Suspendisse varius magna sapien, et congue ante cursus eget. Praesent mattis, eros eget congue rutrum, massa lorem auctor neque, a molestie metus risus vel leo. Aenean ac odio nisl.</p>
                    </div>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <div className={style.rightSide}>
                        <img src='/images/implan-logo.webp' alt='implan_logo'  />
                    </div>
                </Grid>
                
            </Grid>
            <br />
            <h1 className={style.title}>Temas de interés</h1>
            
            <Grid container spacing={2}>
           {modulos}
            </Grid>
        </Container>
        </>
    );
};
export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.INDICADORES_BASE_URL}/modulos`);
    const data = await res.json();
    
    if (res.status === 200) {
        return {
            props: {
                ...data
            }
        }
    } else {
        return {
            props: {
                data: []
            }
        }
    }

    return {
        props: {}, // will be passed to the page component as props
    }
}
