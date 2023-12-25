import Search from '../components/Search'
import PokemonList from '../components/PokemonList'
import SearchFilterOptions from '../components/SearchFilterOptions'
import SearchSortOptions from '../components/SearchSortOptions'
import Pagination from '../components/Pagination'

export default async function Page() {
  return (
    <div className="bg-white">
      <Search />
      <SearchFilterOptions />
      <SearchSortOptions />
      <Pagination />
      <PokemonList />
    </div>
  )
}
