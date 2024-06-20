import React, { useState } from 'react'
import { ButtonGroup, Button } from '@mui/material'

const CustomButton = (props) => {

    const { Btn1, Btn2, Btn1Icon, Btn2Icon, Btn3, Btn4 } = props


    const [switchtoggle, setSwitchtoogle] = useState("#000248de")
    const [colorswitch, setColorswitch] = useState("#000248de")
    const [colorswitchtgl, setColorswitchtgl] = useState("#000248de")
    const [colorswitchtoggle, setColorswitchtoggle] = useState("#000248de")
    const [isOpen, setIsOpen] = useState(false);
    const [isClose, setIsClose] = useState(false);
    const [isTogl, setIsTogl] = useState(false);
    const [isToggle, setIsToggle] = useState(false);

    const handleClickOpen = () => {
        setIsTogl(false);
        setIsClose(false);
        setIsToggle(false);
        setIsOpen(true);
        setSwitchtoogle("#b8deb6"); // set background color of open button
        setColorswitch("#000248de"); // reset background color of close button
        setColorswitchtgl("#000248de"); // reset background color of close button
        setColorswitchtoggle("#000248de"); // reset background color of close button

        console.log("isOpen", isOpen);
    };


    const handleClickClose = () => {
        setIsTogl(false);
        setIsOpen(false);
        setIsToggle(false);
        setIsClose(true);
        setColorswitch("#b8deb6"); // set background color of close button
        setSwitchtoogle("#000248de");
        setColorswitchtgl("#000248de");
        setColorswitchtoggle("#000248de");
        console.log("isOpen", isOpen); // reset background color of open button
        console.log("isClose", isClose); // reset background color of open button
    };
    const handleClickClosetogl = () => {
        setIsClose(false);
        setIsOpen(false);
        setIsToggle(false);
        setIsTogl(true);
        setColorswitch("#000248de"); // set background color of close button
        setSwitchtoogle("#000248de");
        setColorswitchtgl("#b8deb6");
        setColorswitchtoggle("#000248de");
        console.log("isOpen", isOpen); // reset background color of open button
        console.log("isClose", isClose); // reset background color of open button
    };
    const handleClicktoggle = () => {
        setIsClose(false);
        setIsOpen(false);
        setIsTogl(false);
        setIsToggle(true);
        setColorswitch("#000248de"); // set background color of close button
        setSwitchtoogle("#000248de");
        setColorswitchtgl("#000248de");
        setColorswitchtoggle("#b8deb6");
        console.log("isOpen", isOpen); // reset background color of open button
        console.log("isClose", isClose); // reset background color of open button
    };

    const openBtnStyle = {
        fontSize: "14px",
        borderRadius: "3px",
        border: "none",
        '&:hover': { // disable hover effect on ButtonGroup
            border: 'none',
            boxShadow: 'none',
        },
        backgroundColor: switchtoggle,
    }


    const closeBtnStyle = {
        fontSize: "14px",
        borderRadius: "3px",
        border: "none",
        '&:hover': { // disable hover effect on ButtonGroup
            border: 'none',
            boxShadow: 'none',
        },
        backgroundColor: colorswitch,
    }
    const closeBtnStyletogl = {
        fontSize: "13px",
        fontWeight: "lightbolder",
        borderRadius: "3px",
        border: "none",
        '&:hover': { // disable hover effect on ButtonGroup
            border: 'none',
            boxShadow: 'none',
        },
        backgroundColor: colorswitchtgl,
    }
    const Styletoggle = {
        fontSize: "13px",
        fontWeight: "lightbolder",
        borderRadius: "3px",
        border: "none",
        '&:hover': { // disable hover effect on ButtonGroup
            border: 'none',
            boxShadow: 'none',
        },
        backgroundColor: colorswitchtoggle,
    }

    return (
        <div>
            <ButtonGroup
                fullWidth
                sx={{
                    background: "#000248de",
                    padding: "4px",
                    borderRadius: "3px",
                    "& .MuiButtonGroup-firstButton": {
                        borderRadius: "3px",
                        "&:hover": {
                            background: setSwitchtoogle ? "#b8deb6": "#000248de", // Maintain the same background color on hover

                        },

                    },
                    "& .MuiButtonGroup-lastButton": {
                        borderRadius: "3px",
                        "&:hover": {
                            background: !setColorswitch ? "#000248de" : "#b8deb6", // Maintain the same background color on hover

                        },

                    },
                    "& .MuiButtonGroup-middleButton": {
                        borderRadius: "3px",
                        "&:hover": {
                            background: !setColorswitch ? "#000248de" : "#b8deb6", // Maintain the same background color on hover

                        },

                    },

                }}>
                <Button fullWidth color={isOpen ? "primary" : 'btntext'} sx={openBtnStyle} onClick={handleClickOpen}  > {Btn1Icon} {Btn1}</Button>
                <Button fullWidth color={isClose ? "primary" : 'btntext'} sx={closeBtnStyle} onClick={handleClickClose}  > {Btn2Icon} {Btn2}</Button>
                {Btn3 && (
                    <Button fullWidth color={isTogl ? "primary" : 'btntext'} sx={closeBtnStyletogl} onClick={handleClickClosetogl}>{Btn3}</Button>
                )}
                {Btn4 && (
                    <Button fullWidth color={isToggle ? "primary" : 'btntext'} sx={Styletoggle} onClick={handleClicktoggle}>{Btn4}</Button>
                )}
            </ButtonGroup>
        </div>
    )
}

export default CustomButton;


// const handleClickOpen = () => {
//     setIsTogl(false);
//     setIsClose(false);
//     setIsOpen(true);
//     setSwitchtoogle("#b8deb6"); // set background color of open button
//     setColorswitch("#000248de"); // reset background color of close button

//     console.log("isOpen", isOpen);
// };


// const handleClickClose = () => {
//     setIsTogl(false);
//     setIsClose(true);
//     setIsOpen(false);
//     setColorswitch("#b8deb6"); // set background color of close button
//     setSwitchtoogle("#000248de");
//     console.log("isOpen", isOpen); // reset background color of open button
//     console.log("isClose", isClose); // reset background color of open button
// };
// const handleClickClosetogl = () => {
//     setIsTogl(false);
//     setIsClose(false);
//     setIsOpen(false);
//     setColorswitch("#b8deb6"); // set background color of close button
//     setSwitchtoogle("#000248de");
//     console.log("isOpen", isOpen); // reset background color of open button
//     console.log("isClose", isClose); // reset background color of open button
// };