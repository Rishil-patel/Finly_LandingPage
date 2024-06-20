import React from 'react'
import { Box, Stack, Typography } from '@mui/material'


const BenfitsCard = (Props) => {

    const { image, title, Caption, useDarkTheme } = Props

    return (
        <>
            <Box
                bgcolor={useDarkTheme ? "#1E1E40" : "#000248"}
                p={3}
                borderRadius={2.5}

            >
                <Stack gap={1} >
                    <Box>
                        <img src={image} alt="" width={50} />
                    </Box>
                    <Box>
                        <Typography variant='h2' color={'white'} >
                            {title}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6' color={'secondary'} >
                            {Caption}
                        </Typography>
                    </Box>

                </Stack>
            </Box>

        </>
    )
}



export default BenfitsCard
