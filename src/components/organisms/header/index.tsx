import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Icon from "../../atoms/icon";
import SearchBar from "../../molecules/searchBar";
import Image from "../../atoms/image"

function Header() {
  var keyword = "";

  const handleChange = () => {
    keyword = "";
  };

  useEffect(
    () => {
      // axios call to get the whole data

      const search = () => {
        // filter data
      };
    },
    [
      /* filtered data on searched keyword */
    ]
  );

  const handleExploreClick = () => {
    // Expand Explore tab
  };

  const handleMyLibraryClick = () => {
    // navigate to my library
  };
  const handleHighlightsClick = () => {
    // navigate to highlights
  };
  const handleAccountClick = () => {
    // handle account click
  };
  return (
    <Grid container>
      <Grid item>
        <Image src={"appIconImage"}  onClick={() => console.log("")} />
      </Grid>
      <Grid item>
        <Icon src={""} />
        <SearchBar onChange={handleChange} />
      </Grid>
      <Grid item>
        <div style={{ display: "flex" }}>
          <Typography onClick={handleExploreClick}>Explore</Typography>
          <Icon src="" />
        </div>
      </Grid>
      <Grid item>
        <Typography onClick={handleMyLibraryClick}>MyLibrary</Typography>
      </Grid>
      <Grid item>
        <Typography onClick={handleHighlightsClick}>Highlights</Typography>
      </Grid>
      <Grid item>
        <div style={{ display: "flex" }}>
          <Typography onClick={handleAccountClick}>Account</Typography>
          <Icon src="" />
        </div>
      </Grid>
    </Grid>
  );
}

export default Header;