import React, { useState } from 'react'

import { Grid, Box, Stack, Typography, Button } from '@mui/material';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import LanguageIcon from '@mui/icons-material/Language';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import BackpackIcon from '@mui/icons-material/Backpack';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import SignalCellularAlt2BarRoundedIcon from '@mui/icons-material/SignalCellularAlt2BarRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import SignalCellularConnectedNoInternet0BarRoundedIcon from '@mui/icons-material/SignalCellularConnectedNoInternet0BarRounded';
import SignalCellularNodataRoundedIcon from '@mui/icons-material/SignalCellularNodataRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';



import CustomSelect from '../../Common/CustomSelect';
import CustomInput from '../../Common/CustomInput'
import CustomButton from '../../Common/CustomButton';
import FilterSpending from '../../Common/FilterSpending';
import BankOption from '../../Common/BankOption';
import Filterdata from '../../../Data/FilterData';



const MobileFilter = (Props) => {
    const { isShowFilter, setShowFilter,useDarkTheme } = Props

    const [spendopen, setSpendOpen] = useState(false)
    const [value, setValue] = useState('Excellent'); // set default value 
    const [personalIncome, setPersonalIncome] = useState('70,000-80,000');
    const [houseIncome, setHouseIncome] = useState('90,000-100,000');
    const [showMore, setShowMore] = useState(false)


    const handleChangeselect = (event) => {
        setValue(event.target.value);
    };
    const handleChangeselect2 = (event) => {
        setPersonalIncome(event.target.value);
    };
    const handleChangeselect3 = (event) => {
        setHouseIncome(event.target.value);
    };


    const chack = {
        borderBottom: "2px solid #8080804d"
    }
    const CreditScore = [
        { value: 'Excellent', label: 'Excellent', icon: <SignalCellularAltRoundedIcon />, defaultValue: true },
        { value: 'Very Good', label: 'Very Good', icon: <SignalCellularAlt2BarRoundedIcon /> },
        { value: 'Good', label: 'Good', icon: <CheckCircleOutlineRoundedIcon /> },
        { value: 'Fair', label: 'Fair', icon: <SignalCellularConnectedNoInternet0BarRoundedIcon /> },
        { value: 'Poor', label: 'Poor', icon: <SignalCellularNodataRoundedIcon /> },
    ];
    const Income = [
        { value: "10,000-20,000", label: "10,000-20,000", icon: <AttachMoneyOutlinedIcon />, defaultValue: true },
        { value: '30,000-40,000', label: '30,000-40,000', icon: <AttachMoneyOutlinedIcon /> },
        { value: '50,000-60,000', label: '50,000-60,000', icon: <AttachMoneyOutlinedIcon /> },
        { value: '70,000-80,000', label: '70,000-80,000', icon: <AttachMoneyOutlinedIcon /> },
        { value: '90,000-100,000', label: '90,000-100,000', icon: <AttachMoneyOutlinedIcon /> },
    ];
    const Housespend = [
        { value: "10,000-20,000", label: "10,000-20,000", icon: <AttachMoneyOutlinedIcon />, defaultValue: true },
        { value: '30,000-40,000', label: '30,000-40,000', icon: <AttachMoneyOutlinedIcon /> },
        { value: '50,000-60,000', label: '50,000-60,000', icon: <AttachMoneyOutlinedIcon /> },
        { value: '70,000-80,000', label: '70,000-80,000', icon: <AttachMoneyOutlinedIcon /> },
        { value: '90,000-100,000', label: '90,000-100,000', icon: <AttachMoneyOutlinedIcon /> },
        { value: '110,000-120,000', label: '110,000-120,000', icon: <AttachMoneyOutlinedIcon /> },
    ];

    const BankName = [

        {
            sx: chack,
            BankName: "Royal Bank of Canada",
            src: <AccountBalanceRoundedIcon />,
            defaultChecked: true
        },
        {
            sx: chack,
            BankName: "Bank of Montreal",
            src: <AccountBalanceRoundedIcon />,
            defaultChecked: true
        },
        {
            sx: chack,
            BankName: "The Toronto-Dominion Bank",
            src: <AccountBalanceRoundedIcon />,

        },
        {
            BankName: "The Canadin Imperial Bank of Co...",
            src: <AccountBalanceRoundedIcon />,

        },

    ]

    console.log("filter-open", isShowFilter);
    // const [isShowFilter, setShowFilter] = useState(false)

    return (
        <>
            {/* <Grid item xs={3} */}
            {/*   > */}
            <Box display={{ md: "none", xs: "block" }} >
                <Stack
                    display={isShowFilter ? "block" : "none"}
                    position={'fixed'}
                    top={0}
                    left={0}
                    zIndex={1}
                    height={'100vh'}
                    bgcolor={useDarkTheme ? "#000248" : '#e4ffe2'}
                    p={2}
                    overflow={'auto'}

                >
                    <Box  >
                        {/* {Rewards Calculator Algorithm section } */}
                        <Stack justifyContent={'space-between'} direction={'row'} alignItems={'center'} >
                            <Typography variant='h4' color='primary' > Filter </Typography>
                            <Box onClick={() => setShowFilter(!isShowFilter)}   >
                                <CloseRoundedIcon />
                            </Box>

                        </Stack>


                        <Box sx={{ borderBottom: "2px solid #8080804d" }} paddingY={2} >
                            <Typography variant='h2' textAlign='justify' color='primary' > Rewards Calculator Algorithm </Typography>
                            <Stack direction='row' gap={1} p={1} m={1} bgcolor='#afffaa36' >

                                <InfoOutlinedIcon sx={{ color: "#61cc61" }} />

                                <Typography variant='subtitle2' p={1} color='primary' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti ipsum porro iste recusandae labore minima iusto voluptatibus vitae molestias? </Typography>

                            </Stack>
                            <CustomButton
                                Btn1={"Manual Entry"}
                                Btn2={"Bank-Linked"}
                                Btn1Icon={<EditNoteRoundedIcon />}
                                Btn2Icon={<AccountBalanceRoundedIcon sx={{ width: "30px", height: "20px" }} />}

                            />
                        </Box>

                        {/* {  Total Spending section } */}
                        <Box sx={{ borderBottom: "2px solid #8080804d", display: "flex", flexDirection: "column", gap: "10px" }} paddingY={2}  >

                            <Stack direction='row' justifyContent='space-between' >
                                <Typography variant='h2' textAlign='justify' color='primary'
                                    sx={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: "600" }} >
                                    Total Spending <InfoOutlinedIcon sx={{ color: "#61cc61", width: "18px" }} />
                                </Typography>
                                <Stack direction='row' justifyContent='space-evenly' gap={1} >
                                    <Typography variant='h6' textAlign='justify' color='primary'
                                        sx={{ display: "flex", alignItems: "center", }} >
                                        Hide Spending
                                    </Typography>
                                    <Box sx={{ display: "flex", alignItems: "center" }} onClick={() => setSpendOpen(!spendopen)} >
                                        {spendopen ? <KeyboardArrowUpRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
                                    </Box>
                                </Stack>
                            </Stack>
                            {spendopen && (
                                <Stack paddingX={2} gap={1} >
                                    <Grid item >
                                        <CustomInput
                                            placeholder={"2000"}
                                            color="primary"
                                            type={"Number"}
                                            iconStart={<AttachMoneyOutlinedIcon color='primary' />}
                                            sx={{ colors: " #000248de" }}
                                        />
                                    </Grid>
                                    <Stack direction='row' justifyContent="space-around" gap={1} >
                                        <Button fullWidth variant='outlined' sx={{ borderRadius: "5px", border: "2px solid #000248de", }} > clear All </Button>
                                        <Button fullWidth variant='outlined' sx={{ borderRadius: "5px", border: "2px solid #000248de" }} > Use Average </Button>
                                    </Stack>
                                    <Button variant='contained' fullWidth color='btncolor' sx={{ borderRadius: "5px" }}  > Update Result </Button>
                                </Stack>
                            )}
                        </Box>

                        {/* {Montly & yearly spend} */}
                        <Box>
                            {Filterdata.map(filterdata => (
                                <FilterSpending
                                    sx={filterdata.sx}
                                    SpendTitle={filterdata.SpendTitle}
                                    Iconopen={filterdata.Iconopen}
                                    SpendButton={filterdata.SpendButton}
                                    StartIcon={filterdata.StartIcon}
                                    iconUp={filterdata.iconUp}
                                    iconDown={filterdata.iconDown}

                                />
                            ))}
                            <Box paddingY={3} sx={{ borderBottom: "2px solid #8080804d" }} >
                                <Button variant='contained' fullWidth color='btncolor' sx={{ borderRadius: "5px" }} > ShowMore </Button>
                            </Box>
                        </Box>

                        {/* {Service With Reward Bonuses section} */}
                        <Box paddingY={2} sx={{ borderBottom: "2px solid #8080804d" }} >
                            <Stack gap={1} >
                                <Stack direction='row' justifyContent='space-between' alignItems='center'  >
                                    <Typography variant='Filter' color='primary' > Service With Reward Bonuses </Typography>
                                    <Stack direction='row' alignItems='center' justifyContent='center' >
                                        <Typography variant='body2' color='primary' sx={{ fontWeight: "600", cursor: "pointer" }} > Clear All</Typography>
                                        <Box sx={{ display: "flex", alignItems: "center" }} >
                                            <KeyboardArrowRightRoundedIcon color='primary' sx={{ width: "20px" }} />
                                        </Box>
                                    </Stack>

                                </Stack>
                                <Box>
                                    <Stack direction='row' p={1} bgcolor='#afffaa36' >

                                        <InfoOutlinedIcon sx={{ color: "#61cc61", width: "20px" }} />

                                        <Typography variant='Filter' p={1} color='primary' >Select all options which you're currently subscribed tp ( i.e account owner ).The corresponding card reward value will change depending on your selection </Typography>

                                    </Stack>
                                </Box>
                            </Stack>
                        </Box>

                        {/* {Bank Select option} */}
                        <Box>
                            {BankName.map(bank => (
                                <BankOption
                                    sx={bank.sx}
                                    BankName={bank.BankName}
                                    src={bank.src}
                                    defaultChecked={bank.defaultChecked}

                                />
                            ))}
                            <Box paddingBottom={2} sx={{ borderBottom: "2px solid #8080804d" }} >
                                <Button variant='contained' fullWidth color='btncolor' sx={{ borderRadius: "5px" }} onClick={() => setShowMore(!showMore)} > {!showMore ? "ShowMore" : "ShowLess"} </Button>
                            </Box>
                        </Box>

                        {/* {Credit Card Perferences section} */}
                        {showMore && (
                            <Box>
                                <Stack gap={1} paddingY={2} sx={{ borderBottom: "2px solid #8080804d" }} >
                                    <Typography variant='h2' color='primary' > Credit Card Perferences </Typography>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "9px" }} >
                                        <Typography variant='h3' color='primary' > Cash back or Points </Typography>
                                        <CustomButton
                                            Btn1={"Cash Back"}
                                            Btn2={"Points"}
                                            Btn3={"Both"}
                                        // Btn1={"MasterCard"}
                                        // Btn2={"VISA"}
                                        // Btn3={"Amex Canada"}
                                        />
                                    </Box>
                                </Stack>

                                <Stack gap={1} paddingY={2} sx={{ borderBottom: "2px solid #8080804d" }} >
                                    <Typography variant='h3' color='primary' > Annual Fees </Typography>
                                    <CustomButton
                                        Btn1={"Yes, if it's worth it "}
                                        Btn2={"No sees"}
                                    />
                                </Stack>

                                <Stack gap={1} paddingY={2} sx={{ borderBottom: "2px solid #8080804d" }} >
                                    <Typography variant='h3 ' color='primary' > Special Rebates </Typography>
                                    <CustomButton
                                        Btn1={"Cash Rebates "}
                                        Btn2={"All Cards"}
                                    />
                                </Stack>

                                {/* {Institutions section} */}
                                <Box>
                                    <Box >
                                        <Stack gap={1} paddingY={2}  >
                                            <Stack direction='row' justifyContent='space-between' alignItems='center'  >
                                                <Typography variant='h2' color='primary' > Institutions </Typography>
                                                <Stack direction='row' alignItems='center' justifyContent='center' >
                                                    <Typography variant='h6' color='primary' sx={{ fontWeight: "600", cursor: "pointer" }} > Clear All</Typography>
                                                    <Box sx={{ display: "flex", alignItems: "center" }} >
                                                        <KeyboardArrowRightRoundedIcon color='primary' sx={{ width: "20px" }} />
                                                    </Box>
                                                </Stack>

                                            </Stack>
                                        </Stack>

                                    </Box>

                                    <Box>

                                        <Stack direction='row' p={1} bgcolor='#afffaa36' >
                                            <InfoOutlinedIcon sx={{ color: "#61cc61", width: "20px" }} />
                                            <Typography variant='Filter' sx={{ padding: "5px" }} color='primary' > Select any institutions yo only see their cards.By defalut all Supported institutions are Shown,  </Typography>
                                        </Stack>
                                        <BankOption
                                            color={"primary"}
                                            sx={chack}
                                            BankName={"Primay Rogers,Fido or Shaw Servi..."}
                                            icon={<BusinessRoundedIcon />}
                                            defaultChecked={true}
                                        />
                                        <BankOption

                                            sx={chack}
                                            BankName={"Tangerine Saving Account"}
                                            icon={<SavingsRoundedIcon />}
                                            defaultChecked={true}
                                        />
                                        <BankOption
                                            sx={chack}
                                            BankName={"Amazone Prime"}
                                            icon={<LiveTvRoundedIcon />}
                                            defaultChecked={true}
                                        />

                                    </Box>

                                </Box>

                                {/* {Payment Network section}  */}
                                <Box>
                                    <Stack gap={2} paddingY={2} sx={{ borderBottom: "2px solid #8080804d" }} >
                                        <Typography variant='h2' color='primary' > Payment Network </Typography>
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: "9px" }} >
                                            <CustomButton
                                                Btn1={"MasterCard"}
                                                Btn2={"VISA"}
                                                Btn3={"Amex Canada"}
                                            />
                                        </Box>
                                        <Stack direction='row' p={1} bgcolor='#afffaa36' >

                                            <InfoOutlinedIcon sx={{ color: "#61cc61", width: "20px" }} />
                                            <Typography variant='Filter' p={1} color='primary' >Select any payment network to only see their cards.By default all available network are shown </Typography>

                                        </Stack>
                                    </Stack>
                                </Box>


                                {/* {Benefits & Insurance section }  */}
                                <Box>
                                    <Box>
                                        <Stack gap={2} paddingY={2} sx={{ borderBottom: "2px solid #8080804d" }} >
                                            <Stack direction='row' justifyContent='space-between' alignItems='center'  >
                                                <Typography variant='h2' color='primary' > Benefits & Insurance </Typography>
                                                <Stack direction='row' alignItems='center' justifyContent='center' >
                                                    <Typography variant='body2' color='primary' sx={{ fontWeight: "600", cursor: "pointer" }} > Clear All</Typography>
                                                    <Box sx={{ display: "flex", alignItems: "center" }} >
                                                        <KeyboardArrowRightRoundedIcon color='primary' sx={{ width: "20px" }} />
                                                    </Box>
                                                </Stack>

                                            </Stack>
                                            <Stack direction='row' p={1} bgcolor='#afffaa36' >
                                                <InfoOutlinedIcon sx={{ color: "#61cc61", width: "20px" }} />
                                                <Typography variant='Filter' p={1} color='primary' >Select all options that must be available on the cards. </Typography>
                                            </Stack>
                                        </Stack>
                                    </Box>

                                    <Box>
                                        <BankOption
                                            color={"primary"}
                                            Caption={"Selec any institutions to only see their cards.By default all supported institutions are shown. "}
                                            sx={chack}
                                            BankName={"No Foreugn Transaction Fees"}
                                            icon={<LanguageIcon />}
                                            defaultChecked={true}
                                        />
                                        <BankOption
                                            color={"primary"}
                                            sx={chack}
                                            BankName={"Mobile Insurance"}
                                            icon={<AdUnitsIcon />}
                                            defaultChecked={true}
                                        />
                                        <BankOption
                                            color={"primary"}
                                            Caption={"Emergeny health,flight delay baggage delay,etc."}
                                            sx={chack}
                                            BankName={"Travel Insurance"}
                                            icon={<BackpackIcon />}
                                            defaultChecked={true}

                                        />
                                        <Box sx={chack} paddingY={2}  >
                                            <BankOption
                                                color={"primary"}
                                                BankName={"AirPort Lounge Access"}
                                                Caption={"Select Total Visits needed"}

                                                icon={<BackpackIcon />}


                                            />
                                            <CustomButton
                                                Btn1={"4"}
                                                Btn2={"6"}
                                                Btn3={"10"}
                                                Btn4={"Unlimited"}

                                            />
                                        </Box>


                                        <BankOption
                                            color={"primary"}
                                            BankName={"Hotel Burglary Insurance"}
                                            Caption={"Theft of your items from hotel room"}
                                            sx={chack}
                                            icon={<ApartmentOutlinedIcon />}
                                        />
                                        <Box paddingY={3} sx={{ borderBottom: "2px solid #8080804d" }} >
                                            <Button variant='contained' fullWidth color='btncolor' sx={{ borderRadius: "3px" }} > ShowMore </Button>
                                        </Box>
                                    </Box>
                                </Box>

                                {/* {Credit & Income Info section }  */}

                                <Box>

                                    <Stack paddingY={2} sx={chack} gap={1} >
                                        <Stack gap={1} >
                                            <Typography variant='h2' color='primary' > Credit & Income Info  </Typography>
                                            <Typography variant='h3' color='primary' > Credit Score  </Typography>
                                        </Stack>
                                        <Box   >
                                            <CustomSelect
                                                size={"small"}
                                                options={CreditScore}
                                                value={value}
                                                onChange={handleChangeselect}
                                                name={'age'}
                                                labelKey={"label"}
                                                valueKey={"value"}

                                            />

                                        </Box>
                                    </Stack>

                                    <Stack paddingY={2} sx={chack} gap={1} >
                                        <Stack gap={1} >
                                            <Typography variant='h2' color='primary' > Personal Income  </Typography>

                                        </Stack>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }} >
                                            <Typography color='primary' > Personal </Typography>
                                            <CustomSelect
                                                size={"small"}
                                                options={Income}
                                                value={personalIncome}
                                                onChange={handleChangeselect2}
                                                name={'age'}
                                                labelKey={"label"}
                                                valueKey={"value"}

                                            />
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }} >
                                            <Typography color='primary' > House.. </Typography>
                                            <CustomSelect
                                                size={"small"}
                                                options={Housespend}
                                                value={houseIncome}
                                                onChange={handleChangeselect3}
                                                name={'age'}
                                                labelKey={"label"}
                                                valueKey={"value"}

                                            />
                                        </Box>
                                    </Stack>

                                </Box>

                                {/* {Apply & clear Filter section}  */}

                                <Box marginY={3} >
                                    <Stack gap={1}>
                                        <Button variant='contained' fullWidth color='btncolor' sx={{ borderRadius: "5px" }}  > Apply Filter</Button>
                                        <Button
                                            variant='outlined'
                                            fullWidth color='error'
                                            sx={{
                                                borderRadius: "5px",
                                                border: "2px solid  #f44336",
                                                fontSize: "16px",
                                                fontWeight: "bold"
                                            }}  >
                                            <DeleteOutlineRoundedIcon />  Clear All
                                        </Button>
                                    </Stack>
                                    <Stack gap={1} marginY={1} p={1} >
                                        <Typography variant='h6' color='primary' > Disclaimer. This WebSite is for informational purposes only. All views are ours, and may not be the best fit for you. Consult a profession before mmarket financial descision.we are not liable for any inaccuracies  </Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        )}
                    </Box>

                </Stack >
            </Box>
            {/* </Grid> */}
        </>
    )
}

export default MobileFilter;
