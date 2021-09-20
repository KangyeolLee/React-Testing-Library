import * as S from "./styles";

import { Link } from "react-router-dom";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <S.Header>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <Link className="touchable" to="/">
        홈으로
      </Link>
    </S.Header>
  );
};

export default Header;
