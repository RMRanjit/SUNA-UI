import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

import { useContext } from 'react';
import { useTheme } from '@emotion/react';
import { NodesContext } from './Nodes/NodesContext';

import { simpleBlueprint } from 'assets/Blueprint/simpleBlueprint';

// const actions = [
//   { icon: <FileCopyIcon />, name: 'Load', onClick: { handleLoad } },
//   { icon: <SaveIcon />, name: 'Save', onClick: { handleSave } },
//   { icon: <PrintIcon />, name: 'Print', onClick: { handlePrint } },
//   { icon: <ShareIcon />, name: 'Share', onClick: { handleShare } }
// ];

function SpeedDialPanel(props) {
  const theme = useTheme();

  const { nodes, setNodes, edges, setEdges, setNodeID } = useContext(NodesContext);

  const handleLoad = () => {
    setNodes(simpleBlueprint.nodes);
    setEdges(simpleBlueprint.edges);
    setNodeID(simpleBlueprint.nodes.length + 1);
  };
  const handleSave = () => {
    console.log('Handle Save');
  };
  const handlePrint = () => {
    console.log('Handle Print');
  };
  const handleShare = () => {
    console.log('Handle Share');
  };

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 5, right: 0 }}
        icon={<SpeedDialIcon />}
        direction="left"
      >
        <SpeedDialAction key="Load" icon={<FileCopyIcon />} tooltipTitle="Load" onClick={handleLoad} />
        <SpeedDialAction key="Save" icon={<SaveIcon />} tooltipTitle="Save" onClick={handleSave} />
        <SpeedDialAction key="Print" icon={<PrintIcon />} tooltipTitle="Print" onClick={handlePrint} />
        <SpeedDialAction key="Share" icon={<ShareIcon />} tooltipTitle="Share" onClick={handleShare} />
      </SpeedDial>
    </Box>
  );
}

SpeedDialPanel.propTypes = {};

export default SpeedDialPanel;
