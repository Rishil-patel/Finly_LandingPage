import { createTheme } from "@mui/material";

const downTheme = createTheme()

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff', // Define your primary color
    },
    secondary: {
      main: '#ffffff', // Define your secondary color
    },
    // text3: {
    //   main: '#929292', // Define your secondary color
    // },
    error: {
      main: '#f44336', // Define your error color
    },
    warning: {
      main: '#ff9800', // Define your warning color
    },
    info: {
      main: '#B88DEB6', // Define your info color
    },
    success: {
      main: '#4caf50', // Define your success color
    },
    lightgreen: {
      main: "#5ff35f"
    },
    grayblue: {
      main: "#202236c9"
    },
    btncolor: {
      main: "#b8deb6"
    },
    btntext: {
      main: "#ffffff"
    },
    gray: {
      main: "#929292"
    },
    hite: {
      main: "#fffff"
    },

    bluegray: {
      main: "#000248de"
    },

    background: {
      default: '#07072e', // Define your default background color
    },

    stackbackground: {
      default: '#f44336', // Define your default background color
    }


  },

  typography: {
    h1: {
      fontSize: '3rem',
      [downTheme.breakpoints.down("md")]: {
        fontSize: '22px',
      }
    },
    h2: {
      fontSize: '18px',
      [downTheme.breakpoints.down("md")]: {
        fontSize: '14px',
      }
    },
    h4: {
      fontSize: '22px',
      fontWeight: '600'
    },
    h3: {
      fontSize: '16px',
      [downTheme.breakpoints.down("md")]: {
        fontSize: '13px',
      }
    },
    h5: {
      fontSize: '18px',
      [downTheme.breakpoints.down("md")]: {
        fontSize: '16px',
      }
    },
    h6: {
      fontSize: '15px',
      [downTheme.breakpoints.down("md")]: {
        fontSize: '13px',
      }
    },
    subtitle1: {
      color: "#90ee90",
      // borderBottom: "1px solid #90ee90",
      [downTheme.breakpoints.down("md")]: {
        fontSize: '12px',
      }
    },
    subtitle2: {
      fontSize: '16px',
      [downTheme.breakpoints.down("md")]: {
        fontSize: '14px',
      }
    },
    body1: {
      fontSize: "18px"
    },
    body2: {
      fontSize: "13px"
    },
    Annultext1: {
      fontSize: "13px"
    },
    Annultext: {
      fontSize: "13px"
    },
    Footertext: {
      fontSize: "30px",
      [downTheme.breakpoints.down("md")]: {
        fontSize: '22px',
      }
    },
    Headingtext: {
      fontSize: "50px",
      [downTheme.breakpoints.down("md")]: {
        fontSize: '33px',
      }
    },
    HeadingCaption: {
      fontSize: "14px",
      [downTheme.breakpoints.down("md")]: {
        fontSize: '16px',
      }
    },

    CardInfotext: {
      fontSize: "20px",

      [downTheme.breakpoints.down("md")]: {
        fontSize: '18px',
      }

    },
    CardInfoCaption: {
      fontSize: "16px",
      color: "lightgray",
      [downTheme.breakpoints.down("md")]: {
        fontSize: '14px',
      }

    },

    Show: {
      fontSize: "14px",
      color: "#90ee90",
      borderBottom: "1px solid #80808029",
      cursor: "pointer",

    },
    Filter: {
      fontSize: "16px",
    },

    rewards: {
      fontSize: "38px",
      [downTheme.breakpoints.down("md")]: {
        fontSize: '25px',
      }

    },

  },

  LinearProgress: {
    determinate: {
      color: "red"
    }

  },



  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#000248de', // Custom color for FormLabel
          [downTheme.breakpoints.down("md")]: {
            fontSize: '14px',
          }
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '12px',


        },
        contained: {
          color: "#000248de",
          fontSize: "16px",

          [downTheme.breakpoints.down("md")]: {
            fontSize: '14px',
          }

        },
        Circlebtn: {
          color: "#000248a3",
          fontSize: "14px",
          border: "1px solid lightgray",

          [downTheme.breakpoints.down("md")]: {
            fontSize: '12px',
          }

        },


        Cardbtn2: {
          colors: "#000248de",
          background: "transparent",
          width: "220px",
          border: "1px solid #000248de"
        },

      },
    },
  },

})


export default darkTheme;