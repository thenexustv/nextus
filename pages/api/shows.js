import axios from "axios";

export default async (req, res) => {
  const categoriesResponse = await axios.get(
    `http://thenexus.tv/wp-json/wp/v2/categories`
  );
  const shows = categoriesResponse.data;

  const result = { shows };

  res.json(result);
};
