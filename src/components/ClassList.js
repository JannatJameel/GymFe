import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchClasses } from "../store/actions/classActions";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Button from "@material-ui/core/Button";
// Styling
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
// Components
import ClassButton from "./ClassButton";
import ClassCard from "./ClassCard";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function ClassList({ gymClasses }) {
  const classes = useStyles();

  const [query, setQuery] = useState("");
  const [free, setFree] = useState(false);

  const toggleFree = () => setFree(free === true ? false : true);

  const { gymSlug } = useParams();
  const foundgym = useSelector((state) =>
    state.gymReducer.gyms.find((gym) => gym.slug === gymSlug)
  );

  const filteredClasses = gymClasses
    .filter((gymClass) => gymClass.gymId === foundgym.id)
    .filter(
      (gClass) =>
        gClass.name.toLowerCase().includes(query.toLowerCase()) ||
        gClass.date.includes(query)
    );

  const freeClasses = gymClasses.filter((gymClass) => gymClass.price === 0);
  const admin = useSelector((state) => state.userReducer.admin);
  console.log("freeClasses", freeClasses);
  if (!foundgym) return <p>Hellooo</p>;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}

        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              CLASSES
            </Typography>
            {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography> */}
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>{admin && <ClassButton gymId={foundgym.id} />}</Grid>
                {/* <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid> */}
                <br />
              </Grid>
            </div>
            <div className={classes.heroButtons} align="center">
              <SearchBar setQuery={setQuery} />
              <Button variant="contained" onClick={toggleFree}>
                Free
              </Button>
            </div>
          </Container>
        </div>
        {/* <Box
          display="ab"
          justifyContent="center"
          m={1}
          p={1}
          bgcolor="background.paper"
          maxWidth="300px"
        > */}

        {/* </Box> */}

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          {!free ? (
            <Grid container spacing={4}>
              {filteredClasses.map((gymClass) => (
                <ClassCard gymClass={gymClass} key={gymClass.id} />
              ))}
            </Grid>
          ) : (
            <Grid container spacing={4}>
              {freeClasses.map((gymClass) => (
                <ClassCard gymClass={gymClass} key={gymClass.id} />
              ))}
            </Grid>
          )}
        </Container>
      </main>
    </React.Fragment>
  );
}
