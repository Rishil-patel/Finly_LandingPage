import React, { useState } from 'react'
import { Box, Stack, Grid, Typography, Button } from '@mui/material'

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

import CardSpend from '../../Common/CardSpend';
import BenfitsCard from '../../Common/BenfitesCard';
import SpendDetails from '../../Common/SpendDetails';
import CardRewards from '../../Common/CardReward';

import SpendData from "../../../Data/spenddata"
import SpendDetailsdata from "../../../Data/SpendDetails"
import BenefitsData from "../../../Data/BenefitsData"
import FeesRateData from "../../../Data/FessRateData"
import ReviewData from "../../../Data/ReviewData"
import CardData from '../../../Data/CardData';

import MobileFilter from '../MobileFilter';
import Filter from "../Filter"

import Card from "../../../Assetes/Svg/card main.svg"
import CardReview from '../../Common/CardReview';
// import Review from '../../../Data/ReviewData';

const CardDetail = ({ useDarkTheme }) => {
    // const [isShowGrid, setShowGrid] = useState(true)
    const [isShowFilter, setShowFilter] = useState(false)
    return (
        <>
            <Stack gap={{ xs: 3, md: 6 }}  >
               

                {/* {First Card } */}
                <Stack
                    direction={'row'}
                    justifyContent={{ md: 'space-evenly', xs: "center" }}
                    alignItems={'center'}
                    p={5}
                    bgcolor={!useDarkTheme ? '#e4fff6' : "#000248de"}
                >
                    <Box
                        display={{ md: "flex", xs: "none" }}
                        justifyContent={'center'}
                        alignItems={'center'}
                        bgcolor={useDarkTheme ? "#b8deb6" : "#000248de"}
                        color={'primary'}
                        height={50}
                        width={50}
                        borderRadius={50}
                        sx={{ cursor: "pointer" }}
                    >
                        <ArrowBackRoundedIcon sx={{ width: "35px", height: "35px", color: "white" }} />
                    </Box>
                    <Stack gap={3}>
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}


                        >
                            <img src={Card} alt="card" />
                        </Box>
                        <Stack gap={2} >

                            <Box>
                                <Typography variant={'CardInfotext'} textAlign={'center'} color={'primary'} >
                                    American Express Cobalt Card
                                </Typography>
                            </Box>
                            <Button variant='contained' color='btncolor' > $60 Cash Rebate from FinlyWealth </Button>

                            <Stack direction={'row'} gap={1} >
                                <Button variant='contained' fullWidth
                                    sx={{ color: useDarkTheme ? "#000248de" : "#fff" }} >
                                    Apply Now
                                </Button>
                                <Button variant='outlined' fullWidth > Add to Compare </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Box
                        display={{ md: "flex", xs: "none" }}
                        justifyContent={'center'}
                        alignItems={'center'}
                        bgcolor={useDarkTheme ? "#b8deb6" : "#000248de"}
                        color={'primary'}
                        height={50}
                        width={50}
                        borderRadius={50}
                        sx={{ cursor: "pointer" }}
                    >
                        <ArrowForwardRoundedIcon sx={{ width: "35px", height: "35px", color: "white" }} />
                    </Box>
                </Stack>

                <Stack alignItems={'center'} >
                    <Box maxWidth={1440} display={"flex"} flexDirection={"column"} justifyItems={'center'} p={{ md: 1, xs: 1 }}  >
                        <Grid Grid container gap={{ md: 2 }}>

                            <Grid item md={3}  >

                                <Box marginY={2} >
                                    <Typography sx={{ display: "flex", alignItems: "center", gap: "2px", cursor: "pointer" }} fontSize={{ md: "18px", xs: "14px" }} color='primary'
                                        onClick={() => setShowFilter(!isShowFilter)}
                                    >
                                        <FilterListRoundedIcon /> Filter
                                    </Typography>
                                </Box>
                                {/* {Filter section}  */}
                                <Filter />
                                <MobileFilter
                                    isShowFilter={isShowFilter}
                                    setShowFilter={setShowFilter}
                                    useDarkTheme={useDarkTheme}
                                />
                            </Grid>
                            {/* {Report Card} */}
                            <Grid xs={12} md={8.8} gap={{ md: 2 }} p={.5}  >

                                <Stack gap={3.5} >
                                    {/* {Report section}  */}
                                    <Box
                                        bgcolor={useDarkTheme ? "#1E1E40" : "#fafafab5"}
                                        boxShadow={"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)"}
                                        borderRadius={2.5}
                                        p={3.4}
                                        display={{ md: "flex", xs: "none" }}
                                    >
                                        <Stack direction={'row'} justifyContent={"space-between"} width={"100%"} >
                                            <Box>
                                                <Typography color={'primary'} variant='h4' fontWeight={600} > $1,016.62 </Typography>
                                                <Typography color={'primary'} > Annual Rewards </Typography>
                                            </Box>
                                            <Box display={'flex'} alignItems={'center'} >
                                                <AddRoundedIcon sx={{ color: useDarkTheme ? "white" : "#000248de" }} />
                                            </Box>

                                            <Box>
                                                <Typography color={'primary'} variant='h4' fontWeight={600} > $315 </Typography>
                                                <Typography color={'primary'} > Welcome Bonus </Typography>
                                            </Box>
                                            <Box display={'flex'} alignItems={'center'} >
                                                <RemoveRoundedIcon sx={{ color: useDarkTheme ? "white" : "#000248de" }} />
                                            </Box>
                                            <Box>
                                                <Typography color={'primary'} variant='h4' fontWeight={600} > $155.8 </Typography>
                                                <Typography color={'primary'} > Annual fee </Typography>
                                            </Box>
                                            <Box display={'flex'} alignItems={'center'} >
                                                <DragHandleRoundedIcon sx={{ color: useDarkTheme ? "white" : "#000248de" }} />
                                            </Box>
                                            <Box>
                                                <Typography color={'primary'} variant='h4' fontWeight={600} > $1,175.82 </Typography>
                                                <Typography color={'primary'} > First Year Value </Typography>
                                            </Box>

                                        </Stack>
                                    </Box>

                                    {/* {card Grid} */}

                                    <Stack gap={1} marginTop={1} justifyContent=
                                        {'centerz'} >
                                        <Grid gap={1} justifyContent={'center'} container md={12} xs={12} >
                                            {SpendData.map((data) => (

                                                <CardSpend
                                                    toggle
                                                    icon={data.icon}
                                                    Title={data.Title}
                                                    Seebrakedown={data.Seebrakedown}
                                                    Arrow={data.Arrow}
                                                    value={data.value}
                                                    points={data.points}
                                                    useDarkTheme={useDarkTheme}

                                                />
                                            ))}
                                        </Grid>
                                    </Stack>

                                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} display={{ md: "flex", xs: "none" }} >
                                        <Box>
                                            <Typography variant='rewards' color={'primary'} >  Reward Insights </Typography>
                                        </Box>
                                        <Stack alignItems={'center'} >
                                            <Stack direction={'row'} gap={.9} >
                                                <Typography display={'flex'} alignItems={'center'} color='primary' >Based on</Typography>
                                                <Button variant='outlined' color='primary' > $ 2000 </Button>
                                                <Typography display={'flex'} alignItems={'center'} color='primary' >Spending</Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack direction={'column'} alignItems={'center'} display={{ md: "none", xs: "flex" }}  >

                                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={"100%"}  >
                                            <Typography variant='rewards' color={'primary'} >  Reward Insights </Typography>
                                            <Typography color={'primary'} >  Add amount </Typography>
                                        </Stack>

                                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={"100%"} >
                                            <Typography display={'flex'} alignItems={'center'} color='primary' >Spending Ammount</Typography>
                                            <Button variant='outlined' color='primary' > $ 2000 </Button>

                                        </Stack>
                                    </Stack>



                                    <Stack gap={1.5} >
                                        {SpendDetailsdata.map((spend) => (
                                            <SpendDetails
                                                NameIcone={spend.NameIcone}
                                                Name={spend.Name}
                                                ToggleIconeOpen={spend.ToggleIconeOpen}
                                                ToggleIconeClose={spend.ToggleIconeClose}
                                                Spend={spend.Spend}
                                                value={spend.value}
                                                Spend1={spend.Spend1}
                                                value1={spend.value1}
                                                Spend2={spend.Spend2}
                                                value2={spend.value2}
                                                Spend3={spend.Spend3}
                                                value3={spend.value3}
                                                Spend4={spend.Spend4}
                                                value4={spend.value4}
                                                Spend5={spend.Spend5}
                                                value5={spend.value5}
                                                fees5={spend.fees5}
                                                fees={spend.fees}
                                                fees1={spend.fees1}
                                                fees2={spend.fees2}

                                            />
                                        ))}
                                    </Stack>

                                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} display={{ md: "flex", xs: "none" }} >

                                        <Typography variant='rewards' color={'primary'} >  Benefits & Insurance  </Typography>


                                    </Stack>

                                    <Grid gap={1} container >
                                        {BenefitsData.map((Benefit) => (
                                            <Grid item md={3.8} xs={12} >
                                                <BenfitsCard
                                                    image={Benefit.image}
                                                    title={Benefit.title}
                                                    Caption={Benefit.Caption}
                                                    useDarkTheme={useDarkTheme}

                                                />
                                            </Grid>
                                        ))}
                                    </Grid>

                                    <Stack gap={2}>
                                        <Typography variant='rewards' color={'primary'} >  Fees & Rates     </Typography>

                                        <Box bgcolor={'#adadad24'} borderRadius={2} p={1} >
                                            <Box display={'flex'} justifyContent={'space-between'} borderBottom={2} borderColor={'lightgray'} p={1} >
                                                <Typography variant='h4' color={'primary'} display={'flex'} alignItems={'center'} fontWeight={400} gap={1} >
                                                    <MonetizationOnRoundedIcon sx={{ color: "#47ff47db" }} />  Annual Fee <InfoOutlinedIcon sx={{ color: "#47ff47db", width: "16px" }} />
                                                </Typography>
                                                <Typography variant='h4' color={'primary'} fontWeight={400} >$155.88</Typography>
                                            </Box>
                                            <Box display={'flex'} justifyContent={'space-between'} p={1} >
                                                <Typography variant='h2' color={'primary'}  >Annual Fee Monthly Installment </Typography>
                                                <Typography variant='h2' color={'primary'} >$12.99</Typography>
                                            </Box>

                                        </Box>

                                        <Stack gap={2}>
                                            {FeesRateData.map((Rate) => (
                                                <SpendDetails
                                                    NameIcone={Rate.NameIcone}
                                                    Name={Rate.Name}
                                                    ToggleIconeOpen={Rate.ToggleIconeOpen}
                                                    ToggleIconeClose={Rate.ToggleIconeClose}
                                                    Spend={Rate.Spend}
                                                    value={Rate.value}
                                                    value1={Rate.value1}
                                                    Spend1={Rate.Spend1}
                                                    SpendDescription1={Rate.SpendDescription1}
                                                    Spend2={Rate.Spend2}
                                                    SpendDescription2={Rate.SpendDescription2}
                                                    value2={Rate.value2}



                                                />
                                            ))}
                                        </Stack>

                                        <Box display={{ md: "flex", xs: "none", }} flexDirection={"column"} gap={2} >
                                            <Stack gap={2}>
                                                <Typography variant='rewards' color={'primary'} > Eligibility & Application </Typography>
                                                <Box display={'flex'} alignItems={'flex-start'} gap={1} >
                                                    <Typography variant='h1' color={'primary'} borderRadius={5} display={'flex'} > <FiberManualRecordRoundedIcon sx={{ width: "10px" }} /> </Typography>
                                                    <Typography variant='Filter' color={'primary'} borderRadius={5} >Good credit history:   </Typography>
                                                    <Typography variant='subtitle' color={'secondary'} borderRadius={5} width={"83%"} > Generally, a credit score of 670 or higher is recommended for approval. However, American Express may consider other factors in your application, such as your income history and debt-to- income ratio. </Typography>
                                                </Box>
                                                <Box display={'flex'} alignItems={'flex-start'} gap={1} >
                                                    <Typography variant='h1' color={'primary'} borderRadius={5} display={'flex'} > <FiberManualRecordRoundedIcon sx={{ width: "10px" }} /> </Typography>
                                                    <Typography variant='Filter' color={'primary'} borderRadius={5} >Minimum income:   </Typography>
                                                    <Typography variant='subtitle' color={'secondary'} borderRadius={5} width={"83%"} >  While not publicly available, the minimum income requirement for the Cobalt Card is generally higher than cards with no annual fee. Having a higher income can increase your chances of approval.
                                                        Documents Required </Typography>
                                                </Box>
                                                <Typography variant='h4' color={'primary'} fontWeight={400} > Documents Required </Typography>

                                                <Box display={'flex'} alignItems={'flex-start'} gap={1} >
                                                    <Typography variant='h1' color={'primary'} borderRadius={5} display={'flex'} > <FiberManualRecordRoundedIcon sx={{ width: "10px" }} /> </Typography>
                                                    <Typography variant='Filter' color={'primary'} borderRadius={5} >Proof of income:   </Typography>
                                                    <Typography variant='subtitle' color={'secondary'} borderRadius={5} width={"83%"} >  This could include pay stubs, tax returns, or bank statements. </Typography>
                                                </Box>
                                                <Box display={'flex'} alignItems={'flex-start'} gap={1} >
                                                    <Typography variant='h1' color={'primary'} borderRadius={5} display={'flex'} > <FiberManualRecordRoundedIcon sx={{ width: "10px" }} /> </Typography>
                                                    <Typography variant='Filter' color={'primary'} borderRadius={5} >Identification: </Typography>
                                                    <Typography variant='subtitle' color={'secondary'} borderRadius={5} width={"83%"} >   You will need to provide valid government-issued identification, such as a driver's license or passport. </Typography>
                                                </Box>
                                                <Box display={'flex'} alignItems={'flex-start'} gap={1} >
                                                    <Typography variant='h1' color={'primary'} borderRadius={5} display={'flex'} > <FiberManualRecordRoundedIcon sx={{ width: "10px" }} /> </Typography>
                                                    <Typography variant='Filter' color={'primary'} borderRadius={5} width={"29%"}  >Social Insurance Number(SIN): </Typography>
                                                    <Typography variant='subtitle' color={'secondary'} borderRadius={5} width={"100%"} >    Your SIN is required to verify your identity and credit history.</Typography>
                                                </Box>
                                                <Typography variant='h4' color={'primary'} fontWeight={400} > Pre-Approval Option</Typography>
                                                <Box display={'flex'} alignItems={'flex-start'} gap={1} bgcolor={'#afffaa36'} p={1.8} >
                                                    <Typography variant='Filter' color={'secondary'} borderRadius={5} display={'flex'} >
                                                        American Express does not currently offer pre-approval for the Cobalt Card. This means you will need to submit a full application to see if you're qualified.
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                            <Box>
                                                <Button variant='contained' color='btncolor' fullWidth={{ md: false, xs: true }} sx={{ width: { md: 200 } }} > Apply Now </Button>
                                            </Box>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>


                <Stack bgcolor={'#8cffd036'} p={{ md: 5.5, xs: 3 }} gap={{ md: 0, xs: 2 }}  >
                    <Typography variant='rewards' color={'primary'} >  Credit Card User Review    </Typography>
                    <Stack direction={{ xs: "column", md: "row" }} justifyContent={{ md: 'space-evenly', xs: "center" }} m={{ md: 2, xs: 0 }} alignItems={'center'} gap={1.5} >

                        <Box
                            display={{ md: "flex", xs: "none" }}
                            justifyContent={'center'}
                            alignItems={'center'}
                            bgcolor={useDarkTheme ? "#b8deb6" : "#000248de"}
                            color={'primary'}
                            height={40}
                            width={120}
                            borderRadius={50}
                            sx={{ cursor: "pointer" }}
                        >
                            <ArrowBackRoundedIcon sx={{ width: "30px", height: "30px", color: "white" }} />
                        </Box>

                        {ReviewData.map((feedback) => (
                            <CardReview
                                Review={feedback.Review}
                                AuthName={feedback.AuthName}
                                CompanyName={feedback.CompanyName}
                            />))}

                        <Box
                            display={{ md: "flex", xs: "none" }}
                            justifyContent={'center'}
                            alignItems={'center'}
                            bgcolor={useDarkTheme ? "#b8deb6" : "#000248de"}
                            color={'primary'}
                            height={40}
                            width={120}
                            borderRadius={50}
                            sx={{ cursor: "pointer" }}
                        >
                            <ArrowForwardRoundedIcon sx={{ width: "30px", height: "30px", color: "white" }} />
                        </Box>
                    </Stack>
                </Stack>

                <Box sx={{ width: "100%" }} p={{ md: 5.5, xs: 3 }} >
                    <Stack alignItems="center" justifyContent="space-between" padding={2} direction="row" >
                        <Typography variant='rewards' color='primary' > Related Artical </Typography>
                        <Button variant='outlined' sx={{ display: { xs: "none", md: "block" } }} > Show more </Button>
                    </Stack>

                    <Stack direction={{ xs: "column", md: "row" }} gap={2} justifyContent={{ md: 'space-evenly', xs: "center" }} alignItems="center" p={2.5}  >
                        {CardData.map(data => (
                            <CardRewards
                                src={data.src}
                                image={data.image}
                                text={data.text}
                                PersonName={data.PersonName}
                                Time={data.Time}
                                BatchText={data.BatchText}
                                BatchIcon={data.BatchIcon}
                                useDarkTheme={useDarkTheme}
                            />
                        ))}

                    </Stack>
                    <Stack alignItems="center" gap={2} p={5} >
                        <Button variant='outlined' sx={{ display: { xs: "block", md: "none" } }} > Show more </Button>
                    </Stack>

                </Box >
            </Stack >
        </>
    )
}

export default CardDetail
