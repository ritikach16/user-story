import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import WalletCard, { WalletCardProps } from "../../molecules/walletCard";

function CoinWallet() {
    const [coins, setCoins] = useState<WalletCardProps>();
  useEffect(() => {
    // axios call to get the list of coins in wallet
  });

  return (
    <Grid container>
      {coins.map(() => {
        return (
          <Grid item>
            <WalletCard
              date={""}
              coinName={""}
              buyer={""}
              type={""}
              amount={0}
              change={""}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default CoinWallet;