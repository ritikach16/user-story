import { Grid } from "@mui/material";
import React from "react";
import Coin from "../../atoms/coin";

interface CoinData{
    src: string;
  coinName: string;
  cost: string;
}

function CoinList(List: Array<CoinData>) {
  return (
    <Grid container>
      {List.map((item : CoinData) => {
        return (
          <Coin
            src={item.src}
            coinName={item.coinName}
            cost={item.cost}
          />
        );
      })}
    </Grid>
  );
}

export default CoinList;