import { useTheme } from '@mui/material/styles';
import CatalogItem from './CatalogItem';
// get the dummy data
import { catalog } from 'dummy_data/catalog';

export const CatalogList = () => {
  const theme = useTheme();

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeType));
    event.dataTransfer.effectAllowed = 'move';
  };
  return (
    // Loop through items in Catalog and render each item through the CatalogItem component
    catalog.map((source, index) => {
      return (
        <div
          key={index}
          style={{ cursor: 'grab', marginBottom: theme.spacing(1), borderBottom: '2px' }}
          onDragStart={(event) => onDragStart(event, source)}
          draggable
        >
          <CatalogItem nodeData={source} />
        </div>
      );
    })
  );
};
