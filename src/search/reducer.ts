import { Actions, ActionTypes, SearchResultItem, State } from './typings';

export default function reducer(state: State, action: Actions) {
  switch (action.type) {
    case ActionTypes.INIT: {
      return {
        ...state,
        allResults: action.payload?.items ?? [],
        allFilters: action.payload?.filters ?? [],
        filteredResults: action.payload?.items ?? []
      };
    }
    case ActionTypes.SET_FILTER: {
      const activeFilters = Object.fromEntries(
        Object.entries(action.payload!)
          .filter(([_, value])=> value.length > 0)
      );

      return {
        ...state,
        activeFilters
      };
    }
    case ActionTypes.UPDATE_RESULTS: {
      const { allResults, term, activeFilters } = state;
      if (!activeFilters) return state;

      const matchSearchTermFilter = (result: SearchResultItem) => result.name.toLowerCase().includes(term ?? '');
      const filterActiveCategoriesFilter = (result: SearchResultItem) => 
        Object.values(activeFilters).every((activeFilterGroup) =>
          activeFilterGroup.some((filter) => result.categories.includes(filter))
        );

      const filteredResults = allResults
        .filter(matchSearchTermFilter)
        .filter(filterActiveCategoriesFilter);

      return {
        ...state,
        filteredResults
      };      
    }
    case ActionTypes.SET_TERM: {
      return {
        ...state,
        term: action.payload?.toLowerCase()
      };
    }
    default:
      return state;
  }
}