'use client'

import Pokemon from './Pokemon'
import Loading from './Loading'
import usePokemons from '../hooks/usePokemons'
import { useContext, useEffect } from 'react'
import { PokemonContext } from '../pokemon/layout'
import { PokemonInterface } from '../pokemon/types'

export default function PokemonList() {
  const { setIsNextPage, searchParams } = useContext(PokemonContext)
  const { data, error, isLoading } = usePokemons(searchParams)

  useEffect(() => {
    if (setIsNextPage && data?.isNextPage !== undefined) {
      setIsNextPage(data?.isNextPage)
    }
  }, [data?.isNextPage, setIsNextPage])

  if (error) return <div>Error</div>
  if (isLoading) return <Loading />

  return (
    <section className="container p-3 my-0 mx-auto">
      <div className="grid gap-4 grid-cols-4 max-w-3xl my-0 mx-auto">
        {data?.data.map((pokemon: PokemonInterface) => {
          return (
            <Pokemon
              name={pokemon.name}
              image={pokemon.image}
              key={pokemon.id}
              id={pokemon.id}
            />
          )
        })}
      </div>
    </section>
  )
}
