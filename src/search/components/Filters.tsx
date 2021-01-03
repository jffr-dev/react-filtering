import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Filter } from '../typings';

const Filters: FC<TProps> = ({ filters, setActiveFilter }) => {
  const { register, getValues } = useForm();

  const handleChange = () => {
    setActiveFilter(getValues());
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
                name={filter.id}
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
  setActiveFilter: (activeFilters: { [key: string]: string[] }) => void;
};

export default Filters;
