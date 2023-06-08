"use client"

import { FilterTypes } from "@/types/filterTypes";
import { PriorityTypes } from "@/types/priorityTypes";
import { ReactNode, createContext, useState } from "react";


interface FilterProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext({
  search: '',
  setSearch: (value: string) => {},
  page: 0,
  setPage: (value: number) => {},
  type: FilterTypes.ALL,
  setType: (value: FilterTypes) => {},
  priority: PriorityTypes.NEWS,
  setPriority: (value: PriorityTypes) => {},
})


export function FilterContextProvider({ children }: FilterProviderProps) {
  const [ search, setSearch ] = useState('');
  const [ page, setPage ] = useState(0);
  const [ type, setType ] = useState(FilterTypes.ALL);
  const [ priority, setPriority ] = useState(PriorityTypes.NEWS);

  return (

    <FilterContext.Provider value={{ search, setSearch, page, setPage, type, setType, priority, setPriority }}>
      {children}
    </FilterContext.Provider>
  )
}
