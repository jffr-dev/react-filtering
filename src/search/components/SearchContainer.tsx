import axios from 'axios';
import React, { FC, useEffect, useReducer } from 'react';
import * as actions from '../actions';
import reducer from '../reducer';
import { SearchResult, State } from '../typings';
import Filters from './Filters';
import Results from './Results';
import Search from './Search';

const initialState: State = {
  allResults: [],
  allFilters: [],
  filteredResults: [],
};

const SearchContainer: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { allFilters, filteredResults } = state;

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get<SearchResult>('/api/results');
      actions.init(dispatch)(response.data);
    };
    getData();
  }, []);

  return (
    <div className="search-container">
      <div className="search-container__filters">
        <Search setSearchTerm={actions.setSearchTerm(dispatch)} />
        <Filters
          filters={allFilters}
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
