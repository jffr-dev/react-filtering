import React, { FC, useEffect, useReducer } from 'react';

import Api from '../../api';
import Filters from './Filters';
import Search from './Search';
import Results from './Results';
import reducer from '../reducer';
import { State } from '../typings';

const initialState: State = {
  activeFilters: [],
  allResults: [],
  allFilters: [],
  filteredResults: [],
};

const SearchContainer: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { allResults, allFilters, filteredResults } = state;

  useEffect(() => {
    const getData = async () => {
      const response = await Api.getData();
      const payload = { items: response.items, filters: response.filters };
      dispatch({ type: 'INIT', payload });
    };
    getData();
  }, []);

  return (
    <>
      {/* <Search /> */}
      <div className="search-container">
        <div className="search-container__filters">
          <Filters filters={allFilters} dispatch={dispatch} />
        </div>
        <div className="search-container__results">
          <Results items={filteredResults.length > 0 ? filteredResults : allResults} />
        </div>
      </div>
    </>
  );
};

export default SearchContainer;
