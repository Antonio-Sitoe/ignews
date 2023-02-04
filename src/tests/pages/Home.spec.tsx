import { render, screen } from "@testing-library/react";
import Home from "../../pages";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

describe("Home page", () => {
  it("renders correctly", () => {
    render(<Home product={{ priceId: "fake-price-id", amount: "150" }} />);

    expect(screen.getByText(`por apenas 150 MZN por mes`)).toBeInTheDocument();
  });
});
