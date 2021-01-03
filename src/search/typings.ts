export type Filter = {
  id: string;
  label: string;
  options: FilterOption[];
};

export type FilterOption = {
  id: string;
  value: string;
};

export type SearchResultItem = {
  id: string;
  name: string;
  picture: string;
  age: number;
  eyeColor: string;
  gender: string;
  company: string;
  email: string;
  favoriteFruit: string;
  categories: string[];
};

export type SearchResult = {
  items: SearchResultItem[];
  filters: Filter[];
}

export type State = {
  allFilters: Filter[];
  allResults: SearchResultItem[];
  filteredResults: SearchResultItem[];
  filterCount: { [optionId: string]: number }
  activeFilters?: { [key: string]: string[] };
  term?: string;
}

export type Action<Type, Payload = undefined> = {
  type: Type;
  payload?: Payload;
}

export enum ActionTypes {
  INIT,
  SET_FILTER,
  UPDATE_RESULTS,
  SET_TERM,
  UPDATE_FILTER_COUNT
}

export type InitAction = Action<ActionTypes.INIT, SearchResult>;
export type SetFilterAction = Action<ActionTypes.SET_FILTER, { [key: string]: string[] }>;
export type UpdateResultsAction = Action<ActionTypes.UPDATE_RESULTS>;
export type SetTermAction = Action<ActionTypes.SET_TERM, string>;
export type UpdateFilterCountAction = Action<ActionTypes.UPDATE_FILTER_COUNT>;
export type Actions = InitAction | SetFilterAction | UpdateResultsAction | SetTermAction | UpdateFilterCountAction;