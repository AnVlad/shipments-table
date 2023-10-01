import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
  currentShipment: {},
};

export const modalShipmentDetails = createSlice({
  name: 'modalShipmentDetails',
  initialState,
  reducers: {
    showShipmentDetails: (state, action) => {
      return {
        ...state,
        showModal: true,
        currentShipment: { ...action.payload },
      };
    },
    closeShipmentDetails: (state, action) => {
      return initialState;
    },
  },
});

export const { showShipmentDetails, closeShipmentDetails } =
  modalShipmentDetails.actions;
export default modalShipmentDetails.reducer;
