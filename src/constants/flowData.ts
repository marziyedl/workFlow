import { Edge, MarkerType, Node } from "react-flow-renderer";
export const initialNodes: Node[] = [
  {
    id: "0",
    data: {
      label: "Prepare balance",
    },
    type: "input",
    position: { x: 5, y: 5 },
    className: "bg-info",
  },
  {
    id: "1",
    data: {
      label:
        "Place a beaker with 1000ul of distilled H20 on the balance and tare",
    },
    position: { x: 5, y: 100 },
  },
  {
    id: "2",
    data: { label: "Place a new pipette tip on the pipettor" },
    position: { x: 5, y: 200 },
  },
  {
    id: "3",
    data: { label: "Weigh the pipettes at 100% volume five times" },
    position: { x: 5, y: 300 },
  },
  {
    id: "4",
    data: { label: "Is ran for 5 times?" },
    position: { x: -300, y: 300 },
    className: "bg-danger fw-bold",
  },
  {
    id: "5",
    data: { label: "Aspirate and dispense 100% of the volume into the beaker" },
    position: { x: -300, y: 400 },
    className: "bg-secondary",
  },
  {
    id: "6",
    data: { label: "Record the weight in the table in step 6.4" },
    position: { x: -300, y: 500 },
    className: "bg-secondary",
  },
  {
    id: "7",
    data: { label: "Tare the balance" },
    position: { x: -300, y: 600 },
    className: "bg-secondary",
  },
  {
    id: "8",
    data: { label: "Is ran for 4 times?" },
    position: { x: 5, y: 600 },
    className: "bg-danger fw-bold",
  },
  {
    id: "9",
    data: { label: "Test Volume 100%" },
    position: { x: 5, y: 700 },
  },
  {
    id: "10",
    type: "output",
    data: { label: "Calculate Mean, Std. Deviation, Accuracy and Precision" },
    position: { x: 5, y: 800 },
    className: "bg-success",
  },
];

export const initialEdges: Edge[] = [
  {
    id: "e1-0",
    source: "0",
    target: "1",
    type: "step",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e1-1",
    source: "1",
    target: "2",
    type: "step",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  { id: "e1-2", source: "2", target: "3", type: "step" },
  {
    id: "e1-3",
    source: "3",
    label: "No",
    animated: true,
    target: "4",
  },
  {
    id: "e1-4",
    source: "4",
    target: "3",
    type: "step",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e1-5",
    source: "4",
    label: "Yes",
    target: "5",
    type: "step",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e1-6",
    source: "5",
    target: "6",
    type: "step",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e1-7",
    source: "6",
    target: "7",
    type: "step",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e1-8",
    source: "7",
    target: "8",
    type: "step",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e1-9",
    source: "8",
    target: "5",
    label: "No",
    animated: true,
  },
  {
    id: "e1-10",
    source: "8",
    target: "9",
    type: "step",
    label: "Yes",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e1-11",
    source: "9",
    type: "step",
    target: "10",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];
