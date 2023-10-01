export const sortListHelper = (data, sortType) => {
  const keys = Object.keys(sortType);
  const values = Object.values(sortType);

  if (
    keys[0] === 'customer' ||
    keys[0] === 'consignee' ||
    keys[0] === 'trackingNo' ||
    keys[0] === 'status'
  ) {
    const result = [...data].sort((a, b) => (a[keys[0]] < b[keys[0]] ? -1 : 1));

    return values[0] === 'asc' ? result : result.reverse();
  }

  return data;
};
