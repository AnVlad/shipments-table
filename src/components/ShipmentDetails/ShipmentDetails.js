import React, { useState } from 'react';
import Input from '../UI/Input';

import './style.scss';
import Button from '../UI/Button';
import { useDispatch } from 'react-redux';
import { updateShipmentList } from '../../redux/shipmentsSlice';
import { closeShipmentDetails } from '../../redux/modalShipmentDetailsSlice';

const ShipmentDetails = ({ currentShipment }) => {
  const [shipment, setShipment] = useState(currentShipment);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.stopPropagation();
  };

  const handleUpdate = (event) => {
    if (!new Date(shipment.date).getDate() || !shipment.date) return;
    if (!shipment.status) return;
    if (!shipment.orderNo) return;
    if (!shipment.customer) return;
    if (!shipment.consignee) return;
    if (!shipment.trackingNo) return;

    dispatch(updateShipmentList(shipment));
    dispatch(closeShipmentDetails());
  };

  return (
    <div onClick={handleClick} className='shipment-details'>
      <div className='shipment-header-line'></div>
      <div className='shipment-information'>
        <h4 className='shipment-information-header'>Shipment details</h4>
        <div className='shipment-inputs'>
          <Input
            className={'shipment-input'}
            name={'orderNo'}
            setValue={setShipment}
            value={shipment.orderNo}
          />
          <Input
            className={'shipment-input'}
            name={'date'}
            setValue={setShipment}
            value={shipment.date}
          />
          <Input
            className={'shipment-input'}
            name={'customer'}
            setValue={setShipment}
            value={shipment.customer}
          />
          <Input
            className={'shipment-input'}
            name={'trackingNo'}
            setValue={setShipment}
            value={shipment.trackingNo}
          />
          <Input
            className={'shipment-input'}
            name={'consignee'}
            setValue={setShipment}
            value={shipment.consignee}
          />
          <Input
            className={'shipment-input'}
            name={'status'}
            setValue={setShipment}
            value={shipment.status}
          />
        </div>
      </div>
      <div className='shipment-footer-line'></div>
      <div className='shipment-details-buttons'>
        <Button color={'primal'} onClick={handleUpdate}>
          Update
        </Button>
      </div>
    </div>
  );
};

export default ShipmentDetails;
