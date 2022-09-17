import { Grid } from "@mui/material";
import React from "react";
import TradeCoin from "../../molecules/tradeCoin";

interface TradeCoinData {
  src: any;
  coinName: string;
  cost: string;
  shortForm: string;
  change: string;
  marketCap: string;
  watch: boolean;
}

function TradeCoinList(List: Array<TradeCoinData>) {
  return (
    <Grid container>
      {List.map((item: TradeCoinData) => {
        return (
          <TradeCoin
            src={item.src}
            coinName={item.coinName}
            cost={item.cost}
            shortName={item.shortForm}
            change={item.change}
            marketCap={item.marketCap}
            watch={item.watch}
          />
        );
      })}
    </Grid>
  );
}

export default TradeCoinList;
