import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Stack from '@mui/material/Stack';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import InputAdornment from '@mui/material/InputAdornment';

import TextField from '@mui/material/TextField';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import { IconSearch } from '@tabler/icons';

// Including component, to make sure that the list does not make the page scroll... Used this as this is being used in the navigation menu too
import PerfectScrollbar from 'react-perfect-scrollbar';

import { displayIcon } from 'utils/generalUtils';
import CatalogItem from 'ui-component/build/CatalogItem';

import { getCatalog } from 'dummy_data/azureDerivatives';
import { useEffect } from 'react';

export const CategoryHeader = ({ category, catalog }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  const onDragStart = (event, nodeType) => {
    console.log('nodeType: ', nodeType);
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeType));
    event.dataTransfer.effectAllowed = 'move';
  };

  const list = () => (
    // component={Stack} direction="row"
    <List disablePadding key={'DetailedList-' + category}>
      {catalog.map((node, index) => (
        <>
          <ListItem
            key={'Items-' + node.name + '-' + index}
            style={{ display: 'flex', cursor: 'grab', borderBottom: '2px' }}
            //marginBottom: theme.spacing(1),
            onDragStart={(event) => onDragStart(event, node)}
            draggable
          >
            <CatalogItem key={'CI-' + node.name + '-' + index} nodeData={node} maxWidth={'100%'} />
          </ListItem>
        </>
      ))}
    </List>
  );

  return (
    <>
      <ListItemButton key={'ListButton-' + category} onClick={handleClick}>
        {displayIcon(category)}
        <ListItemText key={'ListItemText-' + category} primary={category} style={{ minWidth: '300px', textTransform: 'uppercase' }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} key={'Collapse-' + category} timeout="auto" unmountOnExit>
        {list()}
      </Collapse>
    </>
  );
};

function CatalogList(props) {
  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState(getCatalog());
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    const filteredItems =
      searchText.trim() === '' ? getCatalog() : getCatalog().filter((obj) => Object.values(obj).some((val) => val.includes(searchText)));
    //console.log(filteredItems, searchText);
    setItems(filteredItems);
  }, [searchText]);

  const uniqueCategories = () => {
    //get an array of all  categories from azureCatalog
    let categoryArray = [];
    items.map((item, index) => {
      item.categories.map((category, categoryIndex) => {
        categoryArray.push(category);
      });
    });

    const uniqueCategory = [...new Set(categoryArray.map((item) => item.name))];
    //console.log(uniqueCategory);
    return uniqueCategory;
  };
  return (
    <>
      <PerfectScrollbar
        component="div"
        style={{
          height: !matchUpMd ? 'calc(100vh - 256px)' : 'calc(100vh - 320px)'
          // paddingLeft: '16px',
          // paddingRight: '16px'
        }}
      >
        {/* <Autocomplete
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
        /> */}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <TextField
            label="Search Catalog"
            variant="standard"
            value={searchText}
            InputProps={{
              type: 'search',
              startAdornment: (
                <InputAdornment position="start">
                  <IconSearch stroke={1.5} size="1rem" />
                </InputAdornment>
              )
            }}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            style={{ flex: 1, display: 'flex', width: '90%', marginLeft: '10px', marginRight: '10px' }}
          />
          {/* <input
            type="search"
            value={searchText}

            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          /> */}
        </div>
        <List>
          {uniqueCategories().map((category, index) => (
            <CategoryHeader
              category={category}
              catalog={items.filter((item) => item.categories.some((c) => c.name === category))} //send out a filtered list of the catalogs relevant to the category aka header
              key={index}
            />
          ))}
        </List>
      </PerfectScrollbar>
    </>
  );
}

CatalogList.propTypes = {};

export default CatalogList;
