import { InputAdornment, TextField } from "@mui/material";
import React, { ChangeEventHandler } from "react";
import Icon from "../../atoms/icon";
import SearchIcon from '@mui/icons-material/';

export interface SearchBarProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function SearchBar(props: SearchBarProps) {
  return (
    <TextField
      placeholder=""
      onChange={props.onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon src="SearchIcon" />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchBar;