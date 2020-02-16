import React from "react";
import Article from "./Article";
import { Grid } from "@material-ui/core";
export default ({ news }) => {
  return (
    <Grid item xs={12}>
        {news.map(news => (
          <Article news={news} key={news.title} />
        ))}
    </Grid>
  );
};
