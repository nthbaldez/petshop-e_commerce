import { useEffect, useState } from "react";

export default function useLocalStorage<T>(item: string, initialValue: T) {
  const [ value, setValue ] = useState<T>(initialValue);
  
  useEffect(() => {
    // Perform localStorage action
      let localStorageValue = JSON.parse(localStorage.getItem(item) ?? '');
      setValue(localStorageValue);

  }, [item])

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  }

  return { value, updateLocalStorage };
}
