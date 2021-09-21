import { fireEvent, render, waitFor } from "@testing-library/react";

import App from "./App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

function renderComponent() {
  const history = createMemoryHistory();
  return render(
    <Router history={history}>
      <App />
    </Router>
  );
}

describe("<App />", () => {
  it("render whole component", () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();
  });

  it("toggle button for changing global theme", () => {
    const { getByTestId } = renderComponent();

    const button = getByTestId("touchable");

    expect(button).toBeEnabled();

    fireEvent.click(button);

    expect(button).toBeEnabled();
  });

  it("check routing to form component", async () => {
    const { getByText, getByTestId } = renderComponent();

    const formLink = await waitFor(() => getByTestId("form-link"));
    fireEvent.click(formLink);

    const title = await waitFor(() => getByText(/폼 제출 테스트/));
    expect(title).toBeInTheDocument();
  });

  it("check routing to data component", async () => {
    const { getByText, getByTestId } = renderComponent();

    const dataLink = await waitFor(() => getByTestId("data-link"));
    fireEvent.click(dataLink);

    const title = await waitFor(() => getByText(/데이터 불러오기/));
    expect(title).toBeInTheDocument();
  });

  it("check routing to error component", async () => {
    const { getByText, getByTestId } = renderComponent();

    const errorLink = await waitFor(() => getByTestId("error-link"));
    fireEvent.click(errorLink);

    const title = await waitFor(() => getByText(/Page Not Found/i));
    expect(title).toBeInTheDocument();
  });
});
