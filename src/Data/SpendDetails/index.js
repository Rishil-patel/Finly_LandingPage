import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LightModeIcon from '@mui/icons-material/LightMode';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const spendDetails = [
  {
    NameIcone: (
      <CardGiftcardRoundedIcon
        sx={{ color: "#90ee90", width: "25px", height: "22px" }}
      />
    ),
    Name: "Net Annual Rewards Breakdown",
    // ToggleIconeOpen: <KeyboardArrowDownRoundedIcon />,
    // ToggleIconeClose: <KeyboardArrowUpRoundedIcon />,
    Spend: "Food, Drinks & Groceries",
    value: "48,410 Points",
    Spend1: "Amex eligible Streaming Subscriptions",
    value1: "1,440 Points",
    Spend2: "Rental Car & Taxi,Gas ",
    value2: "4,694 Points",
    Spend3: "All other Purchases",
    value3: "11,601 Points",
    Spend4: "Annual Fee",
    value4: "-$155.8",
    Spend5: "Net Annual Rewards",
    value5: "48,410 Points",
    fees5: "Value at $860.82 (after fees)",
  },
  {
    NameIcone: (
      <AccountBalanceWalletIcon
        sx={{ color: "#90ee90", width: "25px", height: "22px" }}
      />
    ),
    Name: "Poitential Earning",
    ToggleIconeOpen: <KeyboardArrowDownRoundedIcon />,
    ToggleIconeClose: <KeyboardArrowUpRoundedIcon />,
    Spend: "Net Annual Rewards",
    value: "48,410 Points",
    fees: "Value at $860.82 (after fees)",
    Spend1: "Welcome Bonus",
    value1: "15,000 Points",
    fees1: "Value at $315 ",
    Spend2: "First Year Value",
    value2: "63,410 Points",
    fees2: "Value at $1,175.82",
  },
  {
    NameIcone: (
      <LightModeIcon
        sx={{ color: "#90ee90", width: "25px", height: "22px" }}
      />
    ),
    Name: "Points Redemptions",
    ToggleIconeOpen: <KeyboardArrowDownRoundedIcon />,
    ToggleIconeClose: <KeyboardArrowUpRoundedIcon />,
    Spend: "Net Annual Rewards",
    value: "48,410 Points",
    fees: "Value at $860.82 (after fees)",
    Spend1: "Welcome Bonus",
    value1: "15,000 Points",
    fees1: "Value at $315 ",
    Spend2: "First Year Value",
    value2: "63,410 Points",
    fees2: "Value at $1,175.82",
  },
];

export default spendDetails;
