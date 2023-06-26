import PropTypes from 'prop-types';
import React from 'react';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

import CatalogItem from './CatalogItem';
import { catalog } from 'dummy_data/catalog';
import { displayIcon } from 'utils/generalUtils';

export const DesignerMenuHeader = ({ Header }) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const handleClick = () => setOpen(!open);
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeType));
    event.dataTransfer.effectAllowed = 'move';
  };

  const list = (item) => (
    <List disablePadding>
      {catalog
        .filter((c) => c.itemType == item)
        .map((node, index) => (
          <>
            <ListItem
              key={node.name}
              style={{ display: 'flex', cursor: 'grab', borderBottom: '2px' }}
              //marginBottom: theme.spacing(1),
              onDragStart={(event) => onDragStart(event, node)}
              draggable
              //    disablePadding
              //disableGutters={true}
            >
              <CatalogItem key={node.name} nodeData={node} />
            </ListItem>
            <Divider variant="inset" component="li" key={'div' & index} />
          </>
        ))}
    </List>
  );

  return (
    <>
      <ListItemButton onClick={handleClick}>
        {displayIcon(Header)}
        <ListItemText primary={Header} style={{ minWidth: '250px', textTransform: 'uppercase' }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {list(Header)}
      </Collapse>
    </>
  );
};

DesignerMenuHeader.propTypes = { Header: PropTypes.string };

export const DesignerMenu = (props) => {
  const itemTypes = [...new Set(catalog.map((item) => item.itemType))];

  return (
    <div>
      {itemTypes.map((item, index) => (
        <DesignerMenuHeader key={item} Header={item} />
      ))}
    </div>
  );
};

DesignerMenu.propTypes = {};

export default DesignerMenu;
