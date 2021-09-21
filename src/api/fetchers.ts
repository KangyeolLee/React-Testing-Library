import axios from "axios";

export const fetcherUserByPage = async (url: string) => {
  const res = await axios.get(url, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });
  return res.data;
};
