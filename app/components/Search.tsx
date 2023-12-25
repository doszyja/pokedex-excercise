'use client'

import { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../pokemon/layout'

export default function Search() {
  const { searchParams, setSearchParams } = useContext(PokemonContext)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (searchParams.search) setSearchValue(searchParams.search)
  }, [])

  const onSubmit = () => {
    if (!setSearchParams) return

    setSearchParams({
      ...searchParams,
      search: searchValue,
      offset: 0,
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
    })
  }

  return (
    <section className="w-full px-5 py-6 bg-[#333333] text-white justify-center flex">
      <div className="max-w-5xl gap-10 flex container justify-center">
        <div>
          <h2 className="py-1 text-2xl">Name or Number</h2>
          <div className="py-1">
            <input
              className="text-xl text-black py-1"
              name="pokemon"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              className="px-2 py-1 ml-2 text-xl bg-[#EE6B2F]"
              onClick={() => onSubmit()}
            >
              Search
            </button>
          </div>
          <h2 className="pt-2">Use the Advanced Search to explore Pokemon</h2>
        </div>
        <div>
          <p className="p-4 px-5 pt-3 w-96 text-md bg-[#4DAD5B]">
            Search for a Pokemon by name or using its National Pokedex number.
          </p>
        </div>
      </div>
    </section>
  )
}
