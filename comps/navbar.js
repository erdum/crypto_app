import React from "react";
import { useNavState } from "./navState";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tabs,
  Tab,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faChartLine,
  faExchangeAlt,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    top: "0",
    width: "100%",
    fontFamily: "'Quicksand', sans-serif",
  },
  appBar: {
    height: "100%",
    backgroundColor: "rgba(102, 100, 123, 0.25)",
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
    color: theme.palette.common.black,
    fontWeight: "800",
    marginLeft: theme.spacing(2),
  },
  btn: {
    backgroundColor: "#fec81e",
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: "1rem",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
    display: "flex",
    padding: "0.4rem 1rem",
    width: "6rem",
    display: "flex",
    justifyContent: "space-between",
    textTransform: "capitalize",
    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: "#6e6d84",
    },
    [theme.breakpoints.down("sm")]: {
      "&:hover": {
        color: theme.palette.grey[900],
        backgroundColor: theme.palette.common.white,
      },
    },
  },
  tabs: {
    "& .Mui-selected": {
      color: theme.palette.common.white,
    },
    color: "#404771",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    marginRight: "2rem",
  },
  tabIconLabel: {
    fontSize: "1rem",
    textTransform: "capitalize",
    "&:hover": {
      color: theme.palette.common.white,
    },
    transition: "color 0.2s ease-out",
    fontWeight: "600",
  },
  indicator: {
    backgroundColor: theme.palette.common.white,
    height: "0.3rem",
  },
}));

export default function Navbar() {
  const [btnShadow, setBtnShadow] = React.useState(
    "0 6px 6px rgba(0, 0, 0, 0.25)"
  );

  const classes = useStyles();

  const [value, setValue] = useNavState();

  const router = useRouter();

  const loginHandler = () => {
    setBtnShadow("none");
    setTimeout(() => {
      setBtnShadow("0 6px 6px rgba(0, 0, 0, 0.25)");
    }, 400);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (value != newValue) {
      router.push(newValue);
    }
  };

  React.useEffect(() => {
    if (value != router.pathname) {
      setValue(router.pathname);
    }
  });

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Crypto Exchange
          </Typography>
          <Tabs
            className={classes.tabs}
            classes={{ indicator: classes.indicator }}
            TabIndicatorProps={{ style: { display: "none" } }}
            value={value}
            onChange={handleChange}
            variant="standard"
            aria-label="icon label tabs example"
          >
            <Tab
              classes={{ labelIcon: classes.tabIconLabel }}
              icon={<FontAwesomeIcon icon={faChartLine} />}
              label="Rates"
              value="/rates"
            />
            <Tab
              classes={{ labelIcon: classes.tabIconLabel }}
              icon={<FontAwesomeIcon icon={faExchangeAlt} />}
              label="Buy & Sell"
              value="/buyandsell"
            />
            <Tab
              classes={{ labelIcon: classes.tabIconLabel }}
              icon={<FontAwesomeIcon icon={faWallet} />}
              label="Wallet"
              value="/wallet"
            />
          </Tabs>
          <Button
            onClick={loginHandler}
            style={{ boxShadow: btnShadow }}
            className={classes.btn}
          >
            <FontAwesomeIcon icon={faGoogle} />
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
