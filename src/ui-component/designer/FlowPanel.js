import { useState, useCallback, useRef, useEffect, useContext, useMemo, useImperativeHandle, forwardRef } from 'react';
import ReactFlow, {
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  useEdgesState,
  addEdge,
  ReactFlowProvider,
  useReactFlow,
  ConnectionLineType,
  Panel,
  MiniMap
} from 'reactflow';
import 'reactflow/dist/style.css';
import propTypes from 'prop-types';
import itemNode from './Nodes/itemNode';
import minNode from './Nodes/minNode';
import containerNode from './Nodes/containerNode';
import { NodesContext } from './Nodes/NodesContext';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';

import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';

import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import PhotoSizeSelectSmallIcon from '@mui/icons-material/PhotoSizeSelectSmall';

const defaultViewport = { x: 0, y: 0, zoom: 0.25 };

// const small = {
//   itemNode: minNode,
//   containerNode: containerNode
// };

// const large = {
//   itemNode: itemNode,
//   containerNode: containerNode
// };

function FlowPanel(props, ref) {
  const { smallFormat = false } = props;
  const { nodes, setNodes, edges, setEdges, nodeID, setNodeID } = useContext(NodesContext);
  const [concise, setConcise] = useState(smallFormat);

  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const reactFlow = useRef(null);

  // Depending on the type of the view that the user selects ( via the smallFormat option), load up the itemNode type.
  // This causes warnings to be generated It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them
  // reference to the issue is @ reactFlow documentation : https://reactflow.dev/docs/guides/troubleshooting/
  // const nodeTypes = { itemNode: concise ? minNode : itemNode, containerNode: containerNode };
  // The below will cause warning to be generated everytime you switch. If that bothers you, uncomment the code below and it should be ok
  const nodeTypes = useMemo(() => ({ itemNode: concise ? minNode : itemNode, containerNode: containerNode }), [concise]);

  let id = nodeID;
  const getId = () => `${id++}`;

  const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), [setNodes]);

  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), [setEdges]);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge({ ...params, type: 'smoothstep', animated: 'true' }, els)),
    [setEdges]
  );

  useEffect(() => {
    // console.log('Flow: useEffect Node ID', nodeID);
    setNodeID(nodeID + 1);
  }, []);

  const handleLoad = () => {
    // setNodes(simpleBlueprint.nodes);
    // setEdges(simpleBlueprint.edges);
    // setNodeID(simpleBlueprint.nodes.length + 1);
    console.log('Handle Load');
  };

  const handleSave = () => {
    console.log('Handle Save');
    // const reactFlowInstance = useReactFlow();
    // console.log(reactFlowInstance);

    if (reactFlowInstance) {
      console.log(reactFlowInstance.toObject());
    }
    //console.log(JSON.stringify({ nodes, edges }));
  };

  const handlePrint = () => {
    console.log('Handle Print');
  };
  const handleShare = () => {
    console.log('Handle Share');
  };

  const handleVisualChange = (event) => {
    console.log('Handle Visual Change');
    setConcise(!concise);
    //setConcise(event.target.checked);
  };

  // useImperativeHandle(
  //   ref,
  //   () => {
  //     return { alertValue: () => alert('from Handle') };
  //   },
  //   []
  // );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDelete = useCallback(
    (params) => {
      setNodes((nds) => nds.filter((n) => n.id !== params.id));
      console.log('Delete called with id ' + params);
    },
    [setNodes, id]
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top
      });

      const parsedNode = JSON.parse(type);

      let NodeType = parsedNode.NodeType;
      let id = getId();
      let Name = parsedNode.itemType + '-' + id;
      //let id = nodeID;
      //setNodeID(nodeID+1);

      //console.log("new node ID generated is " + id) ;
      // let id = nodes.length + 1;
      //let id = Math.floor(new Date().valueOf() * Math.random())
      //console.log('Flow:Adding node with id', id);
      parsedNode.onDelete = onDelete;

      const newNode = {
        id: id,
        type: NodeType,
        position,
        data: { Name: `${Name} `, id: id, ...parsedNode }
      };

      console.log(newNode);
      setNodes((nds) => nds.concat(newNode));
      setNodeID(nodeID + 1);
    },
    [reactFlowInstance, nodeID, onDelete, setNodeID, setNodes]
  );

  const proOptions = { hideAttribution: true };

  // const onNodesChange = (n) =>{console.log(n);}

  return (
    <ReactFlowProvider>
      <div style={{ height: '100%', width: '100%' }} ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
          connectionLineType={ConnectionLineType.SmoothStep}
          defaultViewport={defaultViewport}
          ref={reactFlow}
          proOptions={proOptions}
          fitView
          //attributionPosition="bottom-left"
        >
          <MiniMap
            nodeStrokeColor={(n) => {
              if (n.style?.background) return n.style.background;
              if (n.type === 'itemNode' || n.type === 'miniNode') return '#0041d0';
              if (n.type === 'containerNode') return '#ff0072';
              if (n.type === 'default') return '#1a192b';

              return '#eee';
            }}
            nodeColor={(n) => {
              if (n.style?.background) return n.style.background;

              return '#fff';
            }}
            nodeBorderRadius={2}
          />
          <Controls />
          <Background color="#aaa" gap={10} />
          <Panel position="top-right">
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              // sx={{ position: 'absolute', bottom: 0, right: 0 }}
              icon={<SpeedDialIcon />}
              direction="left"
            >
              <SpeedDialAction
                key="Concise"
                icon={<PhotoSizeSelectSmallIcon />}
                tooltipTitle={concise ? 'Large Version' : 'Small Version'}
                onClick={handleVisualChange}
              />
              <SpeedDialAction key="Load" icon={<FileCopyIcon />} tooltipTitle="Load" onClick={handleLoad} />
              <SpeedDialAction key="Save" icon={<SaveIcon />} tooltipTitle="Save" onClick={handleSave} />
              <SpeedDialAction key="Print" icon={<PrintIcon />} tooltipTitle="Print" onClick={handlePrint} />
              <SpeedDialAction key="Share" icon={<ShareIcon />} tooltipTitle="Share" onClick={handleShare} />
            </SpeedDial>
          </Panel>
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}

FlowPanel.defaultProps = {
  smallFormat: true,
  initID: 0
};

FlowPanel.propTypes = {
  smallFormat: propTypes.bool,
  initID: propTypes.number
};

export default FlowPanel;
//export default forwardRef(FlowPanel);
// Good reference to useImperativeHandle is @ https://blog.webdevsimplified.com/2022-06/use-imperative-handle/
