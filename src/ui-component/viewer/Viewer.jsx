import { Paper } from '@mui/material';
import { GraphCanvas, useSelection, RadialMenu, SphereWithIcon } from 'reagraph';
import { useRef } from 'react';
import computerSvg from './svgs/computer.svg';
import ApplicationSVG from 'assets/images/icons/Application.svg';
import ServerSVG from './svgs/Server.svg';

export const Viewer = () => {
  // graph payload (with minimalist structure)
  const data = {
    nodes: [
      {
        id: '1',
        label: 'HARRY123',
        symbolType: 'Wye',
        fill: 'lightblue',
        icon: ServerSVG,
        svg: 'http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_captainamerica.png',
        data: { name: 'Hari123' }
        //size: 600
      },
      { id: '2', label: 'Sally123', icon: computerSvg, fill: 'lightblue', data: { name: 'Sally123' } },
      { id: '3', label: 'Alice123', icon: computerSvg, fill: 'lightblue', data: { name: 'Aklice' } },
      {
        id: '4',
        symbolType: 'diamond',
        fill: 'lightblue',
        //size: 600,
        label: 'TIJNAR',
        icon: computerSvg,
        svg: 'http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_spiderman.png',
        data: { name: 'TIJNAR' }
      },
      {
        id: '5',
        symbolType: 'star',
        fill: 'lightgreen',
        icon: ApplicationSVG,
        svg: 'http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_blackwidow.png',
        data: { name: 'TIJNAR123' }
      },
      { id: '6', label: 'DEVIN', symbolType: 'wye', fill: 'pink', icon: computerSvg, data: { name: 'KOPPU' } },
      { id: '7', label: 'ITUTS', icon: computerSvg, fill: 'lightblue', data: { name: 'TIJMMMNAR' } }
    ],
    edges: [
      {
        id: '1->2',
        source: '1',
        target: '2',
        label: 'Edge 1-2'
      },
      {
        id: '1->3',
        source: '1',
        target: '3',
        label: 'Edge 1-3'
      },
      {
        id: '1->4',
        source: '1',
        target: '4',
        label: 'Edge 1-4'
      },
      {
        id: '2->4',
        source: '2',
        target: '4',
        label: 'Edge 2-4'
      },
      {
        id: '2->5',
        source: '2',
        target: '5',
        label: 'Edge 2-5'
      },
      {
        id: '2->6',
        source: '2',
        target: '6',
        label: 'Edge 2-6'
      },
      {
        id: '3->7',
        source: '3',
        target: '7',
        label: 'Edge 3-7'
      }
    ],
    links: [
      { source: 'Harry', target: 'Sally' },
      { source: 'Harry', target: 'Alice' },
      { source: 'Alice', target: 'Harry' },

      { source: 'Harry', target: 'Ranjit' },
      { source: 'Ranjit', target: 'Rashmi' },
      { source: 'Ranjit', target: 'Stuti' },
      { source: 'Ranjit', target: 'Nived' }
    ]
  };

  // the graph configuration, just override the ones you need
  const myConfig = {
    nodeHighlightBehavior: true,
    directed: false,
    collapsible: true,
    height: 900,
    width: 1500,
    node: {
      color: 'lightblue',
      size: 600,
      highlightStrokeColor: 'red'
    },
    link: {
      highlightColor: 'red',
      type: 'CURVE_SMOOTH',
      renderLabel: true
    }
  };

  // graph event callbacks
  const onClickGraph = function () {
    console.log('Clicked the graph background with data');
  };

  const onClickNode = function (data) {
    console.log(`Clicked node`, data);
    //console.log('node Clicked', nodeId);
  };

  const onRightClickNode = function (event, nodeId) {
    console.log(`Right clicked node ${nodeId}`);
  };

  const onMouseOverNode = function (data) {
    console.log(`Mouse over node `, data);
  };

  const onMouseOutNode = function (nodeId) {
    console.log(`Mouse out node ${nodeId}`);
  };

  const onClickLink = function (source, target) {
    console.log(`Clicked link between ${source} and ${target}`);
  };

  const onRightClickLink = function (event, source, target) {
    console.log(`Right clicked link between ${source} and ${target}`);
  };

  const onMouseOverLink = function (source, target) {
    console.log(`Mouse over in link between ${source} and ${target}`);
  };

  const onMouseOutLink = function (source, target) {
    console.log(`Mouse out link between ${source} and ${target}`);
  };

  const styles = {
    paper: {
      minHeight: 344,
      padding: 0
    },
    legend: {
      paddingTop: 20
    },
    graphDiv: {
      height: 290,
      textAlign: 'center'
    },
    header: {
      fontSize: 24,
      fontWeight: 300,
      //backgroundColor: orange[600],
      color: 'white',
      lineHeight: '48px',
      paddingLeft: '10px'
    }
  };
  const graphRef = useRef(null);

  const { actives, selections, onNodeClick, onCanvasClick, onLasso, onLassoEnd } = useSelection({
    ref: graphRef,
    nodes: data.nodes,
    edges: data.edges
  });

  console.log(selections);

  return (
    <Paper>
      <div className="graphDiv">
        <GraphCanvas
          ref={graphRef}
          nodes={data.nodes}
          edges={data.edges}
          actives={actives}
          draggable
          layoutType="forceDirected2d"
          sizingType="pagerank"
          selections={selections}
          onNodeClick={onClickNode}
          onCanvasClick={onCanvasClick}
          onNodePointerOver={onMouseOverNode}
          renderNode={({ node, ...rest }) => <SphereWithIcon {...rest} node={node} image={node.icon || ''} />}
          contextMenu={({ data, onClose }) => (
            <RadialMenu
              onClose={onClose}
              items={[
                {
                  label: 'Add Node',
                  //   disabled: true,
                  onClick: () => {
                    alert('Add a node');
                    onClose();
                  }
                },

                {
                  label: 'Remove Node',
                  //   disabled: true,
                  onClick: () => {
                    alert('Remove the node');
                    onClose();
                  }
                }
              ]}
            />
          )}
        />
        {/* <Graph
          id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
          data={data}
          config={myConfig}
          onClickNode={onClickNode}
          onRightClickNode={onRightClickNode}
          //onClickGraph={onClickGraph}
          onClickLink={onClickLink}
          onRightClickLink={onRightClickLink}
          onMouseOverNode={onMouseOverNode}
          onMouseOutNode={onMouseOutNode}
          onMouseOverLink={onMouseOverLink}
          onMouseOutLink={onMouseOutLink}
          onZoomChange={() => console.log('zoomed')}
          onClickGraph={() => console.log('clicked')}
        /> */}
      </div>
    </Paper>
  );
};
