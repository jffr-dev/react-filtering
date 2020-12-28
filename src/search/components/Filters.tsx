import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Action, Filter } from '../typings';

const Filters: FC<TProps> = ({ filters, dispatch }) => {
  const { register, getValues } = useForm();

  const handleChange = () => {
    const values = getValues();
    const activeFilters = Object.values(values) as string[][];
    if (activeFilters.length) dispatch({ type: 'SET_FILTER', payload: activeFilters });
  };

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
                ref={register}
                onChange={handleChange}
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
