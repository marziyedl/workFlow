import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { DefaultSteps } from "constants/steps";
import WorkStepper from "./Stepper";

describe("findByText Examples", () => {
  const setup = () => {
    const onClickButtons = jest.fn();
    let currentStep = 1;
    const utils = render(
      <WorkStepper
        steps={DefaultSteps}
        currentStep={currentStep}
        onClickButtons={onClickButtons}
      >
        <div>step 1</div>
      </WorkStepper>,
    );
    return {
      onClickButtons,
      currentStep,
      ...utils,
    };
  };

  test("stepper should  show children", () => {
    setup();
    expect(screen.getByText("step 1")).toBeInTheDocument();
  });
  test("stepper back button event should call", () => {
    const { onClickButtons } = setup();
    fireEvent.click(screen.getByText("Back"));
    expect(onClickButtons).toHaveBeenCalledTimes(1);
  });
});
