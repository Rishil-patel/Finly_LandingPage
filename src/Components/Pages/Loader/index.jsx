import React from 'react'
import "./loader.css"
import { Box, Typography } from '@mui/material'

const Loader = () => {
  return (
    <>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={"100vh"} flexDirection={'column'} >
        <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <Typography variant='h1' color='primary' textAlign={'center'} > Comming Soon ...   </Typography>
      </Box>
    </>
  )
}

export default Loader
