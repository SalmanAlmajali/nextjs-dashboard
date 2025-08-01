import React from 'react'
import { lusitana } from '../../ui/fonts'
import RevenueChart from '../../ui/dashboard/revenue-chart'
import LatestInvoices from '../../ui/dashboard/latest-invoices'
import { Suspense } from 'react'
import { CardSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons'
import CardWrapper from '@/app/ui/dashboard/cards'
import { Metadata } from 'next'

export const metadata: Metadata  = {
  title: 'Dashboard',
}

async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-6 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  )
}

export default Page