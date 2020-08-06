import React from "react";
import { act, render, fireEvent } from "@testing-library/react";
// import Header from "../Header";
import { Header } from "../Header";
import {
  setUserFilter,
} from "../../actions/MovieActions";


jest.mock("../../actions/MovieActions", () => ({
  setUserFilter: jest.fn(() => ({ type: "test" })),
}));


describe("Header", () => {
  let props;
  beforeEach(() => {
    props = {
      dispatch: jest.fn(),
      filter: "",
    };
  });

  it("should present an input", () => {
    const { container, getByText } = render(<Header {...props} />);
    fireEvent.change(container.querySelector("#HeaderInput"), { target: { value: "foobar" }});
    expect(setUserFilter).toHaveBeenCalledWith("foobar");
  });
});
