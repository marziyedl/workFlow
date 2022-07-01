import { ReactElement } from "react";
import { Node } from "react-flow-renderer";

export type ModalPropsType = {
  open: boolean;
  onToggleModal: (open: boolean) => void;
  onUpdateTitle: (value: Node) => void;
  node: Node;
};
export type StepperProps = {
  steps: Array<object>;
  currentStep: number;
  onClickButtons: (val: number) => void;
  children: ReactElement<any>;
};
