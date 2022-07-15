// Node Modules Files
import React, { useState } from "react";
import { Grid, InputAdornment, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// Local Files
import Beer from "./Beer/Beer.js";
import useStyles from "./styles";
// CSS
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Beers = ({ beers }) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className={classes.content} >
      <div className={classes.toolbar} />

      <div className={classes.searchs}>
        <Input
          className={classes.searchb}
          type="text"
          placeholder="Search Beer ..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>

      <Grid className={classes.content} container justifyContent="center" spacing={5}>
        {beers
          ?.filter((beer) => {
            if (searchTerm === "") {
              return beer;
            } else if (
              beer.name
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return beer;
            }
          })
          .map((beer) => (
            <Grid item key={beer.id} xs={12} sm={6} md={4} lg={3} id="pro">
              <Beer beer={beer} />
            </Grid>
          ))}
      </Grid>
    </main>
  );
};

export default Beers;
