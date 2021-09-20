import * as S from "./styles";

import Header from "@/components/Header";
import gossip from "@/assets/gossip.png";

const LoadData = () => {
  return (
    <S.LoadData className="container">
      <Header title="데이터 불러오기 테스트" />

      <div className="article-wrapper">
        <S.Article>
          <img
            draggable="false"
            src={gossip}
            alt="데이터 불러오기 관련 이미지"
          />
        </S.Article>
        <S.Article>
          <h2>SUSPENSE를 이용한 선언적 비동기 처리</h2>
        </S.Article>
      </div>
    </S.LoadData>
  );
};

export default LoadData;
