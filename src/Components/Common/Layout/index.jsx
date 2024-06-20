import React from 'react'
import Navbar from "../NavbarPage"
import Footer from "../Footer"
import { Box } from '@mui/material'

const Layout = ({ children, useDarkTheme, toggleTheme }) => {
    console.log("useDarkTheme:",useDarkTheme);
    return (
        <>
            <Box bgcolor='background' >
                <Navbar useDarkTheme={useDarkTheme} toggleTheme={toggleTheme} />
                {children}
                <Footer useDarkTheme={useDarkTheme}  />
            </Box>
        </>
    )
}

export default Layout
