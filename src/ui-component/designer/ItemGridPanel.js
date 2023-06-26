import { useCallback, useContext, useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';
import { MaterialReactTable } from 'material-react-table';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';

import { NodesContext } from './Nodes/NodesContext';

export const ItemGridPanel = (props) => {
  const { nodes, setNodes, nodeID, setNodeID } = useContext(NodesContext);

  const totalPrice = nodes.reduce((acc, curr) => acc + parseFloat(curr.data.price), 0);

  let id = nodeID;
  //console.log('itemGrid: Setting Node id', id, ' from Node ID', nodeID);
  const getId = () => `${id++}`;

  const columns = useMemo(() => [
    {
      accessorKey: 'id', //access nested data with dot notation
      header: 'ID',
      size: 20
    },
    {
      accessorKey: 'data.itemType', //access nested data with dot notation
      header: 'Type',
      size: 20
    },
    {
      accessorKey: 'data.Name', //access nested data with dot notation
      header: 'Name',
      size: 50
    },
    {
      accessorKey: 'data.configuration',
      header: 'Configuration',
      size: 100
    },
    {
      accessorKey: 'data.OwnerApplication',
      header: 'Application',
      size: 10
    },
    {
      accessorKey: 'data.price', //access nested data with dot notation
      header: 'Price',
      aggregationFns: 'max',
      AggregatedCell: ({ cell, table }) => (
        <>
          Total by {table.getColumn(cell.row.groupingColumnId ?? '').columnDef.header}:{' '}
          <Box sx={{ color: 'success.main', fontWeight: 'bold' }}>
            {cell.getValue()?.toLocaleString?.('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </Box>
        </>
      ),
      Cell: ({ cell }) => (
        <>
          {parseFloat(cell.getValue())?.toLocaleString?.('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}
        </>
      ),
      Footer: () => (
        <Stack>
          <Box>
            {/* Total Cost: */}
            {totalPrice?.toLocaleString?.('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </Box>
        </Stack>
      )
    }
  ]);

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
      <MaterialReactTable
        columns={columns}
        data={nodes}
        enableRowSelection
        enableGrouping
        enableStickyHeader
        enableStickyFooter
        positionToolbarAlertBanner="bottom"
        renderTopToolbarCustomActions={({ table }) => {
          // const handleRemoveUsers = () => {
          //   confirm('Are you sure you want to remove the selected items?');
          // };

          return (
            <div>
              <Tooltip arrow title="Remove Items">
                <span>
                  <IconButton disabled={table.getSelectedRowModel().flatRows.length === 0} onClick={onDelete}>
                    <DeleteIcon />
                  </IconButton>
                </span>
              </Tooltip>
            </div>
          );
        }}
        initialState={{
          density: 'compact',
          expanded: true, //expand all groups by default
          grouping: ['data.itemType'], //an array of columns to group by by default (can be multiple)
          pagination: { pageIndex: 0, pageSize: 20 }
          //sorting: [{ id: 'id', desc: false }] //sort by state by default
        }}
      />
    </div>
  );
};

ItemGridPanel.propTypes = {};

export default ItemGridPanel;
