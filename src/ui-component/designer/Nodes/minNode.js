import React, { memo } from 'react';
import { Handle, useNodeId } from 'reactflow';
import styled from 'styled-components';
import { Avatar, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { displayIcon } from 'utils/generalUtils';

const Container = styled.div`
  padding-inline: 1px;
  padding-top: 0px;
  padding-bottom: 0px;
  background: '#222138';
  border-radius: 1px;
  border-color: rgb(115, 113, 181);
  border-width: 0px;
  border-style: solid;
  position: relative;
`;

const Footer = styled.div`
  font-size: 11px;
  //color: rgb(197, 203, 210);
  position: absolute;
  bottom: 0px;
  top: auto;
  left: -5px;
  text-webkit-align: center;
  transform: translateY(100%);
  // experimental
  border-width: 0px;
  border-style: solid;
  min-width: 70px;
  text-transform: uppercase;
`;

export default memo(({ data, isConnectable }) => {
  const nodeId = useNodeId();
  const theme = useTheme();
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: theme.palette.primary.dark, marginLeft: '-10px', width: '12px', height: '12px' }}
      ></Handle>
      <Handle
        type="source"
        position="right"
        style={{ background: theme.palette.primary.dark, marginRight: '-10px', width: '12px', height: '12px' }}
      ></Handle>
      <Container>
        <Tooltip title={data.configuration || data.summary}>{displayIcon(data.itemType || data.categories[0].name)}</Tooltip>
        {/* <Footer> {data.name}-{nodeId}</Footer> */}
        <Footer>{data.Name}</Footer>
      </Container>
      {/* <Typography style={{}}variant="caption">{data.name}</Typography> */}
    </>
  );
});
