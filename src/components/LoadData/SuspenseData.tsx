import * as S from "./styles";

import Spinner from "@/components/Spinner";
import useUser from "@/hooks/useUser";

const SuspenseData = () => {
  const { data, size, setSize, isValidating, isReachingEnd } = useUser();

  return (
    <>
      <div className="sub-header-wrapper">
        <h2>SUSPENSE를 이용한 선언적 비동기 처리</h2>
        <S.MoreButton
          disabled={isReachingEnd}
          onClick={() => setSize(size + 1)}
        >
          더보기
        </S.MoreButton>
      </div>

      {data.map((urls, index) => (
        <S.Url key={urls.id}>
          <S.Num>#{index + 1}</S.Num> {urls.url}
        </S.Url>
      ))}

      {isValidating && <Spinner position="center" />}
    </>
  );
};

export default SuspenseData;
