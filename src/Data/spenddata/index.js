import RedeemRoundedIcon from "@mui/icons-material/RedeemRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';

const spend = [
  {
    id: 1,
    icon: <RedeemRoundedIcon sx={{ color:"#90ee90" ,width:"25px", height:"22px" }} />,
    Title: "First Year Value",
    value: "$1,175.82",
    Seebrakedown: "See brakedown",
    Arrow: <KeyboardArrowDownRoundedIcon sx={{ color:"#90ee90" ,width:"20px", height:"20px" }} />,
  },
  {
    id: 2,
    icon:  <StarRateRoundedIcon sx={{ color:"#90ee90" ,width:"25px", height:"22px" }} />,
    Title: "Our Rating",
    value: "9.5/10",
  },
  {
    id: 3,
    icon:<AccountBalanceWalletRoundedIcon sx={{ color:"#90ee90" ,width:"25px", height:"22px" }} />,
    Title: "N/A",
    value: "$1,175.82",
  },
  {
    id: 4,
    icon: <AutoGraphRoundedIcon sx={{ color:"#90ee90" ,width:"25px", height:"22px" }} />,
    Title: "Credit Score",
    value: "Excellent",
  },
  {
    id: 5,
    icon: <CardGiftcardRoundedIcon sx={{ color:"#90ee90" ,width:"25px", height:"22px" }} />,
    Title: "Wlcome Bonus",
    value: "$315",
    points:"Up to 15000 points",
  },
  {
    id: 6,
    icon: <CreditCardRoundedIcon sx={{ color:"#90ee90" ,width:"25px", height:"22px" }} />,
    Title: "Card Type",
    value: "Points",
  },
  {
    id: 7,
    icon: <MonetizationOnRoundedIcon sx={{ color:"#90ee90" ,width:"25px", height:"22px" }} />,
    Title: "Annual Fee",
    value: "$155.8",
  },
  {
    id: 8,
    icon: <SignalCellularAltRoundedIcon sx={{ color:"#90ee90" ,width:"25px", height:"22px" }} />,
    Title: "Card Network",
    value: "Amex Canada",
  },
];

export default spend;
