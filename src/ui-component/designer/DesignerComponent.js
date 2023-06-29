import { useState, useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import { Tabs, Tab, Divider, Box, Drawer } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, useTheme } from '@mui/material/styles';

// project imports
// import { CatalogList } from './CatalogList';

import CatalogList from 'ui-component/build/CatalogList';
import ItemFlowPanel from './ItemFlowPanel';
import ItemGridPanel from './ItemGridPanel';

import TotalPriceLightCard from './TotalPriceLightCard';

const DesignerComponent = ({ showCatalog }) => {
  const [showItemMenuPanel, setShowItemMenuPanel] = useState(showCatalog);

  const [value, setValue] = useState('0');

  // Handler for the Tab's value change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // handle the menu showing
  const handleShowMenu = (event) => {
    console.log('show menu toggled');
    setShowItemMenuPanel(!showItemMenuPanel);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: showItemMenuPanel ? '80%' : '100%', alignItems: 'left', minHeight: '500px' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="Tabular values for what is shown"
          >
            <Tab value="0" label="Visual" />
            <Tab value="1" label="Tabular" />
          </Tabs>
          {value === '0' && <ItemFlowPanel smallFormat={false} handleShowMenu={handleShowMenu} />}
          {value === '1' && <ItemGridPanel />}
        </div>

        {showItemMenuPanel && (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', marginBottom: '2px', fontSize: '100%', textTransform: 'uppercase', letterSpacing: '2px' }}>
              <TotalPriceLightCard />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', overflowX: 'hidden', overflowY: 'auto' }}>
              <CatalogList />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

DesignerComponent.defaultProps = {
  showCatalog: true
};

DesignerComponent.propTypes = {
  showCatalog: propTypes.bool
};

export default DesignerComponent;
