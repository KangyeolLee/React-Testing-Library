import * as S from "./styles";

const Home = () => {
  return (
    <S.Home>
      <S.HomeCard bgColor="#ff791e">폼 제출</S.HomeCard>
      <S.HomeCard bgColor="#f4b400">데이터 불러오기</S.HomeCard>
      <S.HomeCard bgColor="#1e48ff">잘못된 페이지 요청</S.HomeCard>
    </S.Home>
  );
};

export default Home;
