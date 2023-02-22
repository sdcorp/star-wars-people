import React from 'react'

import PeopleDetails from './views/people/PeopleDetails'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const PeopleList = React.lazy(() => import('./views/people/PeopleList'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/people', name: 'People', element: PeopleList, exact: true },
  { path: '/people/:id', name: 'Star Wars Character', element: PeopleDetails },
]

export default routes
