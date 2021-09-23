import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(24)
  },
  heading: {
    color: '#3F4144',
    marginLeft: theme.spacing(5),
    fontWeight: 'bold'
  },
  btn: {
    backgroundColor: '#fec81e',
    color: theme.palette.common.white,
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(30),
    width: '19rem',
    height: '6rem',
    fontSize: '2rem',
    fontWeight: 'bold',
    borderRadius: '8px',
    transition: 'box-shadow 0.25s ease-in',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#6e6d84'
    }
  }
}));

export default function Index() {
  const [btnShadow, setBtnShadow] = React.useState('0 6px 6px rgba(0, 0, 0, 0.25)');
  const classes = useStyles();
  const clickHandler = (event) => {
    setBtnShadow('none');
    setTimeout(() => {
      setBtnShadow('0 6px 6px rgba(0, 0, 0, 0.25)');
    }, 400);
  }
  return(
    <div className={classes.root}>
        <Typography className={classes.heading} variant='h2'>
        Start Your Crypto Career <br />
        Today
        </Typography>
        <Button style={{ boxShadow: btnShadow }} onClick={clickHandler} className={classes.btn}>Register Now</Button>
    </div>
  );
}