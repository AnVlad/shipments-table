import React from 'react';
import Button from '../UI/Button';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

import { showShipmentDetails } from '../../redux/modalShipmentDetailsSlice';
import { deleteFromTheShipmentsList } from '../../redux/shipmentsSlice';

const TableData = ({ shipmentData }) => {
  const dispatch = useDispatch();

  const { orderNo, date, customer, trackingNo, status, consignee } =
    shipmentData;

  const showDetails = () => {
    const currentShipment = {
      orderNo,
      date,
      customer,
      trackingNo,
      status,
      consignee,
    };

    dispatch(showShipmentDetails(currentShipment));
  };

  const deleteFromList = () => {
    const currentShipment = {
      orderNo,
      date,
      customer,
      trackingNo,
      status,
      consignee,
    };

    dispatch(deleteFromTheShipmentsList(currentShipment));
  };

  return (
    <tr className='table-data'>
      <td>{orderNo}</td>
      <td>{date}</td>
      <td>{customer}</td>
      <td>{trackingNo}</td>
      <td>{status}</td>
      <td>{consignee}</td>
      <td className='buttons'>
        <Button color={'primal'} onClick={showDetails}>
          <FontAwesomeIcon
            icon={faAddressCard}
            size='sm'
            style={{ color: '#ffffff' }}
          />
        </Button>
        <Button color={'secondary'} onClick={deleteFromList}>
          x
        </Button>
      </td>
    </tr>
  );
};

export default TableData;
