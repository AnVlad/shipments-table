import React from 'react';
import ShipmentDetails from '../ShipmentDetails/ShipmentDetails';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeShipmentDetails } from '../../redux/modalShipmentDetailsSlice';

const ModalShipmentDetails = () => {
  const dispatch = useDispatch();
  const currentShipment = useSelector(
    (state) => state.shipmentDetails.currentShipment
  );

  const closeModalWindow = (event) => {
    event.preventDefault();

    dispatch(closeShipmentDetails());
  };

  return (
    <div onClick={closeModalWindow} className='modal-window'>
      <ShipmentDetails currentShipment={currentShipment} />
    </div>
  );
};

export default ModalShipmentDetails;
