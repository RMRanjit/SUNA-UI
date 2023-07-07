// material-ui
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// project imports
import BlueprintList from 'ui-component/build/BlueprintList';
import MainCard from 'ui-component/cards/MainCard';

const BlueprintPage = () => {
  const navigate = useNavigate();

  return (
    <MainCard
      title="Blueprints"
      secondary={
        <Button variant="contained" size="small" onClick={() => navigate('/designer/New')}>
          New Blueprint
        </Button>
      }
    >
      <BlueprintList />
    </MainCard>
  );
};

export default BlueprintPage;
