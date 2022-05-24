import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from 'next/image';
import styled from "@mui/system/styled";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

import Navbar from "./Navbar";
import SideBar from "./SideBar";
import HideOnScroll from "helpers/HideOnScroll";
import BackToTop from "./BackToTop";
import { Grid } from "@mui/material";
import NextLink from "next/link";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const navLinks = [
    { title: 'Inicio', path: '/' },
]

const Header = () => {
    return (
        <>
            <HideOnScroll>
                <AppBar position="fixed" elevation={0}>
                    <Toolbar sx={{ bgcolor: 'blue' }}>
                        <Grid container direction='column' sx={{ bgcolor: 'green' }}>
                            <Grid item flexGrow={1} sx={{ bgcolor: 'white' }}>
                                <NextLink href='/'>
                                    <a>
                                        <Image src='/images/small-logo.png' width={210} height={60} alt="small Logo" />
                                    </a>
                                </NextLink>
                            </Grid>
                            <Grid item xs flexGrow={1} container justifyContent='flex-end'>
                                <Navbar navLinks={navLinks} />
                                <SideBar navLinks={navLinks} />
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Offset id="back-to-top" />
            <BackToTop>
                <Fab color="secondary" size="large" aria-label="back to top">
                    <KeyboardArrowUp />
                </Fab>
            </BackToTop>
        </>
    )
}

export default Header;
