import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  applyNodeChanges,
  Node,
  NodeChange,
} from "react-flow-renderer";
import { initialNodes, initialEdges } from "constants/flowData";
import UpdateNodeModal from "./UpdateNodeModal";

function WorkFlow() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [nodeName, setNodeName] = useState<Node>(initialNodes[0]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      setNodes((nds) => applyNodeChanges(changes, nds));
    },
    [setNodes],
  );

  useEffect(() => {
    setNodes((nds) =>
      nds.filter((node) => {
        if (node.id === nodeName?.id) {
          node.data = {
            label: nodeName.data.label,
          };
        }

        return node;
      }),
    );
  }, [nodeName, setNodes]);
  return (
    <ReactFlow
      fitView
      nodes={nodes}
      edges={initialEdges}
      style={{ background: "#eeeeee" }}
      onNodesChange={onNodesChange}
      onNodeClick={(event, node) => {
        setNodeName(node);
        setIsOpen(true);
      }}
    >
      <div className="updatenode__controls">
        <UpdateNodeModal
          node={nodeName}
          open={isOpen}
          onToggleModal={setIsOpen}
          onUpdateTitle={(value) => setNodeName(value)}
        />
      </div>
    </ReactFlow>
  );
}

export default WorkFlow;
