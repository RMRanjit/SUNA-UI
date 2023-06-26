import { useState, useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import { Tabs, Tab } from '@mui/material';

// project imports
import { CatalogList } from './CatalogList';
import DesignerMenu from './DesignerMenu';
import FlowPanel from './FlowPanel';
import ItemGridPanel from './ItemGridPanel';

import { currencyFormat } from 'utils/generalUtils';
import { NodesContext } from './Nodes/NodesContext';
// import ActionPanel from './Archive/ActionPanel';
// import SpeedDialPanel from './SpeedDialPanel';
import TotalPriceLightCard from './TotalPriceLightCard';

const DesignerComponent = ({ showCatalog = true }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { nodes } = useContext(NodesContext);

  const [value, setValue] = useState('0');

  // Handler for the Tab's value change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    let sumOfPrice = nodes.reduce((sum, node) => sum + parseFloat(node.data.price), 0);
    setTotalPrice(sumOfPrice);
  }, [nodes]);

  return (
    <div>
      {/* <ActionPanel /> */}
      {/* <SpeedDialPanel /> */}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: showCatalog ? '100%' : '90%', alignItems: 'left', minHeight: '500px' }}>
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
          {value === '0' && <FlowPanel smallFormat={false} />}
          {value === '1' && <ItemGridPanel />}
        </div>

        {showCatalog && (
          <div style={{ display: 'flex', flexDirection: 'column' }} draggable>
            <div style={{ display: 'flex', flexDirection: 'column', overflowX: 'hidden', overflowY: 'auto' }}>
              {/* <CatalogList></CatalogList> */}
              <DesignerMenu />
            </div>
            <div style={{ display: 'flex', marginBottom: '10px', fontSize: '100%', textTransform: 'uppercase', letterSpacing: '2px' }}>
              <TotalPriceLightCard Price={currencyFormat(totalPrice)} />
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
  showCatalog: PropTypes.bool
};

export default DesignerComponent;
