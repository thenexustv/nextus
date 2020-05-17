// http://thenexus.tv/wp-json/wp/v2/categories/8
// http://thenexus.tv/wp-json/wp/v2/episode/5835

import axios from "axios";

export default async (req, res) => {
  const {
    query: { id },
  } = req;

  const episodeResponse = await axios.get(
    `http://thenexus.tv/wp-json/wp/v2/episode/${id}`
  );
  const episode = episodeResponse.data;
  const categoryId = episode.categories[0];

  const categoryResponse = await axios.get(
    `http://thenexus.tv/wp-json/wp/v2/categories/${categoryId}`
  );
  const category = categoryResponse.data;

  const result = { episode, category };

  res.json(result);
};
