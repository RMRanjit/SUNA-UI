import { createContext, useState } from 'react';

const NodesContext = createContext(null);

const NodesContextProvider = ({ children, initialNodes = [], initialEdges = [] }) => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const [nodeID, setNodeID] = useState(initialNodes.length);
  return <NodesContext.Provider value={{ nodes, setNodes, edges, setEdges, nodeID, setNodeID }}>{children}</NodesContext.Provider>;
};

export { NodesContext, NodesContextProvider };
