import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "../../atoms/image";
import Icons from "../../atoms/icon";
import ButtonGrp from "../buttonGroup";
import BookDetailTabs from "../bookDetailTab";

export interface BookDetailProps {
  imgSrc: string;
  bookName: string;
  author: string;
  readImg: string;
  audioImg: string;
  readTxt: string;
  audioTxt: string;
  onClick: () => void;
}

function BookDetail(props: BookDetailProps) {
  return (
    <Box>
      <Box>
        <Typography>{props.bookName}</Typography>
        <Typography>by {props.author}</Typography>
        <Grid container>
          <Grid item>
            <Icons src={props.readImg} />
          </Grid>
          <Grid item>{props.readTxt}</Grid>
          <Grid item>
            <Icons src={props.audioImg} />
          </Grid>
          <Grid item>{props.audioTxt}</Grid>
        </Grid>
        <ButtonGrp onClick={props.onClick} />
        <BookDetailTabs/>
      </Box>
      <Box>
        <Image src={props.imgSrc} onClick={() => console.log("")} />
      </Box>
    </Box>
  );
}


export default BookDetail;
