import useSWR, { SWRResponse } from 'swr'
import { fetcher } from '../utils/fetcher'

import {
  GetAllPokemonsResponseInterface,
  PokemonSearchInterface,
} from '../pokemon/types'

export default function usePokemons(
  searchParams: PokemonSearchInterface,
): SWRResponse<GetAllPokemonsResponseInterface> {
  return useSWR(searchParams ? ['/api/pokemon', searchParams] : null, (args) =>
    fetcher(args[0], JSON.stringify(args[1])),
  )
  // return useSWR('/api/pokemon', (url) => fetcher(url, body))
}
