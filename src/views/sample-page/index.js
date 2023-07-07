import { useMemo } from 'react';
// material-ui
import { Typography } from '@mui/material';
import { getCatalog } from 'dummy_data/azureDerivatives';
import { MaterialReactTable } from 'material-react-table';
import { Viewer } from 'ui-component/viewer/Viewer';

// project imports
import MainCard from 'ui-component/cards/MainCard';

const SamplePage = () => (
  <MainCard title="Catalog">
    <Viewer />
  </MainCard>
);

export default SamplePage;
