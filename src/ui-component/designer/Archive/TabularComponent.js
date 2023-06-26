import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { CatalogList } from './CatalogList';
import ItemGridPanel from './ItemGridPanel';
import { currencyFormat } from 'utils/generalUtils';
import { NodesContext } from './Nodes/NodesContext';
// import ActionPanel from './Archive/ActionPanel';
// import SpeedDialPanel from './SpeedDialPanel';
// import DataGridPanel from './DataGridPanel';
import TotalPriceLightCard from './TotalPriceLightCard';

function TabularComponent(props) {
  const [totalPrice, setTotalPrice] = useState(0);
  const { nodes } = useContext(NodesContext);

  useEffect(() => {
    let sumOfPrice = nodes.reduce((sum, node) => sum + parseFloat(node.data.price), 0);
    setTotalPrice(sumOfPrice);
  }, [nodes]);

  return (
    <div>
      {/* <ActionPanel /> */}
      {/* <SpeedDialPanel /> */}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '90%', alignItems: 'left' }}>
          {/* <DataGridPanel /> */}
          <ItemGridPanel />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }} draggable>
          <div style={{ display: 'flex', marginBottom: '10px', fontSize: '100%', textTransform: 'uppercase', letterSpacing: '2px' }}>
            <TotalPriceLightCard Price={currencyFormat(totalPrice)} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', overflowX: 'hidden', overflowY: 'auto', paddingLeft: '15px' }}>
            <CatalogList></CatalogList>
          </div>
        </div>
      </div>
    </div>
  );
}

TabularComponent.defaultProps = {
  initiaNodes: [],
  initialEdges: [],
  initialID: 0,
  TotalPrice: 0
};

TabularComponent.propTypes = {
  initiaNodes: [],
  initialEdges: [],
  initialID: 0,
  TotalPrice: 0
};

export default TabularComponent;
