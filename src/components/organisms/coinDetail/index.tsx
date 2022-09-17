import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Icons from "../../atoms/icons";

interface CoinDetailProps{
    coinName: string;
    shortForm: string;
    marketcap: string;
    supply: string;
    addedToWatchList: string;
    cost: string;
    description: string;
    coin: string;
}

function CoinDetailOverview(props: CoinDetailProps) {

    const [coinData, setCoinData] = useState<CoinDetailProps>();

  useEffect(() => {
    // axios call get and set the coin data
  });

  return (
    <Grid container>
      <Grid item>
        <Icons src={""} />
        <Typography>{coinData.coinName}</Typography>
        <Typography>{coinData.shortForm}</Typography>
        <Typography>{coinData.marketcap}</Typography>
        <Typography>{coinData.supply}</Typography>
        <Typography>{coinData.addedToWatchList}</Typography>
      </Grid>
      <Grid item>
        <Typography>current value</Typography>
        <Typography>{coinData.cost}</Typography>
        {/* graph */}
      </Grid>
      <Grid item>
        <Grid>
          <Typography>About {coinData.coin}</Typography>
          <Typography>{coinData.description}</Typography>
        </Grid>
        <Grid>
          <Typography>Resources</Typography>
          {/* links */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CoinDetailOverview;