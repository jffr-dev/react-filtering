import { Actions, ActionTypes, SearchResultItem, State } from './typings';

export default function reducer(state: State, action: Actions): State {
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
    case ActionTypes.SET_TERM: {
      return {
        ...state,
        term: action.payload?.toLowerCase()
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
        filteredResults,
      };      
    }
    case ActionTypes.UPDATE_FILTER_COUNT: {
      const { allFilters, filteredResults } = state;

      const filterCount = allFilters
        .map(filter => (
          filter.options.map(option => ({
            id: option.id,
            value: filteredResults.filter(result => result.categories.includes(option.id)).length
          }))
        ))
        .reduce((acc, current) => acc.concat(current), [])
        .reduce((acc: { [key: string]: number }, current) => {
          acc[current.id] = current.value;
          return acc;
        }, {});

      return {
        ...state,
        filterCount,
      };
    }
    default:
      return state;
  }
}