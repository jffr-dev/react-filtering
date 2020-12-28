import React, { FC, useEffect, useReducer } from 'react';

import Api from '../../api';
import Filters from './Filters';
// import Search from './Search';
import Results from './Results';
import reducer from '../reducer';
import { SearchResult, State } from '../typings';

const initialState: State = {
  activeFilters: [],
  allResults: [],
  allFilters: [],
  filteredResults: [],
};

const SearchContainer: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { allResults, allFilters, filteredResults } = state;

  const setActiveFiltersAction = (activeFilters: string[][]) => dispatch({ type: 'SET_FILTER', payload: activeFilters });
  const initAction = (payload: SearchResult ) => dispatch({ type: 'INIT', payload });

  useEffect(() => {
    const getData = async () => {
      const response = await Api.getData();
      initAction({ items: response.items, filters: response.filters })
    };
    getData();
  }, []);

  return (
    <>
      {/* <Search /> */}
      <div className="search-container">
        <div className="search-container__filters">
          <Filters filters={allFilters} setActiveFilter={setActiveFiltersAction} />
        </div>
        <div className="search-container__results">
          <Results items={filteredResults.length > 0 ? filteredResults : allResults} />
        </div>
      </div>
    </>
  );
};

export default SearchContainer;
