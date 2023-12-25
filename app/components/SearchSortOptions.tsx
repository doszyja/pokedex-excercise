'use client'

import { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../pokemon/layout'
import { PokemonSortByInterface } from '../pokemon/types'

interface SearchSortOptionsInterface {
  value: PokemonSortByInterface
  label: string
}

const options: SearchSortOptionsInterface[] = [
  { value: { value: 'weight', order: 'desc' }, label: 'Highest Weight' },
  { value: { value: 'weight', order: 'asc' }, label: 'Lowest Weight' },
  { value: { value: 'height', order: 'desc' }, label: 'Highest Height' },
  { value: { value: 'height', order: 'asc' }, label: 'Lowest Height' },
  { value: { value: 'name', order: 'desc' }, label: 'Downards Name' },
  { value: { value: 'name', order: 'asc' }, label: 'Upwords Name' },
]

export default function SearchSortOptions() {
  const { setSearchParams, searchParams } = useContext(PokemonContext)
  const [selectedOption, setSelectedOption] = useState<string>()

  useEffect(() => {
    if (!searchParams?.sortBy) return

    const initialValue = options.find(
      (option) => option.value === searchParams?.sortBy,
    )
    if (initialValue) {
      setSelectedOption(initialValue.label)
    }
  }, [searchParams?.sortBy])

  const onSubmit = (sortByValue: PokemonSortByInterface) => {
    if (!setSearchParams) return
  
    setSearchParams({
      ...searchParams,
      sortBy: sortByValue,
    })
  }

  return (
    <section className="flex w-full px-5 py-3 justify-end">
      <div className="w-auto flex flex-row gap-3 items-center container justify-center">
        <p className="text-md text-gray-600 font-light">Sort By:</p>
        <select
          className="p-2 w-72 bg-[#313131] text-white"
          name="sortBy"
          defaultValue={selectedOption}
          onChange={(e) => {
            const selectedOption = options.find(
              (option) => option.label === e.target.value,
            )
            if (selectedOption) {
              setSelectedOption(selectedOption.label)
              onSubmit(selectedOption.value)
            }
          }}
        >
          <option value={undefined}>
            -
          </option>
          {options.map((option) => (
            <option key={option.label} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </section>
  )
}
