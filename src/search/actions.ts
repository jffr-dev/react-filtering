import { Dispatch } from 'react';
import { Action, Filter, SearchResultItem } from './typings';

export const init = (dispatch: Dispatch<Action>) => (items: SearchResultItem[], filters: Filter[]) => dispatch({ type: 'INIT', payload: { items, filters } });

export const setActiveFilters = (dispatch: Dispatch<Action>) => (activeFilters: string[][]) => { 
  dispatch({ type: 'SET_FILTER', payload: activeFilters });
  dispatch({ type: 'UPDATE_RESULTS' });
};

export const setSearchTerm = (dispatch: Dispatch<Action>) => (term: string) => {
  dispatch({ type: 'SET_TERM', payload: term });
  dispatch({ type: 'UPDATE_RESULTS' });
};
