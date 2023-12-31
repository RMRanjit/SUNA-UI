import PropTypes from 'prop-types';
import { useContext } from 'react';
import { currencyFormat } from 'utils/generalUtils';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
import { NodesContext } from './Nodes/NodesContext';

// assets
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import ActionPanel from './ActionPanel';
import { Suspense } from 'react';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  dislay: 'flex',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.primary.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.primary.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
    borderRadius: '50%',
    top: -160,
    right: -130
  }
}));

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

const TotalPriceLightCard = ({ isLoading }) => {
  const theme = useTheme();
  const { nodes } = useContext(NodesContext);

  return (
    <Suspense fallback={<TotalIncomeCard />}>
      <CardWrapper border={false} content={false}>
        <Box sx={{ p: 1 }}>
          <List sx={{ py: 0 }}>
            <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{
                    ...theme.typography.commonAvatar,
                    ...theme.typography.largeAvatar,
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.dark
                  }}
                >
                  <SellOutlinedIcon fontSize="inherit" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{
                  py: 0,
                  mt: 0.45,
                  mb: 0.45
                }}
                primary={
                  <Typography
                    variant="h4"
                    sx={{
                      color: theme.palette.grey[500],
                      mt: 0.5,
                      wordSpacing: '0rem'
                    }}
                  >
                    Price configuration/month is
                  </Typography>
                }
                secondary={
                  <Typography variant="h2">{currencyFormat(nodes.reduce((sum, node) => sum + parseFloat(node.data.price), 0))}</Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters sx={{ py: 0 }}>
              <ActionPanel />
            </ListItem>
          </List>
        </Box>
      </CardWrapper>
    </Suspense>
  );
};

TotalPriceLightCard.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalPriceLightCard;
