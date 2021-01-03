import React, { FC, useEffect, useReducer } from 'react';
import { State } from '../typings';
import Api from '../../api';
import Filters from './Filters';
import Search from './Search';
import Results from './Results';
import reducer from '../reducer';
import * as actions from '../actions';

const initialState: State = {
  allResults: [],
  allFilters: [],
  filterCount: {},
  filteredResults: [],
};

const SearchContainer: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { allFilters, filteredResults, filterCount } = state;

  useEffect(() => {
    const getData = async () => {
      const response = await Api.getData();
      actions.init(dispatch)(response.items, response.filters);
    };
    getData();
  }, []);

  return (
    <div className="search-container">
      <div className="search-container__filters">
        <Search setSearchTerm={actions.setSearchTerm(dispatch)} />
        <Filters
          filters={allFilters}
          filterCount={filterCount}
          setActiveFilter={actions.setActiveFilters(dispatch)}
        />
      </div>
      <div className="search-container__results">
        <Results items={filteredResults} />
      </div>
    </div>
  );
};

export default SearchContainer;
