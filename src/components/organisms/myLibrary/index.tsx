import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Image from "../../atoms/image";
import Cards from "../../molecules/cards";

function MyLibrary() {
  useEffect(() => {
    // axios call for mylibrary data
  });

  const handleCardClick = () => {
    // navigate to book details
  };

  const mylibraryData: any[] = [];

  return (
    <Grid container>
      <Grid item>
        <Image src={""} onClick={handleCardClick} />
      </Grid>
      <Grid item>
        <Grid>
          {mylibraryData.map((book) => {
            return (
              <Cards
                imgSrc={""}
                bookName={""}
                author={""}
                timeread={""}
                onClick={handleCardClick}
              />
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MyLibrary;