import WorkStepper from "components/common/Stepper";
import { useState } from "react";
import { DefaultSteps } from "constants/steps";
import WorkFlow from "components/workFlow/WorkFlow";

function Home() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const getCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <p className="text-center alert alert-secondary">
            To perform a calibration check on a pipette with automated data
            capture and compliance documentation. The purpose of this test is to
            check if the pipette is dispensing the same amount of liquid each
            time.
          </p>
        );
      case 1:
        return (
          <p className="text-center">
            This procedure is to be used for demonstrations of automatic
            calibration and documentation.
          </p>
        );
      case 2:
        return (
          <dl className="text-center">
            <dt> Pipette:</dt>
            <dd>
              Pipettes are used to transfer or measure set volumes of liquid.
            </dd>
            <dt> Pipette tip:</dt>
            <dd>
              Pipette tips are disposable, attachments for the uptake and
              dispensing of liquids using a pipette.
            </dd>
          </dl>
        );
      case 3:
        return <p className="text-center alert alert-info">N/A</p>;
      case 4:
        return (
          <ul className="list-group">
            <li className="list-group-item">Phasellus iaculis neque</li>
            <li className="list-group-item">Purus sodales ultricies</li>
            <li className="list-group-item">
              Vestibulum laoreet porttitor sem
            </li>
            <li className="list-group-item">Ac tristique libero volutpat at</li>
          </ul>
        );
      case 5:
        return <WorkFlow />;
      default:
        return <WorkFlow />;
    }
  };

  return (
    <WorkStepper
      steps={DefaultSteps}
      currentStep={currentStep}
      onClickButtons={(val) => setCurrentStep(val)}
    >
      {getCurrentStep()}
    </WorkStepper>
  );
}

export default Home;
