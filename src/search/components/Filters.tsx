import { useFormik } from 'formik';
import React, { FC, useEffect } from 'react';
import { Action, Filter } from '../typings';


const Filters: FC<TProps> = ({ filters, dispatch }) => {
  const formik = useFormik({
    initialValues: {},
    onSubmit(values) {},
  });

  useEffect(() => {
    const activeFilters = Object.values(formik.values) as string[][];
    if (activeFilters.length === 0) return;
    dispatch({ type: 'SET_FILTER', payload: activeFilters });;
  }, [formik.values, dispatch]);

  return (
    <form>
      {filters.map((filter) => (
        <fieldset key={filter.id}>
          <legend>{filter.label}</legend>
          {filter.options.map((option) => (
            <label htmlFor={option.value} key={option.id}>
              <input
                type="checkbox"
                id={option.value}
                name={filter.label}
                value={option.id}
                onChange={formik.handleChange}
              />
              {option.value}
            </label>
          ))}
        </fieldset>
      ))}
    </form>
  );
};

type TProps = {
  filters: Filter[];
  dispatch: React.Dispatch<Action>;
};

export default Filters;
