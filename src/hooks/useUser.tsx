import { PAGE_SIZE, REPO } from "@/constants/apis";

import { fetcherUserByPage } from "@/api/fetchers";
import useSWRInfinite from "swr/infinite";

type Data = {
  url: string;
  id: number;
};

const getKey = (pageIndex: number, prevPageData: Data[] | null) => {
  if (prevPageData && !prevPageData.length) return null;
  return `https://api.github.com/repos/${REPO}/issues?per_page=${PAGE_SIZE}&page=${
    pageIndex + 1
  }`;
};

const useUser = () => {
  const { data, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcherUserByPage,
    { suspense: true }
  );

  const isReachingEnd = data && data[data.length - 1]?.length < PAGE_SIZE;

  return {
    data: data?.flatMap((d) => d) as Data[],
    size,
    setSize,
    isValidating,
    isReachingEnd,
  };
};

export default useUser;
