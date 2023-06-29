import { useState } from 'react';
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

import TextField from '@mui/material/TextField';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';

// Including component, to make sure that the list does not make the page scroll... Used this as this is being used in the navigation menu too
import PerfectScrollbar from 'react-perfect-scrollbar';

import { displayIcon } from 'utils/generalUtils';
import CatalogItem from 'ui-component/build/CatalogItem';

import { azureCatalogCategories, getCatalogforCategory, getCatalog } from 'dummy_data/azureDerivatives';

export const CategoryHeader = ({ Header }) => {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState(getCatalog());

  const handleClick = () => setOpen(!open);
  const onDragStart = (event, nodeType) => {
    console.log('nodeType: ', nodeType);
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeType));
    event.dataTransfer.effectAllowed = 'move';
  };

  const list = (item) => (
    <List disablePadding key={'DetailedList-' + item}>
      {getCatalogforCategory(Header).map((node, index) => (
        <>
          <ListItem
            key={'Items-' + node.name}
            style={{ display: 'flex', cursor: 'grab', borderBottom: '2px' }}
            //marginBottom: theme.spacing(1),
            onDragStart={(event) => onDragStart(event, node)}
            draggable
          >
            <CatalogItem key={'CI-' + node.name} nodeData={node} maxWidth={'100%'} />
          </ListItem>
        </>
      ))}
    </List>
  );

  return (
    <>
      <ListItemButton key={'ListButton-' + Header} onClick={handleClick}>
        {displayIcon(Header)}
        <ListItemText key={'ListItemText-' + Header} primary={Header} style={{ minWidth: '250px', textTransform: 'uppercase' }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} key={'Collapse-' + Header} timeout="auto" unmountOnExit>
        {list(Header)}
      </Collapse>
    </>
  );
};

function CatalogList(props) {
  const [searchText, setSearchText] = useState(null);
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <PerfectScrollbar
        component="div"
        style={{
          height: !matchUpMd ? 'calc(100vh - 256px)' : 'calc(100vh - 320px)',
          paddingLeft: '16px',
          paddingRight: '16px'
        }}
      >
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={getCatalog().map((option) => option.name)}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          value={searchText}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Catalog- not implemented"
              InputProps={{
                ...params.InputProps,
                type: 'search'
              }}
            />
          )}
        />
        <List>
          {azureCatalogCategories()
            //.filter((obj) => Object.values(obj).some((val) => val.includes(searchText)))
            .map((category, index) => (
              <CategoryHeader Header={category} key={index} />
            ))}
        </List>
      </PerfectScrollbar>
    </>
  );
}

CatalogList.propTypes = {};

export default CatalogList;
