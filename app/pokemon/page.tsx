import Search from '../components/Search'
import PokemonList from '../components/PokemonList'

export default async function Page() {
  return (
    <div className="bg-white">
      <Search />
      <PokemonList />
    </div>
  )
}
