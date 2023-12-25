'use client'

import Loading from '@/app/components/Loading'
import Pokemon from '@/app/components/Pokemon'
import useGetPokemon from '@/app/hooks/useGetPokemon'
import Link from 'next/link'

export default function Page({ params }: { params: { id: string } }) {
  const { data: pokemonData, error, isLoading } = useGetPokemon(params.id)

  if (error) return <div>Error</div>
  if (isLoading) return <Loading />

  const { image, name, weight, height } = pokemonData

  return (
    <section className="bg-white">
      <div className="container p-5">
        <Pokemon name={name} image={image} />
        <h3 className="py-1 pt-2 text-xl capitalize font-medium text-center">
          Weight: {weight}
        </h3>
        <h3 className="py-1 pt-2 text-xl capitalize font-medium text-center">
          Height: {height}
        </h3>
        <Link href={'/pokemon'}>go Back</Link>
      </div>
    </section>
  )
}
