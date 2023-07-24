"use client"

import { FilterContextProvider } from "@/contexts/FilterContext";
import { defaultTheme } from "@/styles/defaultTheme";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

interface DefaultProviderProps {
  children: ReactNode;
}



export default function DefaultProviders({ children }: DefaultProviderProps) {

  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <FilterContextProvider>
        <ThemeProvider theme={defaultTheme}>
          {children}
        </ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}
