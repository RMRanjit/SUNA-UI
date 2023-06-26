import React, { memo } from 'react';
import { Handle, useNodeId } from 'reactflow';
import styled from 'styled-components';
import CatalogItem from '../CatalogItem';
import { useTheme } from '@mui/material/styles';

const Container = styled.div`
  padding-inline: 1px;
  padding-top: 0px;
  padding-bottom: 0px;
  background: '#222138';
  border-radius: 1px;
  border-color: rgb(115, 113, 181);
  border-width: 1px;
  border-style: solid;
  position: relative;
  widht: 100px;
`;

const Header = styled.div`
    display: flex;
     -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 2;   
    border-bottom-color: "#333154";
    border-bottom-width: 1px;
    border-bottom-style: solid;
    background-color: 'white';
      &:hover {
       //background-color: ${(props) => props.theme};//#1e88e5; theme.palette.primary.dark
       background-color: #1e88e5;
        color: white;
`;
const HeaderText = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 80%;
  text-transform: uppercase;
`;
const NodeRemove = styled.div`
  color: '#eef0f2';
  cursor: pointer;
  opacity: 0.15;
`;

const Footer = styled.div`
  font-size: 11px;
  color: rgb(197, 203, 210);
  position: absolute;
  bottom: 0px;
  top: auto;
  left: 0px;
  transform: translateY(100%);
`;

export default memo(({ data, isConnectable }) => {
  const nodeId = useNodeId();
  const theme = useTheme();
  return (
    <>
      <Container>
        <Handle
          type="target"
          position="left"
          style={{
            background: theme.palette.primary.dark,
            marginLeft: '-7px',
            width: '12px',
            height: '52%',
            borderTopLeftRadius: '6px',
            borderTopRightRadius: '0px',
            borderBottomRightRadius: '0px',
            borderBottomLeftRadius: '6px'
          }}
        ></Handle>
        <Handle
          type="source"
          position="right"
          style={{
            background: theme.palette.primary.dark,
            marginRight: '-7px',
            width: '12px',
            height: '105%',
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '6px',
            borderBottomRightRadius: '6px',
            borderBottomLeftRadius: '0px'
          }}
        ></Handle>

        <Header>
          <HeaderText>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
            {/* {data.itemType}-{nodeId} */}
            {data.Name}
          </HeaderText>
          <NodeRemove
            onClick={(event) => {
              console.log('NodeRemove clicked for node id', nodeId);
              data.onDelete(nodeId);
            }}
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </NodeRemove>
        </Header>

        <div style={{ padding: 5, display: 'flex', flexDirection: 'column', backgroundColor: theme.palette.background.default }}>
          <CatalogItem nodeData={data} />
        </div>

        <Footer>{data.Destination}</Footer>
      </Container>
    </>
  );
});
