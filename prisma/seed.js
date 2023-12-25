import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('main')
  const range = 250

  for (let i = 1; i < range; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    const data = await res.json()

    if (data) {
      const poke = await prisma.pokemon.create({
        data: {
          name: data.name,
          height: data.height,
          weight: data.weight,
          image: data.sprites['front_default'],
        },
      })

      console.log(poke);
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
