import React, { useState, useEffect } from 'react'
import { Avatar, Grid, Stack, Typography, Box } from '@mui/material'
// import { Typographynk } from 'react-router-dom'
// import { useMediaQuery } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Avater from "../../../Assetes/images/avater.png"
import logo from "../../../Assetes/images/51368110-removebg-preview (1).png"
// import Switch from '../Switch';
import Switchbtn from '../Switch';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./nav.css"


const Navbar = ({ useDarkTheme, toggleTheme }) => {

    const [isLeft, setIsLeft] = useState("-100%")
    const [isDisplay, setIsDisplay] = useState('none')

    const navigate = useNavigate()


    const togglenavbar = () => {
        if (isLeft) {
            setIsLeft("0%")
            setIsDisplay("flex")
        }
        else {
            setIsLeft("-100%")
            setIsDisplay("none")
        }
    }


    const togglenavbarclose = () => {
        if (!isLeft) {
            setIsLeft("0%")
            setIsDisplay("flex")
        }
        else {
            setIsLeft("-100%")
            setIsDisplay("none")
        }
    }
    const [scrollPosition, setScrollPosition] = useState(0);

    console.log("useDarkTheme", useDarkTheme);

    // const isMobile = useMediaQuery('(max-width:899px)');

    const style = {
        fontSize: "11px",
        borderRadius: "30px",
        fontWidth: "600",
        width: "36px",
        height: "16px",
        background: "#82e390d6",
        textAlign: "center",
        // display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    const style2 = {
        background: "linear-gradient(45deg, #82e39047, #2ddd46)",
        border: "2px solid #74696991 ",
        padding: "5px",
        borderRadius: "9px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    const NavStyle = {
        position: 'fixed',
        width: "100%",
        top: "0",
        zIndex: "1",
        left: isLeft,
        transition: "left ease 2s",
        height: "100vh",
        // backdropFilter: " blur(13px)"
    }
    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollPosition(window.scrollY);
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    return (
        <>
            {/* <Grid p={{ md: 1, xs: 0 }} className={`header ${scrollPosition > 0 ? 'navbar-blur' : ''}`} > */}
            <Grid p={{ md: 1, xs: 0 }}  >
                <header >
                    <nav className="Navbar">
                        <Stack direction="row" justifyContent="space-between" display={{ md: 'flex', xs: "none" }}  >
                            <Box sx={{ alignItems: "center" }} display={{ md: 'none', xs: "flex" }}  >
                                <SortRoundedIcon />
                            </Box>

                            {/* {logo Section} */}
                            <Stack direction='row' gap={1} alignItems='center'   >
                                <Grid sx={{ cursor: "pointer" }} onClick={ () => navigate("/") } > <img src={logo} alt="logo" width={40} />  </Grid>
                                <Stack direction='row' gap={2} alignItems='center' >
                                    <Typography variant='h4' color='primary' sx={{ cursor: "pointer" }}onClick={ () => navigate("/") } > Finly Wealth  </Typography>
                                    <Typography display={{ md: 'flex', xs: "none" }}  > Saving  </Typography>
                                </Stack>
                                <Typography variant='body2' sx={style} color='primary' display={{ md: 'flex', xs: "none" }}  >Soon </Typography>
                            </Stack>

                            <Stack direction='row' gap={3} alignItems="center" display={{ md: 'flex', xs: "none" }} sx={{ cursor: "pointer" }}  >
                                {/* {Typographynk Section} */}

                                <ul style={{ display: "flex", justifyContent: "space-around", gap: "20px" }} >

                                    <NavLink activeClassName="active" to='/' style={{ color: useDarkTheme ? "white" : "#000248de" }}   >Credit Cards </NavLink>
                                    <NavLink activeClassName="active" to='/point-calculator' style={{ color: useDarkTheme ? "white" : "#000248de" }}  >  Rebates & Rewards   </NavLink>
                                    <Typography sx={style2} variant='h2' color='primary' onClick={() => navigate("/Refrence")}  >
                                        <MonetizationOnRoundedIcon sx={{ height: "20px" }} />
                                        Refrence & Earn 25%
                                    </Typography>

                                </ul>

                            </Stack>

                            <Stack direction='row' alignItems="center" gap={2} >

                                {/* {profile} */}

                                <Grid sx={{ cursor: "pointer" }} ><SearchRoundedIcon /></Grid>

                                <Stack direction="row" alignItems="center" display={{ md: 'flex', xs: "none" }} >
                                    <Grid>
                                        <Switchbtn checked={useDarkTheme} onClick={toggleTheme} />
                                    </Grid>
                                    <Stack direction='row' alignItems='center' gap={1} sx={{ cursor: "pointer" }} >
                                        <Avatar alt='profile' src={Avater} />
                                        <Typography> $0 </Typography>
                                    </Stack>
                                </Stack>

                            </Stack>

                        </Stack>


                        <Stack display={{ md: 'none', xs: "flex" }} direction={'row'} justifyContent={'space-between'} paddingX={2} >
                            <Box sx={{ alignItems: "center" }} display={{ md: 'none', xs: "flex" }} onClick={togglenavbar} >
                                <SortRoundedIcon />
                            </Box>

                            <Stack direction='row' gap={1} alignItems='center' sx={{ cursor: "pointer" }} >
                                <Box onClick={ () => navigate("/") } > <img src={logo} alt="logo" width={40} style={{ cursor: "pointer" }} />  </Box>
                                <Stack direction='row' gap={2} alignItems='center' >
                                    <Typography variant='h4' color='primary' sx={{ cursor: "pointer" }} onClick={ () => navigate("/") } > Finly Wealth  </Typography>
                                </Stack>
                            </Stack>
                            <Box sx={{ alignItems: "center" }} display={{ md: 'none', xs: "flex" }}  >
                                <SearchRoundedIcon />
                            </Box>
                        </Stack>

                        {/* {responsive navbar} */}
                        <Stack gap={3} p={2} bgcolor={useDarkTheme ? "#000248" : '#edffee'} sx={NavStyle} display={{ md: 'none', xs: isDisplay }} justifyContent={'space-between'} >
                            <Stack>

                                {/* {Typographynk Section} */}
                                <Stack direction='row' gap={2} alignItems='center' justifyContent={'space-between'}  >
                                    <Box sx={{ alignItems: "center" }} display={{ md: 'none', xs: "flex" }} onClick={togglenavbarclose} >
                                        <CloseRoundedIcon />
                                    </Box>
                                    <Box>
                                        <Switchbtn checked={useDarkTheme} onClick={toggleTheme} />
                                    </Box>
                                </Stack>



                                <Stack alignItems="center" gap={2} >

                                    {/* {profile} */}

                                    <NavLink to='/' style={{  color: useDarkTheme ? "white" : "#000248de" , fontSize: "18px" }} color='primary'   >Credit Cards </NavLink>
                                    <NavLink to='/point-calculator' style={{ color: useDarkTheme ? "white" : "#000248de", fontSize: "18px" }} >  Rebates & Rewards   </NavLink>
                                    <Typography sx={style2} variant='h2' color='primary'  > <MonetizationOnRoundedIcon sx={{ height: "20px" }} /> Refrence & Earn 25%  </Typography>

                                </Stack>
                            </Stack>


                            <Stack alignItems="center" direction={'row'} >

                                <Stack direction='row' alignItems='center' gap={1}  >
                                    <Avatar alt='profile' src={Avater} />
                                    <Typography> $0 </Typography>
                                </Stack>

                            </Stack>
                        </Stack>

                    </nav>
                </header>
            </Grid >
        </>
    )
}

export default Navbar;
