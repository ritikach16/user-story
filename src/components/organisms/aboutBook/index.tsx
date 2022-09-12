import { Box} from "@mui/material";
import React, { useEffect } from "react";
import BookDetail from "../../molecules/bookDetail";
import Header from "../header";

export interface AboutBookProps {
  id: number;
}

function AboutBook(props: AboutBookProps) {

    const handleClick = () => {
        console.log("");
        
    }

  useEffect(() => {
    // axios call to get the data
  });

  return (
    <Box>
        <Header/>
        <BookDetail imgSrc={""} bookName={""} author={""} readImg={""} audioImg={""} readTxt={""} audioTxt={""} 
        onClick={handleClick}/>
    </Box>
  );
}

export default AboutBook;