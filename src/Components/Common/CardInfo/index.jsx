import React from 'react'
import {  Typography, Button, Stack } from '@mui/material'

const CardInfo = (props) => {
    const { title, subtitle, BtnName } = props

    return (
        <>

            <Stack gap={3}  bgcolor="#000248de" p={3} borderRadius={3} >
                <Typography variant='CardInfotext' color="white"  > {title} </Typography>
                <Typography variant='CardInfoCaption' > {subtitle} </Typography>
                <Button variant='contained' color='btncolor' sx={{ width: "fit-content" }}  >{BtnName}</Button>
            </Stack>



        </>
    )
}

export default CardInfo
