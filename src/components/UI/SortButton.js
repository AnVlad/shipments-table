import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../redux/sortSlice';

const SortButton = ({ name }) => {
  const sort = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!sort.hasOwnProperty(name)) {
      dispatch(setSort({ [name]: 'asc' }));
      return;
    }

    const dispatchedValue =
      sort[name] === 'asc' ? { [name]: 'desc' } : { [name]: 'asc' };

    dispatch(setSort(dispatchedValue));
  };

  return (
    <button name={name} className='sort-button' onClick={handleClick}>
      <span className={`sort-arrow ${sort[name] === 'asc' ? 'active' : ''}`}>
        ↑
      </span>
      <span className={`sort-arrow ${sort[name] === 'desc' ? 'active' : ''}`}>
        ↓
      </span>
    </button>
  );
};

export default SortButton;
