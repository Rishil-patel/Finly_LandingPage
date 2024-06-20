import React, { useState } from 'react'
import { Grid, Typography, Stack } from '@mui/material'
import { OutlinedInput, InputAdornment, Button } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import { FormLabel } from '@mui/material'
import Select from '@mui/material/Select';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { LinearProgress } from '@mui/material';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useMediaQuery } from '@mui/material';

import Calculator from "../../../Assetes/Svg/Frame.svg"
import CustomCard from "../../Common/CustomCard"
import CardData from '../../../Data/CardData';
import CardRewards from '../../Common/CardReward';



const Page = ({ useDarkTheme }) => {


  const [age, setAge] = useState('');
  const [showTable, setShowTable] = useState(false);

  const isMobile = useMediaQuery('(max-width:768px)');


  const showtlb = () => {

    if (!showTable) {
      setShowTable(true);

    } else {
      setShowTable(false);
    }

  }

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const green = {
    backgroundColor: "#5ff35f",
    width: "35px",
    height: "10px",
    borderRadius: "30px",
    margin: "5px"
  }

  const grayblue = {
    backgroundColor: "#202236c9",
    width: "35px",
    height: "10px",
    borderRadius: "30px",
    margin: "5px"
  }



  const style = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    height: "27px"

  }

  const span = {
    backgroundColor: "#000248de",
    color: "white",
    width: "55px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "22px",
    borderRadius: "25px",
    marginTop: "3px"

  }

  const arrow = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",

  }

  function createData(name, Points, Multiplier, Total) {
    return { name, Points, Multiplier, Total };
  }



  const rows = [
    createData('Amex Menbership Rewards', "30,000", "x0.02", "$ 600"),
    createData('RBC Avion Rewards ', "30,000", "x0.01", "$ 300"),
  ];

  const rows2 = [
    createData('Amex Menbership Rewards', "30,000", "x0.02", "$ 600"),

  ];

  return (
    <>
      {/* { Section1  } */}
      <Grid container >
        <Grid Item container spacing={2} p={5} sx={{ justifyContent: "center" }} >
          <Stack direction={isMobile ? 'column' : 'row'} sx={{ justifyContent: "center" }} >

            <Stack gap={2} width={isMobile ? "100%" : "50%"} sx={{ padding: "0 15px" }} borderRight={isMobile ? "none" : "2px solid #8080803b"} >

              <Stack gap={2}>
                <Typography variant='h1'   >
                  Point Calculator
                </Typography>
                <Typography variant='h3' color="secondary"  >
                  Tired of guessing what your loyalty program Points are worths? Finly's Points
                  Calculator is here to help you unlock the true  potential of your rewards!
                </Typography>
              </Stack>

              <Stack item gap={1}  >

                <Stack direction="column">
                  <FormLabel color='primary' sx={{ color: useDarkTheme ? "white" :"#000248de" }}>Number of Points </FormLabel>
                  <OutlinedInput
                    size={isMobile ? "small" : "medium"}
                    type='number'

                    endAdornment={<InputAdornment position='end' sx={{ '& .css-16fqdq2-MuiTypography-root': { fontSize: isMobile ? "13px" : "18px" } }}  >Points</InputAdornment>}
                  />
                </Stack>

                <Stack >

                  <FormLabel color='error' sx={{ color: useDarkTheme ? "white" :"#000248de" }} >Program Selection </FormLabel>
                  <Select
                    size={isMobile ? "small" : "medium"}
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}

                  >
                    <MenuItem value={10}  >Amex Menbership Rewards (0.02/points) </MenuItem>
                    <MenuItem value={21}>RBC Avion Rewards(0.015/points)</MenuItem>
                  </Select>

                </Stack>
              </Stack>
              <Button variant='contained' color='btncolor' sx={{ width: '150px' }} > Calculate </Button>
            </Stack>

            {/* { Section2  } */}

            <Grid p={{ md: 2, xs: 0 }} marginTop={1} width={isMobile ? "100%" : "50%"} >
              <Stack style={{ borderBottom: "2px solid #8080801c" }} >
                <Typography variant='h1' > Points Redemption Chart  </Typography>
                <Grid m={2} >
                  <div style={style} >
                    <div style={green} ></div>
                    <Typography variant='h3' > Amex Menbership Rewards  </Typography>
                  </div>
                  <div style={style}>
                    <div style={grayblue} ></div>
                    <Typography variant='h3' > RBC Avion Rewards  </Typography>
                  </div>
                </Grid>
              </Stack>

              <Grid style={{ borderBottom: "2px solid #8080801c" }} p={1}>
                <Stack paddingY={2} direction='row' justifyContent="space-between" alignItems="center" >
                  <Typography variant='h6' >  Transfer to Airline  Partners  </Typography>
                  <Typography variant='subtitle1' sx={arrow} onClick={showtlb} >Show Less{!showTable ? <KeyboardArrowDownRoundedIcon /> : <KeyboardArrowUpRoundedIcon />} </Typography>
                </Stack>
                <Stack direction="row" gap={1} >
                  <LinearProgress variant="determinate" value={100} color='lightgreen' sx={{
                    width: "50%", height: "25px", borderRadius: "5px 5px 5px 0px"
                  }} />
                  <Typography variant='h2' sx={span} >$600</Typography>
                </Stack>
                <Stack direction="row" gap={1} >
                  <LinearProgress variant="determinate" value={100} color='grayblue' sx={{ width: "30%", height: "25px", borderRadius: "0px 0px 5px 5px" }} />
                  <Typography variant='h2' sx={span} >$300</Typography>
                </Stack>
                {showTable && (
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableCell ></TableCell>
                        <TableCell align="right">Points</TableCell>
                        <TableCell align="right">Multiplier</TableCell>
                        <TableCell align="right">Total</TableCell>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                          >
                            <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
                              {row.name}
                            </TableCell>
                            <TableCell align="right" sx={{ borderBottom: "none" }}>{row.Points}</TableCell>
                            <TableCell align="right" sx={{ borderBottom: "none" }}>{row.Multiplier}</TableCell>
                            <TableCell align="right" sx={{ borderBottom: "none", '&.MuiTableCell-root': { padding: "1px" } }}>{row.Total}</TableCell>

                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}

              </Grid >

              <Grid style={{ borderBottom: "2px solid #8080801c" }} p={1} >
                <Stack paddingY={2} direction='row' justifyContent="space-between" alignItems="center" >
                  <Typography variant='h6' >  Transfer to Hotel  Partners  </Typography>
                  <Typography variant='subtitle1' sx={arrow} onClick={showtlb} >  Show Less {!showTable ? <KeyboardArrowDownRoundedIcon /> : <KeyboardArrowUpRoundedIcon />} </Typography>
                </Stack>
                <Stack direction="row" gap={1} >
                  <LinearProgress variant="determinate" value={100} color='lightgreen' sx={{
                    width: "50%", height: "25px", borderRadius: "5px 5px 5px 5px"
                  }} />
                  <Typography variant='h2' sx={span} >$400</Typography>
                </Stack>
                {showTable && (
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableCell ></TableCell>
                        <TableCell align="right">Points</TableCell>
                        <TableCell align="right">Multiplier</TableCell>
                        <TableCell align="right">Total</TableCell>
                      </TableHead>
                      <TableBody>
                        {rows2.map((row) => (
                          <TableRow
                            key={row.name}
                          >
                            <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
                              {row.name}
                            </TableCell>
                            <TableCell align="right" sx={{ borderBottom: "none" }}>{row.Points}</TableCell>
                            <TableCell align="right" sx={{ borderBottom: "none" }}>{row.Multiplier}</TableCell>
                            <TableCell align="right" sx={{ borderBottom: "none", '&.MuiTableCell-root': { padding: "1px" } }}>{row.Total}</TableCell>

                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </Grid >

              <Grid style={{ borderBottom: "2px solid #8080801c" }} p={1}>
                <Stack paddingY={2} direction='row' justifyContent="space-between" alignItems="center" >
                  <Typography variant='h6' >  Fixed Point Travel Program  </Typography>
                  <Typography variant='subtitle1' sx={arrow} onClick={showtlb} >  Show Less {!showTable ? <KeyboardArrowDownRoundedIcon /> : <KeyboardArrowUpRoundedIcon />} </Typography>
                </Stack>
                <Stack direction="row" gap={1} >
                  <LinearProgress variant="determinate" value={100} color='lightgreen' sx={{
                    width: "30%", height: "25px", borderRadius: "5px 5px 0px 0px"
                  }} />
                  <Typography variant='h2' sx={span} >$300</Typography>
                </Stack>
                <Stack direction="row" gap={1} >
                  <LinearProgress variant="determinate" value={100} color='grayblue' sx={{ width: "30%", height: "25px", borderRadius: "0px 0px 5px 5px" }} />
                  <Typography variant='h2' sx={span} >$300</Typography>
                </Stack>
                {showTable && (
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableCell ></TableCell>
                        <TableCell align="right">Points</TableCell>
                        <TableCell align="right">Multiplier</TableCell>
                        <TableCell align="right">Total</TableCell>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                          >
                            <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
                              {row.name}
                            </TableCell>
                            <TableCell align="right" sx={{ borderBottom: "none" }}>{row.Points}</TableCell>
                            <TableCell align="right" sx={{ borderBottom: "none" }}>{row.Multiplier}</TableCell>
                            <TableCell align="right" sx={{ borderBottom: "none", '&.MuiTableCell-root': { padding: "1px" } }}>{row.Total}</TableCell>

                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}

              </Grid >

              <Grid style={{ borderBottom: "2px solid #8080801c" }} p={1}>
                <Stack paddingY={2} direction='row' justifyContent="space-between" alignItems="center" >
                  <Typography variant='h6' >  Transfer to Hotel  Partners </Typography>
                  <Typography variant='subtitle1' sx={arrow} onClick={showtlb} >  Show Less {!showTable ? <KeyboardArrowDownRoundedIcon /> : <KeyboardArrowUpRoundedIcon />} </Typography>
                </Stack>
                <Stack direction="row" gap={1} >
                  <LinearProgress variant="determinate" value={100} color='lightgreen' sx={{
                    width: "40%", height: "25px", borderRadius: "5px 5px 0px 0px"
                  }} />
                  <Typography variant='h2' sx={span} >$500</Typography>
                </Stack>
                <Stack direction="row" gap={1} >
                  <LinearProgress variant="determinate" value={100} color='grayblue' sx={{ width: "55%", height: "25px", borderRadius: "0px 5px 5px 5px" }} />
                  <Typography variant='h2' sx={span}>$600</Typography>
                </Stack>
                {showTable && (
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableCell ></TableCell>
                        <TableCell align="right">Points</TableCell>
                        <TableCell align="right">Multiplier</TableCell>
                        <TableCell align="right">Total</TableCell>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                          >
                            <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
                              {row.name}
                            </TableCell>
                            <TableCell align="right" sx={{ borderBottom: "none" }}>{row.Points}</TableCell>
                            <TableCell align="right" sx={{ borderBottom: "none" }}>{row.Multiplier}</TableCell>
                            <TableCell align="right" sx={{ borderBottom: "none", '&.MuiTableCell-root': { padding: "1px" } }}>{row.Total}</TableCell>

                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}

              </Grid >

              <Grid style={{ borderBottom: "2px solid #8080801c" }} p={1}>
                <Stack paddingY={2} direction='row' justifyContent="space-between" alignItems="center" >
                  <Typography variant='h6' >  Transfer to Hotel  Partners </Typography>
                  <Typography variant='subtitle1' sx={arrow} onClick={showtlb} >  Show Less {!showTable ? <KeyboardArrowDownRoundedIcon /> : <KeyboardArrowUpRoundedIcon />} </Typography>
                </Stack>
                <Stack direction="row" gap={1} >
                  <LinearProgress variant="determinate" value={100} color='lightgreen' sx={{
                    width: "55%", height: "25px", borderRadius: "5px 5px 0px 0px"
                  }} />
                  <Typography variant='h2' sx={span} >$600</Typography>
                </Stack>
                <Stack direction="row" gap={1} >
                  <LinearProgress variant="determinate" value={100} color='grayblue' sx={{ width: "40%", height: "25px", borderRadius: "0px 5px 5px 5px" }} />
                  <Typography variant='h2' sx={span} >$300</Typography>
                </Stack>
                {showTable && (
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableCell ></TableCell>
                        <TableCell align="right">Points</TableCell>
                        <TableCell align="right">Multiplier</TableCell>
                        <TableCell align="right">Total</TableCell>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                          >
                            <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
                              {row.name}
                            </TableCell>
                            <TableCell align="right" sx={{ borderBottom: "none" }}>{row.Points}</TableCell>
                            <TableCell align="right" sx={{ borderBottom: "none" }}>{row.Multiplier}</TableCell>
                            <TableCell align="right" sx={{ borderBottom: "none", '&.MuiTableCell-root': { padding: "1px" } }}>{row.Total}</TableCell>

                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}

              </Grid >

              <Grid p={1} >
                <Button variant='contained' color='btncolor' fullWidth  > Show More </Button>
              </Grid>

            </Grid>
          </Stack >
        </Grid>

        {/* { Section3  } */}

        <Grid sx={{ backgroundColor: "#b8deb659", height: "auto", width: "100%" }} p={5} color="primary" >
          <Stack direction={isMobile ? "column" : "row"} paddingX={isMobile ? 0 : 5} gap={isMobile ? 1 : 0} >

            <Stack justifyContent="center" gap={2} >
              <Typography variant='h1' > How it Works ?  </Typography>
              <Typography variant='body1'  > Effortlessly estimate the value of your loyalty program points </Typography>
              <Typography color="secondary" variant='subtitle2'   > Finly's Points Calculator takes the guessworks out of points valutions. Here how it works: simply select your Progream from our comprehensive list, enter your points balance, and watch the estimated redemption value appear! This empowers you to make informed decisions about redeeming your poinst for maximum value. </Typography>
            </Stack>

            <Stack alignItems="center">
              <img src={Calculator} alt="Calculator" width={isMobile ? "100%" : "auto"} />
            </Stack>

          </Stack>
        </Grid>
        {/* { Section4  } */}
        <Grid sx={{ width: "100%" }}  >
          <Stack alignItems="center" justifyContent="space-between" padding={2} direction="row" >
            <Typography variant='h4' > Related Blogs </Typography>
            <Button variant='outlined' sx={{ display: isMobile ? "none" : "block" }} > Show more </Button>
          </Stack>

          <Stack direction={isMobile ? "column" : "row"} gap={2} justifyContent="center" alignItems="center" p={2}  >
            {CardData.map(data => (
              <CardRewards
                src={data.src}
                image={data.image}
                text={data.text}
                PersonName={data.PersonName}
                Time={data.Time}
                BatchText={data.BatchText}
                BatchIcon={data.BatchIcon}
              />
            ))}

          </Stack>
          <Stack alignItems="center" gap={2} p={5} >
            <Button variant='outlined' sx={{ display: isMobile ? "block" : "none" }} > Show more </Button>
          </Stack>

        </Grid>





      </Grid >

    </>
  )
}

export default Page