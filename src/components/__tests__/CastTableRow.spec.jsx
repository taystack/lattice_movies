import React from "react";
import { act, render, fireEvent } from "@testing-library/react";
import { CastTableRow } from "../CastTableRow";


jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));


describe("CastTableRow", () => {
  let props;
  beforeEach(() => {
    props = {
      actor: {
        name: "Foobar",
        character: "Chewbacca",
        id: 42,
        profile_path: "",
      },
    };
  });

  it("should present a cast member", () => {
    const { container, getByText } = render(<CastTableRow {...props} />);
    getByText(/foobar/i);
    getByText(/chewbacca/i);
    fireEvent.click(container.querySelector("#Cast-42"));
  });
});
