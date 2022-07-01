import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import UpdateNodeModal from "./UpdateNodeModal";
import { initialNodes } from "constants/flowData";

describe("findByText Examples", () => {
  const setup = () => {
    const setIsOpen = jest.fn();
    const nodename = initialNodes[0];
    const onUpdateTitle = jest.fn();
    const utils = render(
      <UpdateNodeModal
        node={nodename}
        open={true}
        onToggleModal={setIsOpen}
        onUpdateTitle={onUpdateTitle}
      />,
    );
    const input = screen.getByRole("textbox");
    return {
      nodename,
      onUpdateTitle,
      setIsOpen,
      input,
      ...utils,
    };
  };

  test("modal shows Input and button", () => {
    setup();
    expect(screen.getByText("Title")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  test("input default value and changes", () => {
    const { input, nodename } = setup();
    expect(input).toHaveValue(nodename.data.label);
    fireEvent.change(input, { target: { value: "23" } });
    expect(input).toHaveValue("23");
  });
  test("onClose Modal events", () => {
    const { onUpdateTitle, setIsOpen, nodename } = setup();
    fireEvent.click(screen.getByRole("button"));
    expect(onUpdateTitle).toHaveBeenCalledTimes(1);
    expect(onUpdateTitle).toHaveBeenCalledWith(nodename);
    expect(setIsOpen).toHaveBeenCalledTimes(1);
  });
});
