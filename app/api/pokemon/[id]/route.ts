import { PrismaClient } from '@prisma/client'
import { NextResponse, type NextRequest } from 'next/server'

interface PokemonGetContext {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, context: PokemonGetContext) {
  const prisma = new PrismaClient()

  const id = context?.params?.id
  const parsedId = parseInt(id)

  if (!parsedId) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  try {
    const pokemonData = await prisma.pokemon.findFirst({
      where: {
        id: parsedId,
      },
    })

    return NextResponse.json(pokemonData)
  } catch (error) {
    console.error(error)
    return NextResponse.json({})
  }
}

// Delete pokemon
export async function DELETE(request: NextRequest) {
  return NextResponse.json('DELETE')
}

// Add pokemon
export async function POST(request: NextRequest) {
  return NextResponse.json('POST')
}
