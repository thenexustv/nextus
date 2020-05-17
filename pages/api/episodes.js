// http://thenexus.tv/wp-json/wp/v2/categories/8
// http://thenexus.tv/wp-json/wp/v2/episode/5835

import axios from "axios";

export default async (req, res) => {
  const {
    query: { id },
  } = req;

  const episodeResponse = await axios.get(
    `http://thenexus.tv/wp-json/wp/v2/episode`
  );
  const episode = episodeResponse.data;

  const result = { episode };

  res.json(result);
};
