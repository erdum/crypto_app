import React from "react";
import { useNavState } from "./navState";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faExchangeAlt,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
    backgroundColor: theme.palette.common.white,
    boxShadow:
      "0px -3px 1px -2px rgba(0,0,0,0.2),0px -2px 2px 0px rgba(0,0,0,0.14),0px -1px 5px 0px rgba(0,0,0,0.12)",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menuAction: {
    "&.Mui-selected": {
      color: theme.palette.grey[900],
    },
  },
  icons: {
    fontSize: "1.1rem",
  },
}));

export default function BotMenu() {
  const classes = useStyles();

  const router = useRouter();

  const [value, setValue] = useNavState();

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
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.menuAction}
        label="Rates"
        value="/rates"
        icon={<FontAwesomeIcon className={classes.icons} icon={faChartLine} />}
      />
      <BottomNavigationAction
        className={classes.menuAction}
        label="Buy & Sell"
        value="/buyandsell"
        icon={
          <FontAwesomeIcon className={classes.icons} icon={faExchangeAlt} />
        }
      />
      <BottomNavigationAction
        className={classes.menuAction}
        label="Wallet"
        value="/wallet"
        icon={<FontAwesomeIcon className={classes.icons} icon={faWallet} />}
      />
    </BottomNavigation>
  );
}
