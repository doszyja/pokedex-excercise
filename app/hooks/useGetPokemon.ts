import useSWR, { SWRResponse } from 'swr'
import { fetcher } from '../utils/fetcher'

export default function useGetPokemon(id: string): SWRResponse {
  return useSWR(`/api/pokemon/${id}`, (url) => fetcher(url))
}
