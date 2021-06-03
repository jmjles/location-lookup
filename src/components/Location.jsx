import React from "react";
import {
  Container,
  Typography as Font,
  Button,
  Input,
  Grid,
  CircularProgress,
  Paper,
} from "@material-ui/core";
import ArticleList from "./ArticleList";
import Weather from "./Weather";
import moment from "moment";
const Location = ({
  locate,
  area: [area, setArea],
  time,
  weather,
  news,
  loading,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    locate();
    setArea("");
  };
  const handleChange = ({ target: { value } }) => setArea(value);
  return (
    <Container component="article" className="LocationRoot" maxWidth="md">
      {loading ? (
        <>
          <Font variant="h4" component="h1" align="center">
            Location Lookup
          </Font>
          <CircularProgress size={50} className="Loading" />
        </>
      ) : (
        <>
          <Paper square className="Header">
            <Font variant="h4" component="h1" align="center">
              Location Lookup
            </Font>
            <form
              onSubmit={(e) => handleSubmit(e)}
              style={{ textAlign: "center" }}
            >
              <Input
                placeholder="Enter A Place"
                id="Search"
                value={area}
                onChange={handleChange}
              />
              <Button
                id="SearchButton"
                type="submit"
                variant="contained"
                color="primary"
              >
                <Font variant="button">Search</Font>
              </Button>
            </form>

            <br />
            <Font variant="h4" component="h2" id="place">
              {weather.name}
            </Font>
            <Grid container justify="space-around" alignContent="center">
              <Grid item>
                <Font
                  variant="caption"
                  style={{ display: time ? "block" : "none" }}
                >
                  Local Time: {moment(time,"HH:mm:ss").format("h:mm a")}
                </Font>
              </Grid>
              <Grid item>
                <Weather weather={weather} style={weather ? "block" : "none"} />
              </Grid>
            </Grid>
          </Paper>

          <div id="map"></div>
          <Grid container spacing={5} justify="space-around" direction="column">
            <ArticleList news={news} />
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Location;
