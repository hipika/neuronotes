// import { useState, useCallback } from "react";
import ResizableNodeSelector from './ResizableNodeSelector';
import '@xyflow/react/dist/style.css';
import { useState, useCallback } from 'react';
import {
  Background,
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  MiniMap,
  SmoothStepEdge,
} from '@xyflow/react';
import RestoreNode from './RestoreNode';
import SaveNode from './SaveNode';
import RightPanel from "./RightPanel"
import AddNode from "./AddNode";
import Reset from './Reset';


const flowKey = 'example-flow';

const getNodeId = () => `randomnode_${+new Date()}`;

const nodeTypes = {
  ResizableNodeSelector,
}

const initialNodes = [
  { id: '1', data: { label: 'Node 1' }, type: "ResizableNodeSelector", position: { x: 0, y: -50 } },
  { id: '2', data: { label: 'Node 2' },type: "ResizableNodeSelector",position: { x: 0, y: 50 } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const Node = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [rfInstance, setRfInstance] = useState(null);
  const { setViewport } = useReactFlow();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes, setViewport]);

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      type: "ResizableNodeSelector",
      data: { label: 'Added node' },
      position: {
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 400,
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);
  
  // reset function -> removes all current nodes in the array
  const resetPage = useCallback((nodeId, edgeId) => {
    setNodes([]);
    setEdges([]);
  }, [setNodes, setEdges])

      // editing the data of the nodes after it has been created
  // const [nodeData, setNodeData] = useState("");

  // const changeData = () => {
  //   setNodes((nodes) => nodes.map((node) => {
  //     if (node.id === useNodeId(node)) {
  //       return {
  //         ...node,
  //         data: {
  //           ...node.data,
  //           label: nodeData
  //         }
  //       }
  //     }
  //   })
  // )}

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={setRfInstance}
      fitView
      fitViewOptions={{ padding: 2 }}
      nodeTypes={nodeTypes}
    >
      <Background />
      <RightPanel>
        <AddNode onClick={onAdd} />
        <SaveNode onClick={onSave} />
        <RestoreNode onClick={onRestore} />
        <Reset onClick={resetPage} />
      </RightPanel>

      <MiniMap />

    </ReactFlow>
  );
};

export default () => (
  <ReactFlowProvider>
    <Node />
  </ReactFlowProvider>
);
