import React from 'react';
import { useMediaQuery, Paper } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useTheme } from '@mui/material/styles';
import LogoImage from './LogoImage';

import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '../home/shared-theme/AppTheme';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  sidebar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '5rem',
    width: '28%',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    boxShadow: '-2px 0px 16px rgba(0, 0, 0, 0.25)',

  },
  form: {
    maxWidth: '35rem',
    padding: '5rem',
    width: '100%',
  },
}));

const LoginLayout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
      <AppTheme>
        <CssBaseline enableColorScheme />
    <main className={classes.root}>
      <div className={classes.sidebar}>
        {!useMediaQuery(theme.breakpoints.down('lg')) && <LogoImage color={theme.palette.secondary.contrastText} />}
      </div>
      <Paper className={classes.paper}>
        <form className={classes.form}>
          {children}
        </form>
      </Paper>
    </main>
    </AppTheme>
  );
};

export default LoginLayout;
