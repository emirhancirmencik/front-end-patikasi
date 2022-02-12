import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "./App";

describe("emoji app tests", () => {
  let title;
  let list;
  let input;
  let emoji;
  let emoji100;

  beforeEach(() => {
    render(<App />);
    title = screen.getByText("Emoji Search");
    emoji100 = screen.getByText(/100/i);
    list = document.getElementsByClassName("component-emoji-results");
    input = document.getElementsByTagName("INPUT");
    emoji = "100";
  });

  test("title should be render", () => {
    expect(title).toBeInTheDocument();
  });

  test("emoji list should be render", () => {
    expect(list.length).not.toEqual(0);
  });

  test("filter with user input", () => {
    userEvent.type(input[0], emoji);
    list = screen.getAllByText(emoji);
    expect(list[0]).toBeInTheDocument();
  });

  test("copy button should work", () => {
    document.execCommand = jest.fn();
    userEvent.click(emoji100);
    expect(document.execCommand).toBeCalledWith("copy");
  });
});
