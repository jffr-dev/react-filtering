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
  activeFilters: string[][];
  filteredResults: SearchResultItem[];
}

export type Action = {
  type: string;
  payload: any;
}