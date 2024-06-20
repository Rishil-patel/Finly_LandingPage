import React from 'react'
import { Box, Stack, Typography, Grid } from '@mui/material'

const CardSpend = (props) => {

    const { icon, Title, value, points, Seebrakedown, Arrow, useDarkTheme } = props

    return (
        <Grid item
            md={5.9} xs={12}
            bgcolor={useDarkTheme ? "#1E1E40" : "#fafafab5"}
            boxShadow={"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)"}
            borderRadius={3.5}
            p={3.4}
        // width={{ md: "49%", xs: "100%" }}
        >

            <Stack gap={.5}>
                <Box>
                    <Stack gap={.9} >
                        <Stack direction={'row'} gap={.5} alignItems={'center'} >
                            <Box display={'flex'} alignItems={'center'}> {icon} </Box>
                            <Typography color={'secondary'} variant='CardInfoCaption' display={'flex'} alignItems={'center'} >  {Title} </Typography>
                        </Stack>
                        <Typography color={'primary'} variant='h4' fontWeight={400} > {value} </Typography>
                    </Stack>
                    {points && (
                        <Typography variant='CardInfoCaption' > {points} </Typography>
                    )}
                </Box>
                {Seebrakedown && (
                    <Stack direction={'row'} >
                        <Typography variant='subtitle1' display={'flex'} alignItems={'center'} >{Seebrakedown}</Typography>
                        <Box display={'flex'} alignItems={'center'}>
                            {Arrow}
                        </Box>
                    </Stack>
                )}
            </Stack>

        </Grid>
    )
}

export default CardSpend
