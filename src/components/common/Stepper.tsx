import { Stepper } from "react-form-stepper";
import { Button, Col, Row } from "reactstrap";
import { StepperProps } from "utils/types";

function WorkStepper(props: StepperProps) {
  function isLastStep() {
    return props.currentStep === props.steps.length - 1;
  }
  return (
    <div className="h-100">
      <Stepper
        connectorStateColors
        connectorStyleConfig={{
          disabledColor: "gray",
          activeColor: "green",
          completedColor: "green",
          size: ".2rem",
          style: "solid",
        }}
        styleConfig={{
          activeBgColor: "#000D36",
          activeTextColor: "white",
          completedBgColor: "#000D36",
          completedTextColor: "white",
          inactiveBgColor: "#ccc",
          inactiveTextColor: "white",
          size: "2rem",
          circleFontSize: "1rem",
          labelFontSize: "1rem",
          borderRadius: "1rem",
          fontWeight: "1rem",
        }}
        steps={props.steps}
        activeStep={props.currentStep}
      />
      <div className="h-75">{props.children}</div>

      <Row>
        <Col xs={6} className="d-flex justify-content-center mt-3">
          {props.currentStep > 0 ? (
            <Button
              color="danger"
              onClick={() => props.onClickButtons(props.currentStep - 1)}
            >
              Back
            </Button>
          ) : null}
        </Col>
        <Col xs={6} className="d-flex justify-content-center mt-3">
          {isLastStep() ? null : (
            <Button
              color="primary"
              onClick={() => props.onClickButtons(props.currentStep + 1)}
            >
              Next
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default WorkStepper;
