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
      const removeEmptyArrays = (el: string[]) => el.length > 0;
      const activeFilters = action.payload?.filter(removeEmptyArrays) as string[][];

      return {
        ...state,
        activeFilters,
      };
    }
    case ActionTypes.UPDATE_RESULTS: {
      const { allResults, term, activeFilters } = state;
      const matchSearchTerm = (result: SearchResultItem) => result.name.toLowerCase().includes(term ?? '');
      const filterActiveCategories = (result: SearchResultItem) => activeFilters.every((activeFilterGroup) =>
        activeFilterGroup.some((filter) => result.categories.includes(filter))
      );

      const filteredResults = allResults
        .filter(matchSearchTerm)
        .filter(filterActiveCategories);

      return {
        ...state,
        filteredResults
      };      
    }
    case ActionTypes.SET_TERM: {
      return {
        ...state,
        term: action.payload?.toLowerCase()
      }
    }
    default:
      return state;
  }
}