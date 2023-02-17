import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { textStyle } from '../../../styles/base'
import PokemonCard from './PokemonCard';
import Pokemons from '../../../models/pokemon-list';

export default function HomePokemonList({ count,  pokemonList, stopFetching, handleBottomSheet }: { count: number, pokemonList: Pokemons[], stopFetching: boolean, handleBottomSheet: (index: number, pokemonId: number) => void }) {
    return (
        <View
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 24, backgroundColor: '#E6AB09' }}
        >
            <View
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: 130, paddingHorizontal: 50, }}
            >
                <Text
                    style={{ ...textStyle.h1, ...textStyle.fontBold }}
                >
                    PokèDex
                </Text>
                <Text
                    style={{ ...textStyle.h4, ...textStyle.fontRegular, textAlign: 'center' }}
                >
                    All Generation totaling {'\n'}{count} Pokemon
                </Text>
            </View>
            {
                pokemonList.map((pokemon, index) => {
                    // id starts from 1
                    const id = index + 1;
                    const name = pokemon.name
                    if (index < pokemonList.length) {
                        return (
                            <TouchableOpacity
                                key={id}
                                onPress={() => handleBottomSheet(0, id)}
                            >
                                <PokemonCard
                                    id={id}
                                    name={name}
                                />
                            </TouchableOpacity>
                        )
                    }
                })
            }
            {
                !stopFetching ? (
                    <Text
                        style={{ ...textStyle.h4, ...textStyle.fontBold, }}
                    >
                        Load More...
                    </Text>
                ) : <View />
            }
        </View>
    )
}