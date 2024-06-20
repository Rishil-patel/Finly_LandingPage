import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const CardReview = (Props) => {
    const { Review, AuthName, CompanyName } = Props
    return (
        <>
            <Stack 
            direction={'column'} 
            bgcolor={'#90ee9054'} 
            justifyContent={'space-between'} 
            p={3}  
            gap={3} 
            borderRadius={2} 
            
            >
                <Box>
                    <Typography variant='h5' color={'primary'} > {Review}    </Typography>
                </Box>
                <Box>
                    <Typography variant='h5' color={'primary'} fontWeight={600} >  {AuthName}    </Typography>
                    <Typography variant='body2' color={'secondary'} fontWeight={500}  >    {CompanyName}    </Typography>
                </Box>
            </Stack>
        </>
    )
}

export default CardReview;

