import React, { useState } from 'react';
import { CardMedia, Typography, Stack, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// import { useMediaQuery } from '@mui/material';


const CustomCard = (Props) => {

  const [showless, setShowless] = useState(false)


  const navigate = useNavigate()


  const showDetails = () => {

    if (!showless) {
      setShowless(true)

    } else {
      setShowless(false)
    }

  }
  const { BatchText, buttonText, sx, image, onClick, BatchIcon, buttonText2, TableDetali, AnnualText, AnnualPrice, AnnualText2, BonusText, BonusPrice, BonusText2, CreditText, CreditIcone, CreditScore, show, CreditNetwork, CreditTitle, Fee, PurchaseRate, PurchaseNo, AnnualFee,
    isShowGrid, text, useDarkTheme,buttonOnClick1 } = Props

  const Blogs = (
    <Stack
      direction="row"
      alignItems="center"
      position="absolute"
      top={15}
      left={0}
      sx={{
        background: "#5ED557",
        padding: "1px 4px",
        borderRadius: " 0px 5px 5px 0px",
      }}
    >
      <Stack direction="row" alignItems="center" sx={{ color: "white" }} gap={1} >
        <Box display={'flex'} alignItems={'center'} >
          {BatchIcon}
        </Box>
        <Typography variant='h2' sx={{ color: "white", fontSize: 13 }}>
          {BatchText}
        </Typography>
      </Stack>

      {/* <Typography sx={{ fontWeight: "bold", fontSize: 14, }}>
      </Typography> */}
    </Stack>
  );

  // console.log("isShowGrid :", isShowGrid)

  return (
    <>
      <Stack width="100%" sx={{ position: "relative", alignItems: "center" }}>


        {Blogs}


        {/* <Grid container> */}
        <Stack sx={sx} p={1} width="100%"
          // bgcolor={'white'}
          boxShadow={"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)"}
          direction={!isShowGrid ? 'row' : "column"}
          gap={3}

          bgcolor={!useDarkTheme ? "white" : "#000248de"}
        >


          <Stack direction={'row'} justifyContent={'center'}  >
            {image && <CardMedia component="img" image={image} sx={{
              objectFit: "contain",
              height: "auto",
              width: "auto"
              // borderRadius: "12px"

            }} />}

          </Stack>
          <Stack justifyContent={"center"} width={"100%"} >
            <Typography gutterBottom variant="h4">
              {text}
            </Typography>

            {AnnualText && (
              <Stack gap={1}   >
                <Stack direction='row' gap={!isShowGrid ? 8 : 1} justifyContent={'space-between'} >

                  <Stack gap={1} >
                    <Typography variant='Annultext1' color={'primary'} > {AnnualText} </Typography>
                    <Typography variant='Annultext' color={'primary'} > {AnnualPrice} </Typography>
                    <Typography variant='Annultext' color={'primary'} > {AnnualText2} </Typography>
                  </Stack>

                  <Stack gap={1}  >
                    <Typography variant='Annultext1' color={'primary'} > {BonusText} </Typography>
                    <Typography variant='Annultext' color={'primary'} > {BonusPrice} </Typography>
                    <Typography variant='Annultext' color={'primary'} > {BonusText2} </Typography>
                  </Stack>

                  <Stack gap={1} >
                    <Typography variant='Annultext1' color={'primary'}> {CreditText} </Typography>
                    <Typography variant='Annultext' color={'primary'} sx={{ display: "flex", alignItems: "center" }} > {CreditIcone} {CreditScore} </Typography>
                  </Stack>
                </Stack>

                {show && (<Typography variant='Show' onClick={showDetails} sx={{ padding: "2px" }} > {!showless ? "ShowMore" : "ShowLess"} </Typography>)}

                {showless && (
                  <Stack direction='row' gap={1} justifyContent={'space-between'} >

                    <Stack gap={1} >
                      <Typography variant='Annultext1' color={'primary'} > {CreditNetwork} </Typography>
                      <Typography variant='Annultext' color={'primary'}> {CreditTitle} </Typography>
                    </Stack>

                    <Stack gap={1} >
                      <Typography variant='Annultext1' color={'primary'} > {AnnualFee} </Typography>
                      <Typography variant='Annultext' color={'primary'}> {Fee} </Typography>
                    </Stack>

                    <Stack gap={1} >
                      <Typography variant='Annultext1' color={'primary'} > {PurchaseRate} </Typography>
                      <Typography variant='Annultext' color={'primary'} >  {PurchaseNo} </Typography>
                    </Stack>
                  </Stack>
                )}
              </Stack>
            )}

            {buttonText && (
              <Stack direction='row' gap={1} paddingY={1} justifyContent={'center'} >
                <Button onClick={buttonOnClick1} variant="contained" color='primary' fullWidth
                  sx={{
                    color:!useDarkTheme ?"white" :" #000248de",
                    bgcolor:
                      !useDarkTheme ? "#000248de" : "#b8deb6",
                    "&:hover": {
                      bgcolor: !useDarkTheme ? "#000248de" : "#b8deb6", // Same as default color to disable hover effect
                    }
                  }}
                >
                  {buttonText}
                </Button>
                {buttonText2 && (
                  <Button onClick={onClick} variant="outlined" color='primary' fullWidth >
                    {buttonText2}
                  </Button>
                )}
              </Stack>
            )}
          </Stack>
        </Stack >
      </Stack >
    </>
  );
};

export default CustomCard;
