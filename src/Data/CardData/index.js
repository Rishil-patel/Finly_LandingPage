
import card1 from "../../Assetes/images/card3.jpg"
import avater from "../../Assetes/images/avater.png"
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import DiscountRoundedIcon from '@mui/icons-material/DiscountRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';


const CardData = [


    {
        image:card1,
        src:avater,
        BatchText:"Finaly Reviews",
        PersonName:"Khashayar Shahnazari ",
        Time:" - 8 min read",
        BatchIcon:<StarRateRoundedIcon  sx={{ color:"white", height:"20px" }} />,
        text:"Best Credit Crad for Recurring  Transcation and Reward's"

    },
    {
        image:card1,
        src:avater,
        BatchText:"Rebates & Rewards",
        PersonName:"Khashayar ",
        Time:" - 6 min read",
        text:"Stop Wasting Money! Find the Perfect card for recurring change  ",
        BatchIcon:<DiscountRoundedIcon  sx={{ color:"white", height:"15px" }} />,

    },
    {
        image:card1,
        src:avater,
        BatchText:"Credit card",
        PersonName:"Shahnazari ",
        Time:" - 4 min read",
        text:"Effordless Rewards, Every Months  ",
        BatchIcon:<CreditCardRoundedIcon  sx={{ color:"white", height:"20px" }} />,

    },



]

export default CardData