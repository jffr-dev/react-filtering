import { Dispatch } from 'react';
import { Actions, ActionTypes, Filter, SearchResultItem } from './typings';

export const init = (dispatch: Dispatch<Actions>) => (items: SearchResultItem[], filters: Filter[]) => {
  dispatch({ type: ActionTypes.INIT, payload: { items, filters } });
  dispatch({ type: ActionTypes.UPDATE_FILTER_COUNT });
};

export const setActiveFilters = (dispatch: Dispatch<Actions>) => (activeFilters: { [key: string]: string[] }) => { 
  dispatch({ type: ActionTypes.SET_FILTER, payload: activeFilters });
  dispatch({ type: ActionTypes.UPDATE_RESULTS });
  dispatch({ type: ActionTypes.UPDATE_FILTER_COUNT });
};

export const setSearchTerm = (dispatch: Dispatch<Actions>) => (term: string) => {
  dispatch({ type: ActionTypes.SET_TERM, payload: term });
  dispatch({ type: ActionTypes.UPDATE_RESULTS });
  dispatch({ type: ActionTypes.UPDATE_FILTER_COUNT });
};
