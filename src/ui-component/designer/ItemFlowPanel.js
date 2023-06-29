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

import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';

import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PhotoSizeSelectSmallIcon from '@mui/icons-material/PhotoSizeSelectSmall';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const defaultViewport = { x: 0, y: 0, zoom: 0.25 };

// const small = {
//   itemNode: minNode,
//   containerNode: containerNode
// };

// const large = {
//   itemNode: itemNode,
//   containerNode: containerNode
// };

function ItemFlowPanel(props, ref) {
  const { smallFormat = false, handleShowMenu } = props;
  const { nodes, setNodes, edges, setEdges, nodeID, setNodeID } = useContext(NodesContext);
  const [concise, setConcise] = useState(smallFormat);
  const [showMap, setShowMap] = useState(false);

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

  const handleShowMap = () => {
    setShowMap(!showMap);
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
      console.log('parsedNode', parsedNode);
      // if the nodeType is missing, then just make it the default one
      let NodeType = parsedNode.NodeType === undefined ? 'itemNode' : parsedNode.NodeType;
      let id = getId();
      let Name = parsedNode.name + '-' + id;
      //let Name = parsedNode.itemType + '-' + id;
      //let id = nodeID;
      //setNodeID(nodeID+1);

      //if the price is missing on the parsed node, add the property there
      if (parsedNode.price === undefined) {
        parsedNode.price = 0.0;
      }

      console.log('inside flowpanel: parsedNode.itemType is', parsedNode.itemType);
      if (parsedNode.itemType === undefined) {
        parsedNode.itemType = parsedNode.categories[0].name;
      }

      //console.log("new node ID generated is " + id) ;
      // let id = nodes.length + 1;
      //console.log('Flow:Adding node with id', id);
      parsedNode.onDelete = onDelete;

      const newNode = {
        id: id,
        type: NodeType,
        position,
        data: { Name: `${Name} `, id: id, ...parsedNode }
      };

      //console.log(newNode);
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
          {showMap && (
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
          )}
          <Controls />
          <Background color="#aaa" gap={10} />
          <Panel position="top-right">
            <SpeedDial
              ariaLabel="SpeedDial for Flow"
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
              <SpeedDialAction key="Menu" icon={<MenuOutlinedIcon />} tooltipTitle="Toggle Menu" onClick={handleShowMenu} />
              <SpeedDialAction key="Load" icon={<FileCopyIcon />} tooltipTitle="Load" onClick={handleLoad} />
              <SpeedDialAction
                key="Map"
                icon={<MapOutlinedIcon />}
                tooltipTitle={showMap ? 'Hide Map' : 'Show Map'}
                onClick={handleShowMap}
              />
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

ItemFlowPanel.defaultProps = {
  smallFormat: true,
  initID: 0
};

ItemFlowPanel.propTypes = {
  smallFormat: propTypes.bool,
  initID: propTypes.number
};

export default ItemFlowPanel;
//export default forwardRef(FlowPanel);
// Good reference to useImperativeHandle is @ https://blog.webdevsimplified.com/2022-06/use-imperative-handle/
