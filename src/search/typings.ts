export type Filter = {
  id: string;
  label: string;
  options: FilterOption[];
};

export type FilterOption = {
  id: string;
  value: string;
};

export type SearchResult = {
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

export type State = {
  allFilters: Filter[];
  allResults: SearchResult[];
  activeFilters: string[][];
  filteredResults: SearchResult[];
}

export type Action = {
  type: string;
  payload: any;
}