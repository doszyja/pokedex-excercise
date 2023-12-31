'use client'
import { useContext } from 'react'
import { PokemonContext } from '../pokemon/layout'

const options = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 50, label: '50' },
]

export default function Pagination() {
  const { searchParams, setSearchParams, setPage, isNextPage } =
    useContext(PokemonContext)
  const { limit, offset } = searchParams

  const isPreviousPage = offset >= limit
  const onNextPage = () => {
    if (setPage) setPage(limit)
  }
  const onPreviousPage = () => {
    if (setPage) setPage(-limit)
  }

  return (
    <section className="flex w-full px-5 py-3 justify-end">
      <div className="w-auto flex flex-col gap-3 items-start container justify-start">
        <div className="w-auto flex flex-row gap-3 items-start container justify-start">
          <p className="text-md text-gray-600 font-light">Count By:</p>
          <select
            className="p-2 w-72 bg-[#313131] text-white"
            name="countBy"
            defaultValue={limit}
            onChange={(e) => {
              if (!setSearchParams) return

              setSearchParams({
                ...searchParams,
                limit: parseInt(e.target.value),
              })
            }}
          >
            {options.map((option) => (
              <option key={option.label} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {isPreviousPage && (
          <button
            className="text-md text-gray-600 font-light"
            onClick={() => onPreviousPage()}
          >
            Previous Page
          </button>
        )}
        {isNextPage && (
          <button
            className="text-md text-gray-600 font-light"
            onClick={() => onNextPage()}
          >
            Next Page
          </button>
        )}
      </div>
    </section>
  )
}
