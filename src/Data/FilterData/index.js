import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import ConnectingAirportsOutlinedIcon from '@mui/icons-material/ConnectingAirportsOutlined';
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const boxstyle = {
  borderBottom: "2px solid #8080804d",
};

const filter = [
  {
    sx: boxstyle,
    SpendTitle: "Restaurant, Fast Food & Coffee Shop",
    StartIcon: <RestaurantOutlinedIcon />,
    iconUp:<KeyboardArrowUpRoundedIcon />,
    iconDown:<KeyboardArrowDownRoundedIcon />

  },
  {
    sx: boxstyle,
    StartIcon: <VaccinesOutlinedIcon />,
    SpendTitle: "Pharmacy",
    SpendButton: "Hide Breakdown",
    iconUp:<KeyboardArrowUpRoundedIcon />,
    iconDown:<KeyboardArrowDownRoundedIcon />
  },
  {
    sx: boxstyle,
    SpendTitle: "Shoppers Drug Mart",
    iconUp:<KeyboardArrowUpRoundedIcon />,
    iconDown:<KeyboardArrowDownRoundedIcon />
  },
  {
    sx: boxstyle,
    SpendTitle: "Other Pharmacies",
    iconUp:<KeyboardArrowUpRoundedIcon />,
    iconDown:<KeyboardArrowDownRoundedIcon />
  },
  {
    sx: boxstyle,
    SpendTitle: "Gas",
    StartIcon: <LocalGasStationIcon />,
    iconUp:<KeyboardArrowUpRoundedIcon />,
    iconDown:<KeyboardArrowDownRoundedIcon />
  },
  {
    sx: boxstyle,
    SpendTitle: "TranSportation",
    StartIcon: <DirectionsCarFilledOutlinedIcon />,
    iconUp:<KeyboardArrowUpRoundedIcon />,
    iconDown:<KeyboardArrowDownRoundedIcon />
  },
  {
    sx: boxstyle,
    SpendTitle: "Grocery",
    StartIcon: <LocalGroceryStoreOutlinedIcon />,
    iconUp:<KeyboardArrowUpRoundedIcon />,
    iconDown:<KeyboardArrowDownRoundedIcon />
  },
  {
    sx: boxstyle,
    SpendTitle: "Travel (Flights,Hotels,etc.)",
    StartIcon: <ConnectingAirportsOutlinedIcon />,
    iconUp:<KeyboardArrowUpRoundedIcon />,
    iconDown:<KeyboardArrowDownRoundedIcon />
  },
];
export default filter;
