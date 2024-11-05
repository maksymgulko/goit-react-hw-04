import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const key = "E86BDqONajg5l2qXSOqpKkrTxA23cg0_ZFHQKuQ26MY";

export const fetchArticlesWithTopic = async (topic) => {
  const response = await axios.get(
    `/search/photos?query=${topic}&client_id=${key}`
  );
  return response.data.results;
};
