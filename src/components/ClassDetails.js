import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import decode from "jwt-decode";
import { bookClass } from "../store/actions/classActions";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";

import bookedClasses from "../bookedClasses";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 600
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function ClassDetail() {
  const classes = useStyles();

  const dispatch= useDispatch();

  const { classSlug } = useParams();
  const foundClass = useSelector((state) =>
    state.classReducer.classes.find((gymclass) => gymclass.slug === classSlug)
  );
  const user = decode(localStorage.getItem("myToken"));

  const booking = {
      id: foundClass.id,
      users: [user.id],
  };

  const handleBook = () => {
    dispatch(bookClass(booking));
  };

  const updatedClasses = useSelector(state => state.classReducer.classes);
  console.log("New class State", updatedClasses);

  return (
    <Paper className={classes.mainFeaturedPost}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src="https://source.unsplash.com/random" alt="" />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                <Box fontWeight="fontWeightBold">
                    {foundClass.name}
                </Box>
            </Typography>
            <br/><br/><br/><br/><br/>
            <Typography variant="h5" color="inherit" paragraph>
              Date: {foundClass.date}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Time: {foundClass.time}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Price: {foundClass.price} BD
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Available Seats: {foundClass.availableSeats}
            </Typography>
            {!user.admin &&
            <Button variant="contained" color="primary" onClick={handleBook}>
                Book
            </Button>
            }
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
