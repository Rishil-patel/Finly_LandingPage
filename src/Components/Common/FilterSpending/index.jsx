import React, { useState } from 'react'
import { Box, Stack, Button, Typography } from '@mui/material'
import CustomInput from '../CustomInput'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CustomButton from '../CustomButton';


const FilterSpending = (props) => {
    const [open, setOpen] = useState(false)

    const { SpendTitle, SpendButton, StartIcon, sx,iconUp,iconDown } = props
    return (
        <>
            <Box paddingY={2} sx={sx} >
                <Stack gap={2} >
                    <Stack direction='row' justifyContent='space-between' alignItems='center'  >
                        <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }} variant='h3' color='primary' > {StartIcon} {SpendTitle}</Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }} onClick={() => setOpen(!open)   }  >
                            {open ?   iconUp  : iconDown }
                        </Box>
                    </Stack>
                    {open && (
                        <Box sx={{ display:"flex", flexDirection:"column", gap:"10px"}} >
                            <Stack direction='row' gap={1} >
                                <CustomInput type={"number"} iconStart={<AttachMoneyOutlinedIcon color='primary' />} fullWidth size='small' />
                                <CustomButton Btn1={"Monthly"} Btn2={"Yearly"} />
                            </Stack>

                            {SpendButton && (
                                <Button variant='contained' fullWidth color='btncolor' sx={{ borderRadius: "5px" }}  > {SpendButton} </Button>
                            )}
                        </Box>
                    )}
                </Stack>
                
            </Box>
        </>
      

    )
}

export default FilterSpending
