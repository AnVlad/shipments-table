import { useSelector } from 'react-redux';
import ModalShipmentDetails from './components/ModalWindow/ModalShipmentDetails';
// eslint-disable-next-line no-unused-vars
import Table from './components/TableComponents/Table';
import './default.scss';

function App() {
  const shipmentDetails = useSelector(
    (state) => state.shipmentDetails.showModal
  );
  return (
    <div className='App'>
      <Table />
      {shipmentDetails && <ModalShipmentDetails />}
    </div>
  );
}

export default App;
