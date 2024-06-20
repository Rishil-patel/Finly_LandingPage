import React, { useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const SpendDetails = (Props) => {

    const [showDetais, setShowDetais] = useState(false)

    const { NameIcone,
        Name,
        ToggleIconeClose,
        ToggleIconeOpen,
        Spend,
        value,
        fees,
        SpendDescription,
        Spend1,
        value1,
        fees1,
        SpendDescription1,
        Spend2,
        value2,
        fees2,
        SpendDescription2,
        Spend3,
        value3,
        fees3,
        SpendDescription3,
        Spend4,
        value4,
        fees4,
        SpendDescription4,
        Spend5,
        value5,
        fees5,
        SpendDescription5,
    }= Props

    const style = {

    }

    return (
        <div>
            <Stack>
                {NameIcone && (
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} bgcolor={'#adadad24'} p={2} borderRadius={2} >
                        <Stack direction={'row'} gap={1} alignItems={'center'}>
                            <Box display={"flex"} alignItems={'center'} > {NameIcone} </Box>
                            <Typography color={'primary'} > {Name} </Typography>
                        </Stack>
                        <Box display={"flex"} alignItems={'center'} sx={{ cursor: "pointer" }} onClick={() => setShowDetais(!showDetais)} >
                            {/* <Box display={"flex"} alignItems={'center'}> {showDetais?  ToggleIconeClose  : ToggleIconeOpen} </Box> */}
                            <Box display={"flex"} alignItems={'center'}> <KeyboardArrowDownRoundedIcon  sx={{ transform:"360deg" }}  /> </Box>
                        </Box>
                    </Stack>
                )}

                {showDetais && (

                    <Stack paddingX={2} >

                        <Stack paddingY={1.5} borderColor={'lightgray'} >
                            <Box display={'flex'} justifyContent={'space-between'} flexDirection={'row'} padding={1.2} borderBottom={2} borderColor={"lightgray"} >
                                <Box display={'flex'} flexDirection={'column'} >
                                    <Typography variant='Filter' color={'primary'} > {Spend} </Typography>
                                    <Typography variant='Filter' color={'grey'} > {SpendDescription} </Typography>
                                </Box>
                                <Box textAlign={"end"} border={'none'} display={'flex'} flexDirection={'column'} >
                                    <Typography variant='Filter' color={'primary'} > {value} </Typography>

                                    <Typography variant='Filter' color={'lightgray'} >{fees}</Typography>

                                </Box>
                            </Box>

                            <Box display={'flex'} justifyContent={'space-between'} flexDirection={'row'} padding={1.2} borderBottom={2} borderColor={"lightgray"}   >
                                <Box display={'flex'}  flexDirection={'column'} >
                                    <Typography variant='Filter' color={'primary'}  > {Spend1} </Typography>
                                    <Typography variant='Filter' color={'grey'} > {SpendDescription1} </Typography>
                                </Box>
                                <Box textAlign={"end"} border={'none'} display={'flex'} flexDirection={'column'} >
                                    <Typography variant='Filter' color={'primary'} > {value1} </Typography>

                                    <Typography variant='Filter' color={'lightgray'} >{fees1}</Typography>

                                </Box>
                            </Box>

                            <Box display={'flex'} justifyContent={'space-between'} flexDirection={'row'} padding={1.2} borderBottom={2} borderColor={"lightgray"} >
                                <Box display={'flex'}  flexDirection={'column'} >
                                    <Typography variant='Filter'color={'primary'} > {Spend2} </Typography>
                                    <Typography variant='Filter' color={'grey'} > {SpendDescription2} </Typography>
                                </Box>
                                <Box textAlign={"end"} border={'none'} display={'flex'} flexDirection={'column'} >
                                    <Typography variant='Filter' color={'primary'} > {value2} </Typography>

                                    <Typography variant='Filter' color={'lightgray'} >{fees2}</Typography>

                                </Box>
                            </Box>

                            {Spend3 && (
                                <span>
                                    <Box display={'flex'} justifyContent={'space-between'} flexDirection={'row'} padding={1.2} borderBottom={2} borderColor={"lightgray"}  >
                                        <Box display={'flex'} alignItems={'center'} >
                                            <Typography variant='Filter' color={'primary'}  > {Spend3} </Typography>
                                            <Typography variant='Filter' color={'grey'} > {SpendDescription3} </Typography>
                                        </Box>
                                        <Box textAlign={"end"} border={'none'} display={'flex'} flexDirection={'column'} >
                                            <Typography variant='Filter' color={'primary'} > {value3} </Typography>

                                            <Typography variant='Filter' color={'lightgray'} >{fees3}</Typography>

                                        </Box>
                                    </Box>

                                    <Box display={'flex'} justifyContent={'space-between'} flexDirection={'row'} padding={1.2} borderBottom={2} borderColor={"gray"}  >
                                        <Box display={'flex'} alignItems={'center'} >
                                            <Typography variant='Filter' color={'primary'} > {Spend4} </Typography>
                                            <Typography variant='Filter' color={'grey'} > {SpendDescription4} </Typography>
                                        </Box>
                                        <Box textAlign={"end"} border={'none'} display={'flex'} flexDirection={'column'} >
                                            <Typography variant='Filter' color={'primary'} > {value4} </Typography>

                                            <Typography variant='Filter' color={'lightgray'} >{fees4}</Typography>

                                        </Box>
                                    </Box>

                                    <Box display={'flex'} justifyContent={'space-between'} flexDirection={'row'} padding={1.2}  >
                                        <Box display={'flex'} alignItems={'center'} >
                                            <Typography variant='Filter' color={'primary'} > {Spend5} </Typography>
                                            <Typography variant='Filter' color={'grey'} > {SpendDescription5} </Typography>
                                        </Box>
                                        <Box textAlign={"end"} border={'none'} display={'flex'} flexDirection={'column'} >
                                            <Typography variant='Filter' color={'primary'} > {value5} </Typography>

                                            <Typography variant='Filter' color={'lightgray'} >{fees5}</Typography>

                                        </Box>
                                    </Box>
                                </span>
                            )}
                        </Stack>

                    </Stack>

                )}
            </Stack>
        </div>
    )
}

export default SpendDetails;
