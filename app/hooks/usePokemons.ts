import useSWR, { SWRResponse } from 'swr'
import {
  GetAllPokemonsResponseInterface,
  PokemonSearchInterface,
} from '../pokemon/types'
import { fetcher } from '../utils/fetcher'

export default function usePokemons(
  searchParams: PokemonSearchInterface,
): SWRResponse<GetAllPokemonsResponseInterface> {
  return useSWR(searchParams ? ['/api/pokemon', searchParams] : null, (args) =>
    fetcher(args[0], JSON.stringify(args[1])),
  )
}
