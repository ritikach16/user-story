import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "../../atoms/image";

export interface CardProps {
    imgSrc: string;
    bookName: string;
    author: string;
    timeread: string;
    onClick: () => void;
}

function Card(props: CardProps) {
  return (
    <Grid container>
    <Grid item>
      <Image onClick={props.onClick} src={props.imgSrc} />
    </Grid>
    <Grid item>
      <Typography>{props.bookName}</Typography>
      <Typography>{props.author}</Typography>
      <Typography>{props.timeread}</Typography>
    </Grid>
  </Grid>
  );
}

export default Card;