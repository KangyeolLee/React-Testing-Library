import * as S from "./styles";

import Header from "@/components/Header";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";
import SuspenseData from "./SuspenseData";
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
          <Suspense fallback={<Spinner />}>
            <SuspenseData />
          </Suspense>
        </S.Article>
      </div>
    </S.LoadData>
  );
};

export default LoadData;
