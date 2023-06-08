import { FilterContext } from '@/contexts/FilterContext';
import { useContext } from 'react';

export function useFilter() {
  return useContext(FilterContext);
}
