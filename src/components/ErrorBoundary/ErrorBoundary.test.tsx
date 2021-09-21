import ErrorBoundary from ".";
import { render } from "@testing-library/react";

const ErrorChild = () => {
  throw new Error();
};
const NormalChild = () => <div>정상</div>;

describe("<ErrorBoundary />", () => {
  it("render without any errors", () => {
    const { getByText } = render(
      <ErrorBoundary>
        <NormalChild />
      </ErrorBoundary>
    );

    const text = getByText(/정상/);
    expect(text).toBeInTheDocument();
  });

  it("render with an error", () => {
    const { getByText } = render(
      <ErrorBoundary>
        <ErrorChild />
      </ErrorBoundary>
    );

    const text = getByText(/에러가 발생했습니다/);
    expect(text).toBeInTheDocument();
  });
});
