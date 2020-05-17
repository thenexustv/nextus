import axios from "axios";

export default async (req, res) => {
  const {
    query: { id },
  } = req;

  const personResponse = await axios.get(
    `http://thenexus.tv/wp-json/wp/v2/person/${id}`
  );
  const person = personResponse.data;

  const result = { person };

  res.json(result);
};
