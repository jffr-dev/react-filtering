import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Filter } from '../typings';

const Filters: FC<TProps> = ({ filters, setActiveFilter }) => {
  const { register, getValues } = useForm();

  const handleChange = () => {
    const values = getValues();
    const activeFilters = Object.values(values) as string[][];
    if (activeFilters.length) setActiveFilter(activeFilters);
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
  setActiveFilter: (activeFilters: string[][]) => void;
};

export default Filters;
