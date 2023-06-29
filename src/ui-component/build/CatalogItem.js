import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { displayIcon } from 'utils/generalUtils';

function CatalogItem(props) {
  const { nodeData, showIcon = false } = props;
  const theme = useTheme();

  // Checking to seee if the ID can be split by "/"
  const idSplit = nodeData.id.toString().split('/');

  nodeData.itemType = showIcon ? (nodeData.categories === undefined ? nodeData.itemType : nodeData.categories[0].name) : idSplit[0];

  return (
    <Box style={{ display: 'flex', flex: 1, flexDirection: 'row', maxWidth: '300px', backgroundColor: theme.palette.background.default }}>
      {displayIcon(nodeData.itemType)}
      <Box sx={{ flexGrow: 1, paddingRight: '15px' }}>
        <Typography variant="h6">{nodeData.name}</Typography>
        <Typography variant="caption">{nodeData.summary || nodeData.configuration}</Typography>
      </Box>
      <Typography variant="h4" style={{ verticalAlign: 'middle', paddingTop: '10px', justifyContent: 'flex-end', display: 'flex' }}>
        ${nodeData.price || '0.00'}
      </Typography>
    </Box>
  );
}

CatalogItem.propTypes = {
  nodeData: PropTypes.object.isRequired
};

export default CatalogItem;
