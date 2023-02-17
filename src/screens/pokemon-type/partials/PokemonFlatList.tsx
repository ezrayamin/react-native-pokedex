import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { layoutStyle } from '../../../styles/layouts'
import { textStyle } from '../../../styles/base'
import { componentStyle } from '../../../styles/components'
import { getIdFromUrl, pokemonIdFormat } from '../../../helpers/string-manipulation'
import { PokemonsInType } from '../../../models/pokemon-types'

export default function PokemonFlatList({pokemons, offset, limit,} : {pokemons: PokemonsInType[], offset: number, limit: number,}) {
  const endIndex = offset + limit
  return (
    <FlatList
    data={pokemons.slice(offset, endIndex)}
    renderItem={({ item, index }) => {
      const pokemonName = item.pokemon.name
      const url = item.pokemon.url
      const id = getIdFromUrl(url)
      return (
        <View style={{ ...layoutStyle.row, borderBottomColor: '#7B8082', borderBottomWidth: 0.5, padding: 10 }}>
          <View
            style={{ ...layoutStyle.width30 }}
          >
            <Image
              style={{
                ...componentStyle.pokemonImageSizeSmall
              }}
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
              }}
            />
          </View>
          <View
            style={{ borderLeftColor: '#7B8082', borderLeftWidth: 0.5, paddingVertical: 10, paddingHorizontal: 20 }}
          >
            <Text style={{ ...textStyle.h4, ...textStyle.fontBold, ...textStyle.grayText }}>{pokemonIdFormat(id)}</Text>
            <Text style={{ ...textStyle.h4, ...textStyle.fontBold }}>{pokemonName}</Text>
          </View>
        </View>
      )
    }
    }
  />
  )
}