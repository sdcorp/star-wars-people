import { useQuery } from '@tanstack/react-query'

import { swapi } from 'src/api'

export const usePeopleList = (page = 1) => {
  return useQuery({
    queryKey: ['people', page],
    queryFn: () => swapi.getPeople({ page }),
    staleTime: 1000 * 15, // cache for 15 sec
    select: (response) => response.data,
    keepPreviousData: true,
  })
}

export const usePerson = (id) => {
  return useQuery({
    queryKey: ['person', id],
    queryFn: () => swapi.getPerson(id),
    select: (response) => response.data,
  })
}
