import React from 'react'
import "./footer.css"

// import { Link } from 'react-router-dom'

import { Box, Stack, Typography, Button, TextField } from '@mui/material'

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';


import logo from "../../../Assetes/images/51368110-removebg-preview (1).png"
import Facebook from "../../../Assetes/Svg/facebook-circle.svg"
import Linkdin from "../../../Assetes/Svg/logo-linkedin.svg"
import instagram from "../../../Assetes/Svg/logo-instagram.svg"


const Footer = (useDarkTheme={useDarkTheme}) => {

    // const input = {
    //     background: "white",
    //     border: "0"
    // }

    const style = {
        transform: " rotate(335deg)"
    }



    return (
        <>

            <footer>
                <Box bgcolor='black' sx={{ padding: "24px 16px " }} >
                    <Stack direction={{ md: "row", xs: "column" }} justifyContent='space-around' borderBottom="2px solid gray"  gap={{ xs: 3 }} >
                        <Stack direction='row' alignItems='flex-start' gap={1}  >
                            <img src={logo} alt="logo" width={50} style={style} />
                            <Typography variant='h4' color='white' sx={{ display: "flex", alignItems: "center", padding: "11px 0" }} >  Finly Wealth </Typography>
                        </Stack>



                        <Stack direction={{ md: "row", xs: "column" }} >
                            <Stack direction={'row'} >
                                <Stack alignItems='center'  >
                                    <Typography variant='h4' color='white' > Quicklinks </Typography>
                                    <ul>
                                        <li> <a href="/" > Start Saving Today </a>  </li>
                                        <li> <a href="/">About Finly</a> </li>
                                        <li> <a href="/"> Blog</a> </li>
                                        <li> <a href="/">Why Us?</a> </li>
                                        <li> <a href="/">Credit Calculator</a> </li>
                                    </ul>
                                </Stack>
                                <Stack alignItems='center' >
                                    <Typography variant='h4' color='white' > Legal </Typography>
                                    <ul>
                                        <li> <a href="/" >Terms of service </a>  </li>
                                        <li> <a href="/">Privacy Policy</a> </li>
                                        <li> <a href="/"> Disclodure</a> </li>
                                        <li> <a href="/">Credit Cards</a> </li>
                                    </ul>
                                </Stack>
                            </Stack>
                            <Stack direction={{ md: "row", xs: "column" }} gap={{ md: 3, xs: 1 }} >
                                <Stack>
                                    <Stack  >
                                        <Typography variant='h4' color='white' paddingX={4} > Contacts </Typography>
                                        <ul>
                                            <li> <a href="/" > <EmailOutlinedIcon /> Support@finlywealth.com </a>  </li>
                                            <li> <a href="/"> <PhoneRoundedIcon />  +123 456 7890</a> </li>
                                        </ul>
                                    </Stack>
                                </Stack>
                                <Stack alignItems='flex-start' gap={1} >
                                    <Typography variant='Footertext' color='white' > Subscribe to our Newsletter </Typography>

                                    <Box
                                        sx={{
                                            padding: 0.5,
                                            borderRadius: 1.8,
                                            background: "white",
                                            width: "100%"

                                        }}
                                    >

                                        <Stack direction="row" gap={1} alignItems="center" justifyContent={"space-between"} height={45} >

                                            <Stack sx={{ textAlign: "left", width: "80%", }}>
                                                <TextField

                                                    type='email'
                                                    placeholder='Enter you email'

                                                    sx={{
                                                        color: "white",
                                                        cursor: "default",
                                                        overflow: "hidden",
                                                        width: "100%",

                                                        "& .css-40ayxt-MuiInputBase-root-MuiOutlinedInput-root  ": {
                                                            boxSizing: "border-box",
                                                            fontSize: "16px",
                                                            height:"40px",
                                                            color:"black",
                                                            
                                                        },
                                                        "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline ": {
                                                            display: "none",
                                                            background:"red",
                                                            color:"black"
                                                            
                                                        },

                                                        "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{
                                                            padding:"13.5px 14px",
                                                            background:"white",
                                                            width:"100%",
                                                            fontSize:"14px"
                                                        }
                                                    }}
                                                >
                                                    {/* <input /> */}
                                                </TextField>
                                            </Stack>

                                            <Stack>
                                                <Button
                                                    color='btncolor'
                                                    variant="contained"
                                                    fullWidth
                                                    // startIcon={isCopied ? <CheckIcon /> : <ContentCopyIcon />}
                                                    sx={{
                                                        width: {
                                                            xs: "100%",
                                                            md: "100%"
                                                            // md: isFullWidth ? "100%" : "max-content",
                                                        },
                                                        padding: "8px 18px",
                                                        borderRadius: 2
                                                    }}
                                                >
                                                    Submit
                                                </Button>
                                            </Stack>




                                        </Stack>
                                    </Box>
                                    <Typography color='white' sx={{ width: "72%", fontSize: "13px" }} > Rest assured, your email address is only used for sending newsletters   </Typography>
                                </Stack>
                            </Stack>
                        </Stack>

                    </Stack>

                    <Stack paddingX={2}    >
                        <Box display='flex' justifyContent='space-between' alignItems={"center"} paddingY={1} flexDirection={{ md: "row", xs: "column-reverse" }} gap={1} >
                            <Typography color='white' variant='h3' >
                                Finly Wealth 2023 All Right Reserved
                            </Typography>
                            <Stack direction='row' gap={0.52} alignItems={"center"} >
                                <Box display='flex' alignItems={"center"} >
                                    <img src={Facebook} alt="Facebook" width={30} />
                                </Box>
                                <Box display='flex' alignItems={"center"} >
                                    <img src={Linkdin} alt="Facebook" width={30} />
                                </Box>
                                <Box display='flex' alignItems={"center"} >
                                    <img src={instagram} alt="Facebook" width={30} />
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Box >
            </footer >


        </>
    )
}

export default Footer
