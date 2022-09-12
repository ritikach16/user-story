import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import Icons from "../../atoms/icon";
import Image from "../../atoms/image";

interface SearchResultProps {
  authorName: string;
  bookName: string;
  count: Number;
  bookImg: string;
  onClick: () => void;
}

const SearchResult = (props: SearchResultProps) => {
  return (
    <Grid container>
      <Grid item>
        <Box>
          <>
            <Icons src="upArrow" />
            {props.count}
          </>
        </Box>
      </Grid>
      <Grid item>
        <Image onClick={props.onClick} src={props.bookImg} />
      </Grid>
      <Grid item>
        <Typography>{props.bookName}</Typography>
        <Typography>{props.authorName}</Typography>
      </Grid>
    </Grid>
  );
};

export default SearchResult;
