import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import shipments from '../services/shipments';
import shipmentsList from '../shipments.json';

const initialState = [];

export const setShipmentList = createAsyncThunk(
  'shipments/setShipmentList',
  async () => {
    const shipmentList = await shipments.getShipmentList();
    return shipmentList;
  }
);

export const shipmentsSlice = createSlice({
  name: 'shipments',
  initialState,
  reducers: {
    setShipmentsFromJSONFile: (state, action) => {
      return shipmentsList;
    },
    deleteFromTheShipmentsList: (state, action) => {
      return [
        ...state.filter(
          (shipment) => shipment.orderNo !== action.payload.orderNo
        ),
      ];
    },
    updateShipmentList: (state, action) => {
      return [
        ...state.map((shipment) =>
          shipment.orderNo === action.payload.orderNo
            ? action.payload
            : shipment
        ),
      ];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setShipmentList.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(setShipmentList.rejected, (state, action) => {
        console.error(action.error);
      });
  },
});

export const {
  setShipmentsFromJSONFile,
  deleteFromTheShipmentsList,
  updateShipmentList,
} = shipmentsSlice.actions;
export default shipmentsSlice.reducer;
