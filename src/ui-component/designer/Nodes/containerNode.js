import React, { memo } from 'react';
//import { Handle } from "react-flow-renderer";
import { Handle, useNodeId, NodeResizeControl, NodeResizer } from 'reactflow';
import styled from 'styled-components';

const Container = styled.div`
  padding-inline: 1px;
  padding-top: 0px;
  padding-bottom: 0px;
  background: '#222138';
  border-radius: 10px;
  min-width: 50px;
  min-height: 50px;
  border-color: rgb(115, 113, 181);
  border-width: 0px;
  border-style: solid;
  position: relative;
`;

const Header = styled.div`
    display: flex;

     -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 2;
    //border-bottom-color: "#333154";
    // border-bottom-width: 1px;
    // border-bottom-style: solid;
      &:hover {
    background-color: grey;
    border-bottom-width: 1px;
    border-bottom-style: dotted;
    opacity: 1;
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
  opacity: 0.25;
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

export default memo(({ data, selected, isConnectable }) => {
  const nodeId = useNodeId();
  return (
    <>
      <Container
        style={{
          width: data.width,
          height: data.height,
          backgroundColor: data.backgroundColor,
          opacity: 0.5,
          borderWidth: '2px',
          borderStyle: 'dotted'
        }}
      >
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
            {data.Name}
          </HeaderText>
          <NodeRemove
            onClick={(event) => {
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
        <NodeResizer
          color="#ff0071"
          isVisible={selected}
          style={{ backgroundColor: 'transparent', border: 'none', borderRadius: '0px' }}
          minWidth={100}
        >
          {/* <ResizeIcon /> */}
        </NodeResizer>
        <Footer>Name or Type here</Footer>
      </Container>
    </>
  );
});

function ResizeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#ff0071"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ position: 'absolute', right: 5, bottom: 5 }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="16 20 20 20 20 16" />
      <line x1="14" y1="14" x2="20" y2="20" />
      <polyline points="8 4 4 4 4 8" />
      <line x1="4" y1="4" x2="10" y2="10" />
    </svg>
  );
}
