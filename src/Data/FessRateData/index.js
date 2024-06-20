import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const FeesRateData = [
  {
    NameIcone: (
      <CardGiftcardRoundedIcon
        sx={{ color: "#90ee90", width: "25px", height: "22px" }}
      />
    ),
    Name: "Other Fees",
ToggleIconeOpen: <KeyboardArrowDownRoundedIcon />,
    ToggleIconeClose: <KeyboardArrowUpRoundedIcon />,
    Spend: "Foregin transaction fee",
    value: "2.5%",
    Spend1: "Late Payment fee",
    SpendDescription1: "It's important to make your minimum payment by the due to date to avaoid this fee",
    value1: " Up to $55",
    Spend2: "Returned payment fee",
    SpendDescription2: "This fee applies if your payment is returned due to insufficient funds in your account",
    value2: "$55",
  },
  {
    NameIcone: (
      <CardGiftcardRoundedIcon
        sx={{ color: "#90ee90", width: "25px", height: "22px" }}
      />
    ),
    Name: "Interest rates",
ToggleIconeOpen: <KeyboardArrowDownRoundedIcon />,
    ToggleIconeClose: <KeyboardArrowUpRoundedIcon />,
    Spend: "Interest Rate(Variable)",
    value: "2.5%",
    Spend1: "Late Payment fee",
    SpendDescription1: "This is the interest rate that will be change on your outstanding balance if you are carry a balance form month to month",
    value1: " 19.99%-25.99%",
    Spend2: "APR (Variable)",
    SpendDescription2: "The APR is the annual percanatge rate, which into account the intereat rate other fee associated with using the card. it's important to be award of the ARP to understand the true cost of borrowing money on your credit crad.",
    value2: "21.24%-27.99%",
  },
];

export default FeesRateData;
