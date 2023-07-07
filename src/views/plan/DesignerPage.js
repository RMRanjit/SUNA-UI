import { useParams } from 'react-router-dom';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import DesignerComponent from 'ui-component/designer/DesignerComponent';
import FlowPanel from 'ui-component/designer/ItemFlowPanel';
import { NodesContextProvider } from 'ui-component/designer/Nodes/NodesContext';

/*to be removed after the back end is implemented */
import { blueprintValues } from 'utils/generalUtils';

const DesignerPage = () => {
  const { Name } = useParams();

  //setup the initial nodes and edges. If the name is undefined, then it returns an empty node and edge array.
  const initialObject = blueprintValues(Name);

  return (
    <MainCard>
      <NodesContextProvider initialNodes={initialObject.nodes} initialEdges={initialObject.edges}>
        {/* {Name != undefined ? <DesignerComponent /> : <FlowPanel />} */}
        {/*if there is a name already, there should be nodes, so dont show the catalog, they can always toggle it in the Speed Action dial */}
        <DesignerComponent showCatalog={Name === undefined} />
      </NodesContextProvider>
    </MainCard>
  );
};

export default DesignerPage;
