import React, { useState } from 'react'
import { Grid, Stack, Typography, MenuItem, Box, } from '@mui/material'
import { useMediaQuery } from '@mui/material';
import CustomInput from '../../Common/CustomInput'
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



import Card2 from "../../../Assetes/images/Card2.png"
import doller from "../../../Assetes/Svg/cards-with-dollar-sign-svgrepo-com (2).svg"


import CustomCard from '../../Common/CustomCard'
import Filter from "../Filter"
import CardInfo from '../../Common/CardInfo';
import CircleButton from '../../Common/CircleButton';

import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

import Data3 from "../../../Data/CardData/Carddata3"
import GridStack from "../../../Data/GridStackData"
import MobileFilter from '../MobileFilter';

import { useNavigate } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const cardstyle2 = {
    lineHeight: " 0.755rem",
    borderRadius: "15px"
}

const names = [
    'Amex Menbership Rewards',
    'RBC Avion Rewards',
];




const HomePage = ({ useDarkTheme }) => {
    const [personName, setPersonName] = useState([]);
    const [isShowGrid, setShowGrid] = useState(true)
    const [isShowFilter, setShowFilter] = useState(false)

    const navigate = useNavigate();

    const btn = {
        borderRadius: "24px",
        alignItems: "center",
        color: "white",
        background: "#000248de",
        "&.MuiButton-root:hover": {
            background: "#000248de"
        }
    }
    const btn2 = {
        borderRadius: "20px",
        alignItems: "center",
        color: useDarkTheme ? "white" : "#000248de"
    }


    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const isMobile = useMediaQuery('(max-width:900px)');

    // const cardstyel = {
    //     background: "#000248de",
    //     color: "white",
    //     width: isMobile ? '100%' : '80%',
    //     borderRadius: "18px",
    //     height: 'auto',

    // }

    return (
        <>

            <Stack gap={6} alignItems="center"   >

                {/* { Start Card } */}
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                    <Box bgcolor={!useDarkTheme ? "#e4fff6" : "#000248de"} paddingX={{ md: 13, xs: 4 }} paddingY={{ md: 3, xs: 4 }}  >
                        <Stack direction='row' alignItems='center' justifyContent='center' sx={{ background: "btncolor", }}  >
                            <Stack >
                                <Typography variant='Headingtext' fontWeight='600' color='primary' >  Master Your Credit Cards With Finly Wealth <img src={doller} alt="card" width={40} style={{ display: isMobile ? "none" : "block", }} /> </Typography>
                                <Typography variant='HeadingCaption' color='gray' >  Uncover the perfect card, optimize reward, and manage everything in one place.   </Typography>
                            </Stack>
                            <img src={Card2} alt="card" height={370} style={{ display: isMobile ? 'none' : 'block' }} />

                        </Stack>
                    </Box>

                    {/* {3 Cards} */}

                    <Box maxWidth={1440} display={"flex"} flexDirection={"column"} justifyItems={'center'} p={{ md: 1, xs: 1 }}  >
                        <Stack direction='row' gap={2} p={2} flexWrap={{ md: "nowrap", xs: "wrap" }} justifyContent={'center'}  >
                            {Data3.map(data => (
                                <CardInfo
                                    title={data.title}
                                    subtitle={data.subtitle}
                                    BtnName={data.BtnName}

                                />
                            ))}

                        </Stack>

                        {/* {search & Filter} */}

                        <Stack direction={{ md: "row", xs: "column" }} alignItems='center' justifyContent='space-between' >
                            <Box display={'flex'} justifyContent={'space-between'} width={{ md: "auto", xs: "100%" }} >
                                <Typography variant='h2' color='primary' display={{ md: 'none', xs: "flex" }} alignItems={'center'} >150Cards</Typography>

                                <Typography sx={{ display: "flex", alignItems: "center", gap: "2px", cursor: "pointer" }} fontSize={{ md: "18px", xs: "14px" }} color='primary' onClick={() => setShowFilter(!isShowFilter)} >
                                    <FilterListRoundedIcon /> Filter
                                </Typography>
                            </Box>

                            <Grid width={{ md: 420, xs: "100%" }} marginBottom={{ md: 0, xs: 1 }} >
                                <Stack direction='row' alignItems='center' gap={1} justifyContent={'center'} >

                                    <CustomInput
                                        // sx={inputstyle}
                                        placeholder={"Select a Credit Card"}
                                        fullWidth={{ xs: true, md: false }}
                                        size='medium'
                                        iconStart={<SearchRoundedIcon />}
                                    />

                                    <Typography variant='h2' color='primary' display={{ md: 'flex', xs: "none" }} >150Cards</Typography>
                                </Stack>
                            </Grid>
                            <Stack direction='row' alignItems='center' gap={2} width={{ md: "420px", xs: "100%" }} justifyContent={'center'} >
                                <Select
                                    // sx={inputstyle}
                                    fullWidth={{ xs: true, md: false }}
                                    size='medium'
                                    displayEmpty
                                    value={personName}
                                    onChange={handleChange}
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <span style={{ color: "#AAAAAA" }} >Net Annual Rewards</span>;
                                        }

                                        return selected.join(', ');
                                    }}
                                    MenuProps={MenuProps}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >

                                    {names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>



                                <Stack direction='row' gap={1} display={{ md: 'flex', xs: "none" }}  >
                                    <Box sx={{ cursor: "pointer" }}
                                        width={45}
                                        height={45}
                                        bgcolor={!isShowGrid ? '' : '#b8deb6'}
                                        display={'flex'}
                                        borderRadius={2.9}
                                        alignItems={'center'}
                                        justifyContent={'center'}

                                        onClick={() => setShowGrid(true)} >
                                        <GridViewOutlinedIcon sx={{ height: "30px", color: !isShowGrid ? "" : "#000248de" }} />
                                    </Box>
                                    <Box
                                        sx={{ cursor: "pointer" }}
                                        onClick={() => setShowGrid(false)}
                                        width={45}
                                        height={45}
                                        bgcolor={isShowGrid ? '' : '#b8deb6'}
                                        display={'flex'}
                                        borderRadius={2.9}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                    >
                                        <ViewStreamOutlinedIcon sx={{ height: "30px", color: isShowGrid ? "" : "#000248de" }} />
                                    </Box>
                                </Stack>

                            </Stack>
                        </Stack>



                        {/* {Filter and card Section } */}
                        <Grid Grid container gap={{ md: 1 }} >

                            <Grid item md={3}  >
                                {/* {Filter section}  */}
                                <Filter />
                                <MobileFilter
                                    isShowFilter={isShowFilter}
                                    setShowFilter={setShowFilter}
                                    useDarkTheme={useDarkTheme}
                                />
                            </Grid>

                            {/* {Card Section} */}
                            <Grid xs={12} md={8.8} gap={{ md: 2 }}  >
                                <Stack direction={'row'} gap={{ md: 1, xs: .5 }} padding={1} display={{ md: "flex" }} flexWrap="wrap"  >
                                    <CircleButton
                                        sx={btn}
                                        CancleIcon={<ClearRoundedIcon sx={{ height: "14px" }} />}
                                        buttonName={'Best For Travelling'}
                                    />
                                    <CircleButton
                                        sx={btn2}
                                        buttonName={'No annual Fee'}
                                    />
                                    <CircleButton
                                        sx={btn2}
                                        buttonName={'Fit for Gricery Shopoping'}
                                    />
                                    <CircleButton
                                        sx={btn2}
                                        buttonName={'Best Airline Cards'}
                                    />
                                    <CircleButton
                                        sx={btn2}
                                        buttonName={'Cash Back'}
                                    />
                                    <CircleButton
                                        sx={btn2}
                                        buttonName={'0% ARP'}
                                    />
                                </Stack>

                                <Stack container xs={12} md={8} gap={1}
                                    sx={{ padding: "10px 0" }}
                                    direction={isShowGrid ? 'row' : "column"}
                                    flexWrap={'wrap'}
                                    justifyContent={"center"}
                                >


                                    {GridStack.map(data => (
                                        <Stack item xs={12} md={3.8}  >
                                            <CustomCard
                                                Bolgs
                                                sx={cardstyle2}
                                                show
                                                image={data.image}
                                                text={data.text}
                                                buttonText={data.buttonText}
                                                buttonText2={data.buttonText2}
                                                AnnualText={data.AnnualText}
                                                AnnualPrice={data.AnnualPrice}
                                                AnnualText2={data.AnnualText2}
                                                BonusText={data.BonusText}
                                                BonusPrice={data.BonusPrice}
                                                BonusText2={data.BonusText2}
                                                CreditText={data.CreditText}
                                                CreditIcone={data.CreditIcone}
                                                CreditScore={data.CreditScore}
                                                CreditNetwork={data.CreditNetwork}
                                                CreditTitle={data.CreditTitle}
                                                AnnualFee={data.AnnualFee}
                                                Fee={data.Fee}
                                                PurchaseRate={data.PurchaseRate}
                                                PurchaseNo={data.PurchaseNo}
                                                BatchText={data.BatchText}
                                                BatchIcon={data.BatchIcon}
                                                // onClick={data.onClick}
                                                isShowGrid={isShowGrid}
                                                useDarkTheme={useDarkTheme}
                                                onClick={() => navigate("/Card-details")}

                                            /></Stack>
                                    ))}
                                </Stack>
                            </Grid>

                        </Grid >
                    </Box >
                </Box >
            </Stack >

        </>
    )
}

export default HomePage
