import axios from 'axios';

const baseURL = 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0';

const getShipmentList = async () => {
  const result = await axios.get(baseURL);

  return result.data;
};

const shipments = { getShipmentList };

export default shipments;
