import { Dispatch, SetStateAction } from "react"

export type PokemonSortByType = 'name' | 'height' | 'weight'
export type OrderByType = 'asc' | 'desc'

export interface GetAllPokemonsResponseInterface {
  data: PokemonInterface[]
  isNextPage: boolean
}

export interface PokemonInterface {
  id: number
  name: string
  weight: string
  height: string
  image: string
}

export interface PokemonSortByInterface {
  value?: PokemonSortByType
  order?: OrderByType
}

export interface PokemonFilterByInterface {
  height: {
    min: number
    max: number
  }
  weight: {
    min: number
    max: number
  }
}

export interface PokemonSearchInterface {
  limit: number
  offset: number
  search: string
  filterBy: PokemonFilterByInterface
  sortBy: PokemonSortByInterface
}

export interface PokemonContextInterface {
  data: PokemonInterface[]
  setData?: Dispatch<SetStateAction<PokemonInterface[]>>

  searchParams: PokemonSearchInterface
  setSearchParams?: Dispatch<SetStateAction<PokemonSearchInterface>>

  // eslint-disable-next-line no-unused-vars
  setPage?: (offset: number) => void

  isNextPage: boolean
  setIsNextPage?: Dispatch<SetStateAction<boolean>>
}