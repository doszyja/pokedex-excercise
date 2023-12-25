import Image from 'next/image'
import Link from 'next/link'

interface PokemonPropsInterface {
  name: string
  image: string
  id?: number
}

export default function Pokemon({ name, image, id }: PokemonPropsInterface) {
  return (
    <div className="flex flex-col items-center">
      <Link href={id ? `/pokemon/${id}` : '/pokemon'}>
        <Image
          src={image}
          alt={name + ' image'}
          width="200"
          height="200"
          className="bg-[#F2F2F2]"
        />
        <h3 className="py-1 pt-2 text-xl capitalize font-medium text-center">{name}</h3>
      </Link>
    </div>
  )
}
