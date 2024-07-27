import { render, screen } from "@testing-library/react";
import { defaultLinkStyles, NavLink } from "@/components/ui/NavLink";

describe("NavLink", () => {
  it("renders the children correctly", () => {
    render(<NavLink href={"#"}>Test Link</NavLink>);
    const linkElement = screen.getByText(/Test Link/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("applies the default styles when no variant is provided", () => {
    const { getByRole } = render(
      <NavLink variant='large' href={"#"}>
        Test Link
      </NavLink>
    );
    const linkElement = getByRole("link");
    expect(linkElement).toHaveClass(defaultLinkStyles("default"));
  });

  it("applies the large styles when variant is set to 'large'", () => {
    render(
      <NavLink href={"#"} variant='large'>
        Test Link
      </NavLink>
    );
    const linkElement = screen.getByText(/Test Link/i);
    expect(linkElement).toHaveClass(
      "text-lg font-medium text-[#333333] hover:opacity-75 duration-150"
    );
  });

  it("applies the small styles when variant is set to 'small'", () => {
    render(
      <NavLink href={"#"} variant='small'>
        Test Link
      </NavLink>
    );
    const linkElement = screen.getByText(/Test Link/i);
    expect(linkElement).toHaveClass(
      "text-sm font-medium text-[#333333] hover:opacity-75 duration-150"
    );
  });

  // Add more tests as needed
});
