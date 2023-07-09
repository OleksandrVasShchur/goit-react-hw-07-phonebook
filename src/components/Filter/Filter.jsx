import React from 'react';
import css from '../Style/filter.module.css';
import css_n from '../Style/form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <label>
      <span className={css.filter_input}>Find contacts by name</span>

      <input
        className={css_n.input_style}
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      ></input>
    </label>
  );
};

export default Filter;
