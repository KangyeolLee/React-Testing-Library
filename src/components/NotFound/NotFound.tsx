import * as S from "./styles";

const NotFound = () => {
  return (
    <S.NotFound>
      <h2>Page Not Found</h2>
      <p>해당 페이지를 찾을 수가 없습니다.</p>
      <img
        alt="404"
        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
      />
    </S.NotFound>
  );
};

export default NotFound;
