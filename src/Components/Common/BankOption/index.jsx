import React from 'react'
import { Stack, Typography, Box, Checkbox } from '@mui/material'

const BankOption = (props) => {
    const { src, defaultChecked, BankName, Caption, sx, icon, color } = props
    return (
        <>
            <Box paddingY={1} sx={sx} >
                <Stack direction='row' justifyContent='space-between' alignItems='center'  >
                    <Stack direction='row' alignItems='center' gap={1} >
                        {src && (
                            src
                        )}
                        <Stack direction={"column"} gap={1} >
                            <Typography variant='h2' sx={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "600" }} color={color} >
                                {icon && (
                                    icon
                                )}
                                {BankName}
                            </Typography>
                            {Caption && (
                                <Typography variant='h6' sx={{ padding: "0 30px" }} >{Caption}</Typography>
                            )}
                        </Stack>
                    </Stack>
                    <Box>
                        <Checkbox
                            size='large'
                            defaultChecked={defaultChecked}
                        />
                    </Box>
                </Stack>
            </Box>


        </>
    )
}

export default BankOption;
