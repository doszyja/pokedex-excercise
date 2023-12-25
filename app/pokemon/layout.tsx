'use client'

import { createContext, useState } from 'react'
import {
  PokemonContextInterface,
  PokemonInterface,
  PokemonSearchInterface,
} from './types'

const defaultSearchParams: PokemonSearchInterface = {
  limit: 16,
  offset: 0,
  search: '',
  filterBy: {
    height: {
      min: undefined,
      max: undefined,
    },
    weight: {
      min: undefined,
      max: undefined,
    },
  },
  sortBy: {},
}

const defaultValue: PokemonContextInterface = {
  data: [],
  searchParams: defaultSearchParams,
  isNextPage: false
}

export const PokemonContext =
  createContext<PokemonContextInterface>(defaultValue)

export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [searchParams, setSearchParams] =
    useState<PokemonSearchInterface>(defaultSearchParams)
  const [data, setData] = useState<PokemonInterface[]>([])
  const [isNextPage, setIsNextPage] = useState(false)

  const setPage = (offset: number = 0) => {
    setSearchParams({
      ...searchParams,
      offset: searchParams.offset + offset,
    })
  }

  return (
    <PokemonContext.Provider
      value={{
        searchParams,
        setSearchParams,
        data,
        setData,
        setPage,
        isNextPage,
        setIsNextPage,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}
