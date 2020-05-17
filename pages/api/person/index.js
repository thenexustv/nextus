import axios from "axios";

export default async (req, res) => {
  const personResponse = await axios.get(
    `http://thenexus.tv/wp-json/wp/v2/person?per_page=100`
  );
  const person = personResponse.data;

  const result = { person };

  res.json(result);
};
