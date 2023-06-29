import { useMemo, useState } from 'react';

// material-ui
import {
  Button,
  FormControlLabel,
  Switch,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  IconButton,
  Tooltip
} from '@mui/material';

import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';

// project imports
import { MaterialReactTable } from 'material-react-table';

import { displayIcon } from 'utils/generalUtils';

const data = [
  { name: 'Compute-01', Application: 'Application 01', itemType: 'compute' },
  { name: 'Storage-01', Application: 'Application 01', itemType: 'storage' },
  { name: 'Database-01', Application: 'Application 01', itemType: 'database' },
  { name: 'Compute-02', Application: 'Application 02', itemType: 'compute' },
  { name: 'Storage-02', Application: 'Application 02', itemType: 'storage' },
  { name: 'Database-02', Application: 'Application 02', itemType: 'database' },
  { name: 'Compute-031', Application: 'Application 03', itemType: 'compute' },
  { name: 'Compute-032', Application: 'Application 04', itemType: 'compute' },
  { name: 'Storage-03', Application: 'Application 03', itemType: 'storage' },
  { name: 'Database-03', Application: 'Application 01', itemType: 'database' },
  { name: 'Compute-041', Application: 'Application 04', itemType: 'compute' },
  { name: 'Compute-042', Application: 'Application 04', itemType: 'compute' },
  { name: 'Storage-04', Application: 'Application 04', itemType: 'storage' },
  { name: 'Database-04', Application: 'Application 04', itemType: 'database' },
  { name: 'Compute-06', Application: 'Application 05', itemType: true },
  { name: 'Compute-05', Application: 'Application 05', itemType: 'compute' },
  { name: 'Storage-06', Application: 'Application 06', itemType: 'storage' },
  { name: 'Database-06', Application: 'Application 06', itemType: 'database' },
  { name: 'Compute-03', Application: 'Application 06', itemType: true },
  { name: 'Compute-01', Application: 'Application 06', itemType: 'compute' },
  { name: 'Storage-01', Application: 'Application 06', itemType: 'storage' },
  { name: 'Database-01', Application: 'Application 06', itemType: 'database' },
  { name: 'Compute-03', Application: 'Application 07', itemType: true },
  { name: 'Compute-01', Application: 'Application 07', itemType: 'compute' },
  { name: 'Storage-01', Application: 'Application 07', itemType: 'storage' },
  { name: 'Database-01', Application: 'Application 07', itemType: 'database' },
  { name: 'Compute-03', Application: 'Application 07', itemType: true },
  { name: 'Compute-01', Application: 'Application 07', itemType: 'compute' },
  { name: 'Storage-01', Application: 'Application 07', itemType: 'storage' },
  { name: 'Database-01', Application: 'Application 07', itemType: 'database' },
  { name: 'Compute-03', Application: 'Application 08', itemType: true },
  { name: 'Compute-01', Application: 'Application 08', itemType: 'compute' },
  { name: 'Storage-01', Application: 'Application 08', itemType: 'storage' },
  { name: 'Database-01', Application: 'Application 08', itemType: 'database' },
  { name: 'Compute-03', Application: 'Application 09', itemType: true },
  { name: 'Compute-01', Application: 'Application 09', itemType: 'compute' },
  { name: 'Storage-01', Application: 'Application 09', itemType: 'storage' },
  { name: 'Database-01', Application: 'Application 09', itemType: 'database' },
  { name: 'Compute-03', Application: 'Application 10', itemType: true },
  { name: 'Compute-01', Application: 'Application 10', itemType: 'compute' },
  { name: 'Storage-01', Application: 'Application 10', itemType: 'storage' },
  { name: 'Database-01', Application: 'Application 10', itemType: 'database' }
];

const AppComponent = () => {
  const [tableData, setTableData] = useState(data);
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const ADD_TEXT = 'Add';
  const CANCEL_TEXT = 'Cancel';

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', //access nested data with dot notation
        header: 'Name',
        size: 150
      },
      {
        accessorKey: 'Application',
        header: 'Application',
        size: 150
      },

      {
        accessorKey: 'itemType',
        header: 'itemType',
        Cell: ({ cell, renderedCellValue }) => {
          let value = cell.getValue();
          return (
            <>
              <Tooltip title={value}>{displayIcon(value)}</Tooltip>
            </>
          );
        }
      }
    ],
    []
  );

  const handleAddDialogOpen = () => {
    setOpenAddDialog(true);
  };

  const handleAddDialogClose = (event) => {
    setOpenAddDialog(false);

    if (event.target.innerText.toUpperCase() === ADD_TEXT.toUpperCase()) {
      props.NotificationEvent('Organization Added');
      event.preventDefault();
    }
  };

  const handleSaveCell = (cell, value) => {
    //@ts-ignore
    tableData[cell.row.index][cell.column.id] = value;
    setTableData([...tableData]);
  };

  const onClick = (event) => {
    props.NotificationEvent('Message from Organization');
    event.preventDefault();
  };

  const onDeleteRows = (rows) => {
    console.log(rows);
  };

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={tableData}
        enableDensityToggle={false}
        enableRowSelection
        enableGrouping
        enableEditing
        editingMode="cell"
        enableStickyHeader
        enableStickyFooter
        positionToolbarAlertBanner="bottom"
        renderTopToolbarCustomActions={({ table }) => {
          // const handleRemoveUsers = () => {
          //   confirm('Are you sure you want to remove the selected items?');
          // };

          return (
            <div>
              {/* <Tooltip arrow title="Add Items">
                <span>
                  <IconButton>
                    <AddBoxIcon onClick={handleAddDialogOpen} />
                  </IconButton>
                </span>
              </Tooltip> */}
              <Tooltip arrow title="Remove Items">
                <span>
                  <IconButton disabled={table.getSelectedRowModel().flatRows.length === 0}>
                    <DeleteIcon onClick={onDeleteRows(table.getSelectedRowModel().flatRows)} />
                  </IconButton>
                </span>
              </Tooltip>
            </div>
          );
        }}
        initialState={{
          density: 'compact',
          expanded: true, //expand all groups by default
          //grouping: ['data.itemType'], //an array of columns to group by by default (can be multiple)
          pagination: { pageIndex: 0, pageSize: 20 }
          //sorting: [{ id: 'id', desc: false }] //sort by state by default
        }}
        muiTableBodyCellEditTextFieldProps={({ cell }) => ({
          onBlur: (event) => {
            handleSaveCell(cell, event.target.value);
          }
        })}
      />
      <Dialog open={openAddDialog} onClose={handleAddDialogClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Program</DialogTitle>
        <DialogContent>
          <DialogContentText>Add new projects here..</DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="Name" type="text" fullWidth />
          <TextField autoFocus margin="dense" id="program" label="Program" type="text" fullWidth />
          <InputLabel>Active</InputLabel>
          <Switch color="primary" checked={false} value={false} label="Active" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddDialogClose} color="secondary">
            {CANCEL_TEXT}
          </Button>
          <Button onClick={handleAddDialogClose} color="primary">
            {ADD_TEXT}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AppComponent;
