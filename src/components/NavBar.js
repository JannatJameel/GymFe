import { useSelector } from "react-redux";
// Styling
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
}));


const NavBar = () => {
    const classes = useStyles();

    const user = useSelector((state) => state.userReducer.user);

    return (
        <>
        <CssBaseline />
        <AppBar position="sticky" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                Company name
            </Typography>
            <nav>
                {/* <Link to="/gyms"> */}
                  <Link variant="button" color="textPrimary" to="/gyms" className={classes.link}>
                  Gyms
                  </Link>
                {/* </Link> */}
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Enterprise
                </Link>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Support
                </Link>
            </nav>
            {!user &&
            <Button href="/signin" color="primary" variant="outlined" className={classes.link}>
                Sign In
            </Button>
            } { user &&
            <Button href="/signin" color="primary" variant="outlined" className={classes.link}>
                Sign Out
            </Button>
            }
            </Toolbar>
        </AppBar>
      </>
    );
};

export default NavBar;