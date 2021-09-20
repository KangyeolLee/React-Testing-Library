import * as S from "./styles";

import Header from "@/components/Header";
import { NOT_FOUND_CONTENT } from "@/constants/contents";

const NotFound = () => {
  return (
    <S.NotFound className="container">
      <Header title="잘못된 페이지 요청 테스트" />
      <div className="article-wrapper">
        <S.Article>
          <img
            draggable="false"
            alt="404"
            src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
          />
        </S.Article>
        <S.Article>
          <h2>Page Not Found</h2>
          <pre>{NOT_FOUND_CONTENT}</pre>
        </S.Article>
      </div>
    </S.NotFound>
  );
};

export default NotFound;
