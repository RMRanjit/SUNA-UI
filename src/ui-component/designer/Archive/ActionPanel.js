import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useContext } from 'react';
import { NodesContext } from '../Nodes/NodesContext';

import { simpleBlueprint } from 'assets/Blueprint/simpleBlueprint';

function ActionPanel(props) {
  const theme = useTheme();

  const { nodes, setNodes, edges, setEdges } = useContext(NodesContext);

  const handleLoad = () => {
    setNodes(simpleBlueprint.nodes);
    setEdges(simpleBlueprint.edges);
  };

  const handleSave = () => {
    const saveObject = { nodes, edges };
    console.log(saveObject);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '15px',
        marginBottom: '10px',
        marginTop: '10px',
        background: 'aliceblue', //theme.background,
        borderWidth: '0px',
        borderStyle: 'dashed',
        borderColor: 'gray',
        borderRadius: '5px'
      }}
    >
      <Button style={{ marginRight: '10px' }} variant="contained" color="primary" size="small" onClick={handleLoad}>
        Load
      </Button>
      <Button variant="outlined" color="secondary" size="small" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}

ActionPanel.propTypes = {};

export default ActionPanel;
