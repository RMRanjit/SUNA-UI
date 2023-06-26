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
  { sourceApplication: 'Application-01', destinationApplication: 'Application-03', integrationType: 'Batch', Activated: true },
  { sourceApplication: 'Application-01', destinationApplication: 'Application-03', integrationType: 'Batch', Activated: false },
  { sourceApplication: 'Application-01', destinationApplication: 'Application-03', integrationType: 'API' },
  { sourceApplication: 'Application-02', destinationApplication: 'Application-01', integrationType: 'Batch' },
  { sourceApplication: 'Application-02', destinationApplication: 'Application-01', integrationType: 'Unknown' },
  { sourceApplication: 'Application-02', destinationApplication: 'Application-01', integrationType: 'Unknown' },
  { sourceApplication: 'Application-03', destinationApplication: 'Application-01', integrationType: '' },
  { sourceApplication: 'Application-03', destinationApplication: 'Application-01', integrationType: '' },
  { sourceApplication: 'Application-03', destinationApplication: 'Application-01', integrationType: '' },
  { sourceApplication: 'Application-03', destinationApplication: 'Application-02', integrationType: '' },
  { sourceApplication: 'Application-03', destinationApplication: 'Application-02', integrationType: '' },
  { sourceApplication: 'Application-03', destinationApplication: 'Application-02', integrationType: '' }
];
const AppIntegration = () => {
  const [tableData, setTableData] = useState(data);
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const ADD_TEXT = 'Add';
  const CANCEL_TEXT = 'Cancel';

  const columns = useMemo(
    () => [
      {
        accessorKey: 'sourceApplication', //access nested data with dot notation
        header: 'Source',
        size: 150
      },
      {
        accessorKey: 'destinationApplication',
        header: 'Destination',
        size: 150
      },

      {
        accessorKey: 'integrationType',
        header: 'Type'
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

export default AppIntegration;
