// material-ui
import { Button } from '@mui/material';

// project imports
import CatalogList from 'ui-component/build/CatalogList';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const CatalogPage = () => (
  <MainCard
    title="Catalog"
    secondary={
      <Button variant="contained" size="small">
        New
      </Button>
    }
  >
    <CatalogList />
  </MainCard>
);

export default CatalogPage;
