import React, { useEffect } from 'react';
import TableHeader from './TableHeader';
import TableData from './TableData';
import { useDispatch, useSelector } from 'react-redux';
import {
  // eslint-disable-next-line no-unused-vars
  setShipmentList,
  setShipmentsFromJSONFile,
} from '../../redux/shipmentsSlice';
import { sortListHelper } from '../../helpers/sortListHelper';

import './style.scss';

const Table = () => {
  const shipments = useSelector((state) => state.shipments);
  const sort = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  const sortedList = sortListHelper(shipments, sort);

  useEffect(() => {
    // dispatch(setShipmentList());
    dispatch(setShipmentsFromJSONFile());
  }, [dispatch]);

  return (
    <table>
      <tbody>
        <TableHeader />
        {sortedList.map((shipmentData) => {
          return (
            <TableData key={shipmentData.orderNo} shipmentData={shipmentData} />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
