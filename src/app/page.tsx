"use client"

import { ProductsList } from '@/components/ProductsList';
import FilterBar from '@/components/FilterBar';
import { DefaultPageLayout } from '@/components/DefaultPageLayout';
import { PageWrapper } from '@/components/PageWrapper';

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>    
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </DefaultPageLayout>
  )
}
