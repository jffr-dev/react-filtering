import { Action, State } from './typings';

export default function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        allResults: action.payload.items,
        allFilters: action.payload.filters
      };
    case 'SET_FILTER':
      const { allResults } = state;
      const removeEmptyArrays = (el: string[]) => el.length > 0;
      const activeFilters = action.payload.filter(removeEmptyArrays) as string[][];
      
      const filteredResults = allResults.filter((searchResult) =>
        activeFilters.every((activeFilterGroup) =>
          activeFilterGroup.some((filter) => searchResult.categories.includes(filter))
        )
      );
      return {
        ...state,
        activeFilters,
        filteredResults
      };
    default:
      return state;
  }
}