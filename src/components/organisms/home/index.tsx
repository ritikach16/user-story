import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "../../atoms/image";
import SearchBar from "../../molecules/searchBar";
import SearchResult from "../../molecules/searchResult";
import SearchSuggestion from "../../molecules/searchSuggestions";
import Header from "../header";

interface searcheData{
    authorName: string;
    bookName: string;
    count: Number;
    bookImg: string;
    onClick: () => void;
}

function Home() {

    var keyword = "";

    const [data , setData] = useState<searcheData>();
    const handleChange = () => {
      keyword = "";
    };
  const handleClick =  () => {
      // navigationg to bookdetail
  }
    useEffect(
      () => {
        // axios call to get the whole data
  
        const search = () => {
          // filter data and setData
        };
      },
      [
        /* filtered data on searched keyword */
      ]
    );
  return (
   <Box>
       <Header/>
       <Image src={""} onClick={handleClick}/>
       <SearchBar onChange={handleChange}/>
       {keyword.length>0 ? (<SearchSuggestion searchedRes={data}/>) 
        : (<SearchResult authorName={""} bookName={""} count={data.count} bookImg={""} onClick={handleClick}/>)}
   </Box>
  );
}

export default Home;