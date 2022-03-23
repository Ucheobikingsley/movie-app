import React, { useEffect, useState } from "react";

import "../Css/card.css";
function Card(props) {
  const [fetchedData, setFetchedData] = useState({});
  const [secondMovie, setSecondMovie] = useState({});
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "http://www.omdbapi.com/?apikey=492d0c67&t=squid+game&y=2021"
      );
      const objectValues = await data.json();

      setFetchedData((currentData) => {
        return { ...currentData, ...objectValues };
      });

      return objectValues;
    };
    getData().catch(console.error);
  }, [fetchedData]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "http://www.omdbapi.com/?apikey=492d0c67&t=avengers"
      );
      const objectValues = await data.json();

      setSecondMovie((currentData) => {
        return { ...currentData, ...objectValues };
      });

      return objectValues;
    };
    getData().catch(console.error);
  }, [secondMovie]);

  return (
    <div className="card_entry">
      <div className="Main-Search Main-content">
        <div className="movie_cards">
          <img
            className="img"
            src={fetchedData && fetchedData.Poster}
            alt={fetchedData || "not picture"}
          />
          <div className="inner-card"></div>
        </div>
        <div className="movie_cards">
          <img
            className="img"
            src={secondMovie && secondMovie.Poster}
            alt={secondMovie || "not picture"}
          />
          <div className="inner-card"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
