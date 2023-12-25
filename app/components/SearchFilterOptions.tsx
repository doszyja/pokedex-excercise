'use client'

import { useContext, useState } from 'react'
import { PokemonContext } from '../pokemon/layout'
import { PokemonFilterByInterface } from '../pokemon/types'



export default function SearchFilterOptions() {
  const defaultSortValues = {
    height: {
      min: 0,
      max: 0,
    },
    weight: {
      min: 0,
      max: 0,
    },
  }

  const { searchParams, setSearchParams } = useContext(PokemonContext)

  const [isOpen, setIsOpen] = useState(false)
  const [filterOptions, setFilterOptions] =
    useState<PokemonFilterByInterface>(JSON.parse(JSON.stringify(defaultSortValues)))

  const onSubmit = () => {
    setIsOpen(!isOpen)

    setFilterOptions(defaultSortValues)

    if (setSearchParams) {
      setSearchParams({
        ...searchParams,
        filterBy: filterOptions,
      })
    }
  }

  return (
    <section className="flex w-full px-5 py-3 bg-[#616161] text-white justify-center">
      <div className="max-w-xl gap-10 flex flex-col container justify-center">
        {isOpen && (
          <div className="flex flex-col w-full flex-1 justify-center px-6">
            <h2 className="py-1 pb-2 text-2xl">Height</h2>
            <div className="flex justify-center gap-3 mb-3">
              <h2 className="py-1 pb-2 w-8">Min: </h2>
              <input
                className=" p-1 text-black"
                name="heightMin"
                type="number"
                onChange={(e) => {
                  const newOptions = {
                    ...filterOptions,
                  }
                  newOptions.height.min = parseInt(e.target.value)
                  setFilterOptions(newOptions)
                }}
                value={filterOptions.height.min}
              />
            </div>
            <div className="flex justify-center gap-3">
              <h2 className="py-1 pb-2 w-8">Max: </h2>
              <input
                className=" p-1 text-black"
                name="heightMax"
                type="number"
                onChange={(e) => {
                  const newOptions = {
                    ...filterOptions,
                  }
                  newOptions.height.max = parseInt(e.target.value)
                  setFilterOptions(newOptions)
                }}
                value={filterOptions.height.max}
              />
            </div>
            <h2 className="pt-3 py-1 pb-1 text-2xl">Weight</h2>
            <div className="flex justify-center gap-3 mb-3">
              <h2 className="py-1 pb-2 w-8">Min: </h2>
              <input
                className=" p-1 text-black"
                name="heightMin"
                type="number"
                onChange={(e) => {
                  const newOptions = {
                    ...filterOptions,
                  }
                  newOptions.weight.min = parseInt(e.target.value)
                  setFilterOptions(newOptions)
                }}
                value={filterOptions.weight.min}
              />
            </div>
            <div className="flex justify-center gap-3 pb-5">
              <h2 className="py-1 pb-2 w-8">Max: </h2>
              <input
                className=" p-1 text-black"
                name="heightMax"
                type="number"
                onChange={(e) => {
                  const newOptions = {
                    ...filterOptions,
                  }
                  newOptions.weight.max = parseInt(e.target.value)
                  setFilterOptions(newOptions)
                }}
                value={filterOptions.weight.max}
              />
            </div>

            <button
              onClick={() => onSubmit()}
              className="px-10 py-1 text-xl mx-auto my-0 bg-[#EE6B2F]"
            >
              Search
            </button>
          </div>
        )}

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Hide' : 'Show'} Advanced Search
        </button>
      </div>
    </section>
  )
}
