// Dummy version of filter as prisma really not support between values
// just to make it quick

import { PokemonFilterByInterface, PokemonInterface } from '../pokemon/types'

// https://github.com/prisma/prisma/discussions/11646
export const filterData = (
  data: PokemonInterface[],
  filterBy: PokemonFilterByInterface,
) => {
  const dataWithFiltering = data.filter((pokemon: PokemonInterface) => {
    let shouldStay = true

    const minHeight = filterBy?.height?.min
    if (minHeight !== undefined) {
      shouldStay = pokemon.height >= minHeight
    }

    const maxHeight = filterBy?.height?.max
    if (maxHeight !== undefined) {
      shouldStay = pokemon.height <= maxHeight
    }

    const minWeight = filterBy?.weight?.min
    if (minWeight !== undefined) {
      shouldStay = pokemon.weight >= minWeight
    }

    const maxWeight = filterBy?.weight?.max
    if (maxWeight !== undefined) {
      shouldStay = pokemon.weight <= maxWeight
    }

    return shouldStay
  })

  return dataWithFiltering
}
