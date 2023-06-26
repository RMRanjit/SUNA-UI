import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { displayIcon } from 'utils/generalUtils';

function CatalogItem(props) {
  const { nodeData } = props;
  const theme = useTheme();

  return (
    <Box style={{ display: 'flex', flex: 1, flexDirection: 'row', maxWidth: '300px', backgroundColor: theme.palette.background.default }}>
      {/* <Avatar
        sx={{
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.primary.light,
          border: 'none',
          borderColor: theme.palette.primary.main
        }}
        //style={{ width: 40, height: 40, marginRight: theme.spacing(1) }}
        //variant="circular"
      >
        {displayIcon(nodeData.itemType)}
      </Avatar> */}
      {displayIcon(nodeData.itemType)}
      <Box sx={{ flexGrow: 1, paddingRight: '15px' }}>
        <Typography variant="h6">{nodeData.name}</Typography>
        <Typography variant="caption">{nodeData.configuration}</Typography>
      </Box>

      <Typography variant="h4" style={{ verticalAlign: 'middle', paddingTop: '10px', justifyContent: 'flex-end', display: 'flex' }}>
        ${nodeData.price}
      </Typography>
    </Box>
  );
}

CatalogItem.propTypes = {
  nodeData: PropTypes.object.isRequired
};

export default CatalogItem;

// Avatar
//               sx={{
//                 color: theme.palette.primary.dark,
//                 backgroundColor: theme.palette.primary.light,
//                 border: 'none',
//                 borderColor: theme.palette.primary.main
//               }}
//             >
//               <IconMailbox stroke={1.5} size="1.3rem" />
//             </Avatar>
