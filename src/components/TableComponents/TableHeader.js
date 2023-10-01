import React from 'react';
import SortButton from '../UI/SortButton';

const TableHeader = () => {
  return (
    <tr className='table-header'>
      <th>Order No</th>
      <th>Delivery date</th>
      <th>
        Customer <SortButton name={'customer'} />
      </th>
      <th>
        Tracking No <SortButton name={'trackingNo'} />
      </th>
      <th>
        Status <SortButton name={'status'} />
      </th>
      <th>
        Consignee <SortButton name={'consignee'} />
      </th>
      <th></th>
    </tr>
  );
};

export default TableHeader;
