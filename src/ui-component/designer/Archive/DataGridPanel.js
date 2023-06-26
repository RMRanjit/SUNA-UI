import { useCallback, useContext, useEffect } from 'react';
import propTypes from 'prop-types';
// import ReactDataGrid, { textEditor } from 'react-data-grid';
// import 'react-data-grid/lib/styles.css';

import { NodesContext } from './Nodes/NodesContext';
import { useState } from 'react';

const columns = [
  { key: 'id', name: 'ID', width: 20, resizable: false },
  { key: 'name', name: 'Type', width: 150, resizable: false, sortable: true, filterable: true },
  { key: 'Name', name: 'Name', width: 100, editable: true, renderEditCell: textEditor },
  { key: 'configuration', name: 'Configuration', resizable: true, editable: false, sortable: true },
  {
    key: 'price',
    name: 'Price',
    resizable: false,
    sortable: true,
    filterable: true,
    width: 100,
    renderCell: (props) => {
      return <div style={{ textAlign: 'right' }}>{'$' + props.row.price}</div>;
    }
  }
  // { key: 'action', name: 'Action' }
];

function DataGridPanel(props) {
  const { nodes, setNodes, nodeID, setNodeID } = useContext(NodesContext);
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    setItemData(nodes.reduce((iData, node) => iData.concat(node.data), []));
  }, [nodes]);

  let id = nodeID;
  //console.log('Tabular: Setting Node id', id, ' from Node ID', nodeID);
  const getId = () => `${id++}`;

  // useEffect(() => {
  //   //console.log('Tabular: useEffect Node ID', nodeID);
  //   //setNodeID(nodeID+1)
  // }, [nodes]);

  // const onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
  //   this.setState((state) => {
  //     const rows = state.rows.slice();
  //     for (let i = fromRow; i <= toRow; i++) {
  //       rows[i] = { ...rows[i], ...updated };
  //     }
  //     return { rows };
  //   });
  // };
  //https://codesandbox.io/s/5091lpolzk?file=/src/index.js:591-963
  const getCellActions = (column, row) => {
    const cellActions = [
      {
        icon: <span className="glyphicon glyphicon-remove" />,
        callback: () => {
          const rows = [...this.state.rows];
          rows.splice(row.index, 1); //
          this.setState({ rows: rows });
        }
      }
    ];
    return column.key === 'action' ? cellActions : null;
  };

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDelete = useCallback(
    (params) => {
      setNodes((nds) => nds.filter((n) => n.id !== params.id));
      console.log('Delete called with id ' + id);
    },
    [setNodes, id]
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const parsedNode = JSON.parse(type);

      let NodeType = parsedNode.NodeType;
      let id = getId();
      let Name = parsedNode.itemType + '-' + id;
      //console.log('Tabular: Adding node with id', id);
      parsedNode.onDelete = onDelete;

      const newNode = {
        id: id,
        type: NodeType,
        position: { x: Math.random() * 500, y: Math.random() * 500 },
        data: { Name: `${Name} `, id: id, ...parsedNode }
      };

      console.log(newNode);
      setNodes((nds) => nds.concat(newNode));
      setNodeID(nodeID + 1);
    },
    [nodeID, onDelete, setNodeID, setNodes]
  );

  return (
    <div style={{ flex: 1, flexDirection: 'row' }} onDrop={onDrop} onDragOver={onDragOver}>
      {/* <ReactDataGrid
        className="rdg-light"
        columns={columns}
        enableCellSelect={true}
        //onGridRowsUpdated={onGridRowsUpdated}
        rows={itemData}
        //rowHeight={20}
        rowsCount={itemData.length}
        getCellActions={getCellActions}
      /> */}
    </div>
  );
}

DataGridPanel.defaultProps = {};

DataGridPanel.PropTypes = {};

export default DataGridPanel;
