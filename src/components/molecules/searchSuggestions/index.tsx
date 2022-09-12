import { Box, Typography } from "@mui/material";
import React from "react";
import Icon from "../../atoms/icon";

interface searchedData{
  authorName: string;
  bookName: string;
  count: Number;
  bookImg: string;
  onClick: () => void;
}

export interface SuggestionProps {
   searchedRes : Array<searchedData>;
}

const SearchSuggestion = (props: SuggestionProps) => {
  return (
    <Box>
        {props.searchedRes.map((data, key) => {
            <Box key={key}>
                {data.bookName}
                {data.authorName}
            </Box>
        })}
    </Box>
  );
}

export default SearchSuggestion;