import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MyPortfolioCard from "../../molecules/myPortfolio";
import WatchListCard from "../../molecules/watchListCard";

function MyPortfolio() {

    const [myPortfolioData, setMyPortfolioData] = useState();
    const [myWalletData, setMyWalletData] = useState();

  useEffect(() => {
    // axios call to get the portfolio data
  });

  return (
    <Grid container>
      <Grid item>
        <Typography>My Portfolio</Typography>
        {myPortfolioData.map(() => {
          return <MyPortfolioCard src={""} coinName={""} price={""} shortForm={""} change={""} />;
        })}
        <Typography>Total Balance</Typography>
      </Grid>
      <Grid item>
        <Typography>MyWallets</Typography>
        {myWalletData.map(() => {
          return(
            <WatchListCard coinName={""} cost={0} time={0} onClick={() => console.log("")}/>
          )
        })}
      </Grid>
      <Grid item>
        <Typography>Recent Transactions</Typography>
        {/*recent transactions */}
      </Grid>
    </Grid>
  );
}

export default MyPortfolio;