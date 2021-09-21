import { fireEvent, waitFor } from "@testing-library/react";

import { PAGE_SIZE } from "@/constants/apis";
import { SWRConfig } from "swr";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";
import SuspenseData from "./SuspenseData";
import { lightMode } from "@/styles/theme";
import renderComponent from "@/utils/test/renderComponent";

const Wrapper = () =>
  renderComponent({
    theme: lightMode,
    JSXElement: (
      <SWRConfig value={{ provider: () => new Map() }}>
        <Suspense fallback={<Spinner data-testid="test-spinner" />}>
          <SuspenseData />
        </Suspense>
      </SWRConfig>
    ),
  });

describe("<SuspenseData />", () => {
  it("render Spinner component before fetching data", () => {
    const { getByTestId } = Wrapper();

    const spinner = getByTestId("test-spinner");
    expect(spinner).toBeInTheDocument();
  });

  it("render header-wrapper", async () => {
    const { getByText } = Wrapper();

    const title = await waitFor(() => getByText(/SUSPENSE/i));
    expect(title).toBeInTheDocument();

    const button = await waitFor(() => getByText(/더보기/));
    expect(button).toBeInTheDocument();
  });

  it("render first issues", async () => {
    const { getAllByText } = Wrapper();

    const issues = await waitFor(() => getAllByText(/issues/i));
    expect(issues.length).toBe(PAGE_SIZE);
  });

  it("check load more data from clicking more button", async () => {
    const { getByTestId, getByText, getAllByText } = Wrapper();

    const button = await waitFor(() => getByText(/더보기/));
    fireEvent.click(button);

    const spinner = getByTestId("test-spinner");
    expect(spinner).toBeInTheDocument();

    await waitFor(() => getByText(/170/i), { timeout: 5000 });

    const issues = await waitFor(() => getAllByText(/issues/i));
    expect(issues.length).toBeGreaterThan(PAGE_SIZE);
  });
});
