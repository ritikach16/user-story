import { SvgIconComponent } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

interface ImageProp {
  Img: SvgIconComponent;
}

const Image = ({Img}: ImageProp) => {
  return (
    <Box>
     <Img/>
    </Box>
  );
};

export default Image;
