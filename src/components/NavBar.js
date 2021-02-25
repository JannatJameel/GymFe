import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// Styling
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
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
  const admin = useSelector((state) => state.userReducer.admin);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignout = () => {
    dispatch(signout());
    history.push("/");
  };

  const checkActive = () => {
    if (user || admin) {
      return true;
    }
  };
  const active = checkActive();

  return (
    <>
      <CssBaseline />
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box fontWeight="fontWeightBold">STAY ACTIVE</Box>
            </Link>
          </Typography>
          <nav>
            {/* <Link to="/gyms"> */}
            <Link
              variant="button"
              color="textPrimary"
              to="/gyms"
              className={classes.link}
              style={{ textDecoration: "none" }}
            >
              Gyms
            </Link>
            {/* </Link> */}
            <Link
              variant="button"
              color="textPrimary"
              to="/my-classes"
              className={classes.link}
              style={{ textDecoration: "none" }}
            >
              My Classes
            </Link>
          </nav>
          {!active && (
            <Button
              href="/signin"
              color="primary"
              variant="outlined"
              className={classes.link}
            >
              Sign In
            </Button>
          )}
          {active && (
            <Button
              href="/signin"
              color="primary"
              variant="outlined"
              className={classes.link}
              onClick={handleSignout}
            >
              Sign Out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
