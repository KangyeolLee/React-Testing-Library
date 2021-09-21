import axios from "axios";

export const fetcherUserByPage = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};
