import React from "react";
import {
  Container,
  Typography as Font,
  Button,
  Input,
  Grid,
} from "@material-ui/core";
import ArticleList from './ArticleList'
import Weather from './Weather'
const Location = ({locate,area:[area,setArea],time,weather,news}) => {
  const handleSubmit = e => {
    e.preventDefault();
    locate()
    setArea('')
  };
  const handleChange = ({target:{value}}) => {
      setArea(value)
  }
  return (
    <Container component="article" className="LocationRoot">
      <Font variant="h1" align="center">
        Location Lookup
      </Font>
      <form onSubmit={e => handleSubmit(e)} style={{ textAlign: "center" }}>
        <Input
          placeholder="Enter A Place"
          id="Search"
          value={area}
          onChange={handleChange}
        />
        <Button
          id="SearchButton"
          type="submit"
          variant="outlined"
          color="primary"
        >
          <Font variant="button">Search</Font>
        </Button>
      </form>

      <br />

      <Font variant="h1" id="place"></Font>
      <Font variant="caption" style={{display:time?'block':'none'}}>Local Time: {time}</Font>
      <Weather weather={weather} style={weather?'block':'none'}/>
      <div id="map" style={{ height: "600px" }}></div>
      <Grid container spacing={5} justify="space-around">
        <ArticleList news={news}/>
      </Grid>
    </Container>
  );
};

export default Location;
