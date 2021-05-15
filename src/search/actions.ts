import { Dispatch } from 'react';
import { Actions, ActionTypes, SearchResult } from './typings';

export const init = (dispatch: Dispatch<Actions>) => (searchResult: SearchResult) => {
  dispatch({ type: ActionTypes.INIT, payload: searchResult });
};

export const setActiveFilters = (dispatch: Dispatch<Actions>) => (activeFilters: { [key: string]: string[] }) => { 
  dispatch({ type: ActionTypes.SET_FILTER, payload: activeFilters });
  dispatch({ type: ActionTypes.UPDATE_RESULTS });
};

export const setSearchTerm = (dispatch: Dispatch<Actions>) => (term: string) => {
  dispatch({ type: ActionTypes.SET_TERM, payload: term });
  dispatch({ type: ActionTypes.UPDATE_RESULTS });
};
