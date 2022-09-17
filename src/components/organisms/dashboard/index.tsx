import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import WatchListCard from "../../molecules/watchListCard";

function Dashboard() {

    const [cards, setCards] = useState();

  useEffect(() => {
    // axios call to get the watchlist cards
  });

  const handleClick = () => {};

  return (
    <Grid container>
      {cards.map(() => {
        return (
          <Grid item>
            <WatchListCard
              coinName={""}
              cost={0}
              time={0}
              onClick={handleClick}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Dashboard;