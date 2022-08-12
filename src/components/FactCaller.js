import React from "react";
import "../styles/Home.css";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

function FactCaller() {
  // const [image, setImage] = useState();

  // const funky = async function refreshImage() {
  //   setImage = null;
  //   try {
  //     const response = await fetch(
  //       `https://api/thecatapi.com/v1/images/search`,
  //       {
  //         headers: {
  //           "x-api-key": process.env.REACT_APP_CAT_API_KEY,
  //         },
  //       }
  //     );
  //     const json = await response.json();
  //     setImage(json);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

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
      <h1 className="h1color">Some Random Cat Facts:</h1>
      <div className="internalCardText">{data.fact}</div>
    </div>
  );
}

export default FactCaller;
