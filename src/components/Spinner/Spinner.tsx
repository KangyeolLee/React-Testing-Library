import * as S from "./styles";

export type Props = {
  position?: string;
};

const Spinner = ({ position }: Props) => {
  return (
    <S.SpinnerWrapper position={position} data-testid="test-spinner">
      <S.Spinner>
        <S.SpinnerDot />
        <S.SpinnerDot />
        <S.SpinnerDot />
        <S.SpinnerDot />
        <S.SpinnerDot />
        <S.SpinnerDot />
      </S.Spinner>
    </S.SpinnerWrapper>
  );
};

export default Spinner;
