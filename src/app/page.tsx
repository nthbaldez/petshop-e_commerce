"use client"

import { ProductsList } from '@/components/ProductsList';
import styles from './page.module.css';
import FilterBar from '@/components/FilterBar';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function Home() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.main}>    
        <FilterBar />
        <ProductsList />
      </main>
    </QueryClientProvider>
  )
}
