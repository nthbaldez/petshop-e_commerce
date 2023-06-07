"use client"

import ProductsList from '@/components/ProductsList';
import styles from './page.module.css';
import FilterBar from '@/components/FilterBar';

export default function Home() {

  return (
    <main className={styles.main}>
      <FilterBar />
      <ProductsList />
    </main>
  )
}
