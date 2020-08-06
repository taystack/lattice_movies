import React from "react";
import { act, render, fireEvent } from "@testing-library/react";
import { CrewTableRow } from "../CrewTableRow";


jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));


describe("CrewTableRow", () => {
  let props;
  beforeEach(() => {
    props = {
      member: {
        name: "Bob",
        job: "The Builder",
        id: 42,
        profile_path: "",
      },
    };
  });

  it("should present a cast member", () => {
    const { container, getByText } = render(<CrewTableRow {...props} />);
    getByText(/bob/i);
    getByText(/the builder/i);
    fireEvent.click(container.querySelector("#Actor-42"));
  });
});
