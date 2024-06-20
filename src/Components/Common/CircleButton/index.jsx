import React from 'react'
import { Button } from '@mui/material'

const CircleButton = (props) => {
    const { CancleIcon, buttonName,sx } = props
    return (
        <>

            <Button variant='Circlebtn' sx={sx}  >
                {CancleIcon} {buttonName}
            </Button>


        </>
    )
}

export default CircleButton


