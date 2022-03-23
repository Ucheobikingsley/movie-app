const cardData = async () => {
  const data = await fetch(
    "http://www.omdbapi.com/?apikey=492d0c67&t=squid+game&y=2021"
  );
  return await data.json();
};

export default cardData;
