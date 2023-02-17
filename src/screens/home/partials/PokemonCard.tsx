import React from 'react'
import { Image, Text, View } from 'react-native'
import { pokemonIdFormat } from '../../../helpers/string-manipulation'
import { textStyle } from '../../../styles/base'
import { componentStyle } from '../../../styles/components'


function PokemonCard({ id, name }: { id: number, name: string }) {

    return (
        <View
            style={{ ...componentStyle.pokemonCard }}
        >
            <Image
                style={{
                    ...componentStyle.pokemonImageSizeLarge
                }}
                source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                }}
            />
            <View>
                <Text
                    style={{ ...textStyle.h4, ...textStyle.grayText, ...textStyle.fontRegular }}
                >
                    {pokemonIdFormat(id)}
                </Text>
                <Text
                    style={{ ...textStyle.h1, ...textStyle.fontBold }}
                >
                    {name}
                </Text>
            </View>

        </View>
    )
}


export default PokemonCard