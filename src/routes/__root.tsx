import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/Header'

import TanstackQueryLayout from '../integrations/tanstack-query/layout'

import type { CandidateType } from '@/types/candidate'

import type { QueryClient } from '@tanstack/react-query'
import Candidate from '@/components/candidate'

interface MyRouterContext {
  queryClient: QueryClient
}

const data: Array<CandidateType> = [
  {
    name: 'John Doe',
    age: 30,
    experience: 5,
    skills: ['JavaScript', 'React', 'Node.js'],
    status: 'Pending',
    working: true,
  },
  {
    name: 'Jane Smith',
    age: 25,
    experience: 3,
    skills: ['Python', 'Django', 'Flask'],
    status: 'Reviewing',
    working: false,
  },
]

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Header />

      <section className="flex flex-row gap-4 m-4">
        {data.map((candidate, index) => (
          <Candidate key={index} data={candidate} />
        ))}
      </section>

      {/* <Outlet /> */}
      <TanStackRouterDevtools />

      <TanstackQueryLayout />
    </>
  ),
})
