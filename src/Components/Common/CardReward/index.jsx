import React from 'react'
import { Box, Stack, CardMedia, Typography, Avatar   } from '@mui/material'

const CardRewards = (Props) => {
    
    const { src, image, PersonName, text, Time,BatchIcon,BatchText, useDarkTheme  } = Props

    const textStyle = {
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: "290px",
        whiteSpace: "nowrap",
        textDecoration:"underline"
        
    }

    const Blogs = (
        <Stack
            direction="row"
            alignItems="center"
            position="absolute"
            top={9}
            left={10}
            sx={{
                background: "#000248de",
                padding: "5px 8px",
                borderRadius: 6,
                
            }}
        >
            <Stack direction="row" alignItems="center" sx={{ color: "white" }}   >
                <Box display={'flex'} alignItems={'center'} >
                    {BatchIcon}
                </Box>
                <Typography variant='h2' sx={{ color: "white", fontSize: 13 }}>
                    {BatchText}
                </Typography>
            </Stack>
        </Stack>
    );

    return (
        <>
            <Box
                bgcolor={'white'}
                boxShadow={"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)"}
                borderRadius={2}
                width={330}
                overflow={'hidden'}
                position={'relative'}

            >
                {Blogs}

                <Stack  bgcolor={ useDarkTheme? "#1E1E40" : "#fff" }  >
                    <Stack direction={'row'}  >
                        {image && <CardMedia component="img" image={image} sx={{
                            objectFit: "cover",
                            height: "200px",
                            overflow: "hidden"
                        }} />}
                    </Stack>

                    <Stack p={2} gap={2} justifyContent={'center'} alignItems={'center'} bgcolor={ useDarkTheme? "#1E1E40" : "#fff" } >

                        <Stack justifyContent={"center"} width={"100%"} direction={'row'} alignItems={'center'} gap={2} >
                            <Avatar alt='profile' src={src} />
                            <Stack direction={'row'} gap={.5} >
                                <Typography variant='h6'color='primary' > {PersonName} </Typography>
                                <Typography variant='h6' color='primary' > {Time} </Typography>
                            </Stack>
                        </Stack>

                        <Stack>
                            <Typography variant='h5' sx={textStyle} color='primary' > {text} </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>

        </>
    )
}

export default CardRewards
