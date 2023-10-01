import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sortSlice from './sortSlice';
import shipmentsSlice from './shipmentsSlice';
import modalShipmentDetailsSlice from './modalShipmentDetailsSlice';

const rootReducer = combineReducers({
  sort: sortSlice,
  shipments: shipmentsSlice,
  shipmentDetails: modalShipmentDetailsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
