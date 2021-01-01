import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

const Search: FC<TProps> = ({ setSearchTerm }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData: { search: string }) => {
    setSearchTerm(formData.search);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="search" id="search" ref={register} />
      <button type="submit">Search</button>
    </form>
  )
};

type TProps = {
  setSearchTerm: (searchTerm: string) => void;
};

export default Search;
