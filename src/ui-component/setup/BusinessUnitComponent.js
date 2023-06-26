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

import { regions } from 'dummy_data/regions';

import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';

// project imports
import { MaterialReactTable } from 'material-react-table';

const data = [
  { name: 'Supply Chain', Organization: 'PFNA', region: 'Eastus2', Activated: true },
  { name: 'Supply Chain', Organization: 'PFNA', region: 'southcentralus', Activated: true },
  { name: 'Logistics', Organization: 'PFNA', region: 'Eastus2', Activated: true },
  { name: 'Human Resources', Organization: 'PFNA', region: 'Eastus2', Activated: false },
  { name: 'Finance', Organization: 'PFNA', region: 'Eastus2', Activated: false },
  { name: 'Planning', Organization: 'PFNA', region: 'Eastus2', Activated: false },
  { name: 'Supply Chain', Organization: 'PBNA', region: 'southcentralus', Activated: false },
  { name: 'Logistics', Organization: 'PBNA', region: 'southcentralus2', Activated: true },
  { name: 'Human Resources', Organization: 'PBNA', region: 'southcentralus', Activated: true },
  { name: 'Finance', Organization: 'PBNA', region: 'southcentralus', Activated: true },
  { name: 'Planning', Organization: 'PBNA', region: 'southcentralus', Activated: true },
  { name: 'Supply Chain', Organization: 'AMESA', region: 'westindia', Activated: true },
  { name: 'Logistics', Organization: 'AMESA', region: 'westindia', Active: true },
  { name: 'Human Resources', Organization: 'AMESA', region: 'southindia', Activated: false },
  { name: 'Finance', Organization: 'AMESA', region: 'southindia', Activated: true },
  { name: 'Planning', Organization: 'AMESA', region: 'southindia', Activated: true },
  { name: 'Planning', Organization: 'AMESA', region: 'westindia', Activated: true }
];

const BusinessUnitComponent = () => {
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
        accessorKey: 'Organization',
        header: 'Organization',
        size: 150
      },
      {
        accessorKey: 'region', //normal accessorKey
        header: 'Virtual Network',
        size: 20,
        editVariant: 'select',
        editSelectOptions: ['A', 'B', 'C']
      },
      {
        accessorKey: 'Activated',
        header: 'Status',
        Cell: ({ cell, renderedCellValue }) => {
          let value = cell.getValue();
          return (
            <FormControlLabel
              label={value ? 'Active' : 'Inactive'}
              value={value ? 'Active' : 'Inactive'}
              control={<Switch color="primary" checked={value} value={value ? 'Yes' : 'No'} />}
              onChange={(event) => {
                event.target.value = event.target.checked ? 'Yes' : 'No';
                //updateValue(event.target.value === 'Inactive' ? false : true);
                //console.log(event);
              }}
            />
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
              <Tooltip arrow title="Add Items">
                <span>
                  <IconButton>
                    <AddBoxIcon onClick={handleAddDialogOpen} />
                  </IconButton>
                </span>
              </Tooltip>
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
        <DialogTitle id="form-dialog-title">New Business Unit</DialogTitle>
        <DialogContent>
          <DialogContentText>Add new business units here..</DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="Name" type="text" fullWidth />
          <TextField autoFocus margin="dense" id="organization" label="Organization" type="text" fullWidth />
          <TextField autoFocus margin="dense" id="vnet" label="Virtual Network" type="text" fullWidth />
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

export default BusinessUnitComponent;
