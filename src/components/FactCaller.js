import React from "react";
import "../styles/Home.css";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { Box } from "@mui/material";
import Feed from "../components/imagesPuller";

function FactCaller() {
  const { data, isLoading } = useQuery(["cat"], async () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  // const { catPicData, catPicIsLoading } = useQuery(["catPic"], async () => {
  //   return Axios.get("https://api.thecatapi.com/v1/images/search").then(
  //     (result) => result[0].data
  //   );
  // });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // if (catPicIsLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="cardz">
      <h2 className="h2color">
        Some Random Cat Facts:
        <p className="mini">(Using 2 different cat related API's here...)</p>
      </h2>
      <div className="pic">
        <Box>
          <Feed></Feed>
        </Box>
      </div>
      <div className="internalCardText">{data.fact}</div>
    </div>
  );
}

export default FactCaller;
