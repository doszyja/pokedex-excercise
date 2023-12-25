import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { PokemonSearchInterface } from '@/app/pokemon/types'
import { filterData } from '@/app/utils/filterData'

export async function POST(request: NextRequest) {
  const prisma = new PrismaClient()

  const { offset, limit, sortBy, filterBy, search } =
    (await request.json()) as PokemonSearchInterface

  try {
    const orderBy = []
    const sortField = sortBy.value ?? ''
    if (['weight', 'height', 'name'].includes(sortField)) {
      orderBy.push({
        [sortField]: sortBy.order,
      })
    }

    const dataWithoutLimit = await prisma.pokemon.findMany({
      skip: offset,
      where: {
        name: {
          contains: search,
        },
      },
      orderBy: orderBy,
    })
    const dataWithFiltering = filterData(dataWithoutLimit, filterBy)
    const data = dataWithFiltering.slice(0, limit)

    return NextResponse.json({
      data,
      isNextPage: dataWithoutLimit?.length > 0 && dataWithoutLimit?.length > limit,
      isPreviousPage: offset >= limit,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      data: [],
      isNextPage: false,
      isPreviousPage: false,
    })
  }
}
