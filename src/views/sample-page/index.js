import { useMemo } from 'react';
// material-ui
import { Typography } from '@mui/material';
import { getCatalog } from 'dummy_data/azureDerivatives';
import { MaterialReactTable } from 'material-react-table';
import CatalogList from 'ui-component/build/CatalogList';

// project imports
import MainCard from 'ui-component/cards/MainCard';

const SamplePage = () => (
  <MainCard title="Catalog">
    <CatalogList />
    {/* <MaterialReactTable
      columns={useMemo(
        () => [
          {
            accessorKey: 'name', //access nested data with dot notation
            header: 'Name',
            size: 150
          },
          {
            accessorKey: 'summary',
            header: 'Summary',
            size: 150
          },

          {
            accessorKey: 'categories.name',
            header: 'Category'
          }
        ],
        []
      )}
      data={getCatalog()}
    /> */}
  </MainCard>
);

export default SamplePage;
