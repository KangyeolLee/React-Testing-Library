import * as S from "./styles";

import { Link } from "react-router-dom";
import box from "@/assets/box.png";
import car from "@/assets/car.png";
import error from "@/assets/404error.png";

const Home = () => {
  return (
    <S.Home className="container">
      <h1>React Testing Lib</h1>
      <div className="card-wrapper">
        <Link to="/submitForm">
          <S.HomeCard bgColor="#ff791e">
            <span className="article-title">폼 제출</span>
            <S.HiddenContent>
              <span>폼 관련 데이터를 입력하고</span>
              <span>버튼 유효성 검사 및</span>
              <span>제출 관련 이벤트를</span>
              <span>테스트합니다.</span>
            </S.HiddenContent>
            <img src={box} alt="폼 제출 이미지" />
          </S.HomeCard>
        </Link>

        <Link to="/loadData">
          <S.HomeCard bgColor="#f4b400">
            <span className="article-title">데이터 불러오기</span>
            <S.HiddenContent>
              <span>Suspense를 이용하여</span>
              <span>데이터를 불러오고</span>
              <span>로딩/에러처리 관련 내용을</span>
              <span>테스트합니다.</span>
            </S.HiddenContent>
            <img src={car} alt="데이터 불러오기 이미지" />
          </S.HomeCard>
        </Link>

        <Link to="/notFound">
          <S.HomeCard bgColor="#1e48ff">
            <span className="article-title">잘못된 페이지 요청</span>
            <S.HiddenContent>
              <span>경로에 맞지 않는 페이지</span>
              <span>잘못된 요청이 올 경우</span>
              <span>출력하는 페이지를</span>
              <span>테스트합니다.</span>
            </S.HiddenContent>
            <img src={error} alt="잘못된 페이지 요청 이미지" />
          </S.HomeCard>
        </Link>
      </div>
    </S.Home>
  );
};

export default Home;
