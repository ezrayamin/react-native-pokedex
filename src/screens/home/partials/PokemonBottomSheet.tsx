import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import { componentStyle } from '../../../styles/components';
import { textStyle } from '../../../styles/base';
import PokemonDetail from '../../../models/pokemon-detail';
import { fetchSelectedPokemon } from '../utils/LoadPokemon';
import { layoutStyle } from '../../../styles/layouts';
import colorBasedOnType from '../../../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { StackParamsLinks } from '../../../navigators/main-navigation';

export default function PokemonBottomSheet({ id, }: { id: number }) {
    const [pokemonData, setPokemonData] = useState<PokemonDetail>({
        id: 0,
        name: '',
        weight: 0,
        height: 0,
        types: [],
        abilities: []
    })
    const [isLoading, setIsLoading] = useState(true)
    type screenNavigationType = NativeStackNavigationProp<StackParamsLinks, "Pokemon Type">
    const navigation = useNavigation<screenNavigationType>();

    useEffect(() => {
        fetchData()
    }, [])
    async function fetchData() {
        const selectedPokemon = await fetchSelectedPokemon(id)
        setPokemonData(selectedPokemon)
        setIsLoading(false)
    }

    function redirectToTypeScreen(url: string) {

        navigation.navigate("Pokemon Type", {
            url
        })
    }

    if (isLoading) {
        return (
        <View>
            <ActivityIndicator size="large"/>
        </View>
        )
    }

    return (
        <View style={{ ...componentStyle.pokemonBottomSheet }}>
            <Text
                style={{ ...textStyle.h1, ...textStyle.fontBold }}
            >
                {pokemonData.name}
            </Text>
            <View
                style={{ ...layoutStyle.widthFull, ...layoutStyle.alignCenter }}
            >
                <Image
                    style={{
                        ...componentStyle.pokemonImageSizeLarge
                    }}
                    source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                    }}
                />
            </View>
            {/* weight */}
            <View
                style={{ ...layoutStyle.row, ...layoutStyle.widthFull, paddingVertical: 5 }}
            >
                <Text
                    style={{ ...textStyle.h4, ...textStyle.fontBold, ...layoutStyle.width30 }}
                >
                    Weight:
                </Text>
                <Text
                    style={{ ...textStyle.h4, ...textStyle.grayText }}
                >
                    {pokemonData.weight}
                </Text>

            </View>
            {/* height */}
            <View
                style={{ ...layoutStyle.row, ...layoutStyle.widthFull, paddingVertical: 5 }}
            >
                <Text
                    style={{ ...textStyle.h4, ...textStyle.fontBold, ...layoutStyle.width30 }}
                >
                    Height:
                </Text>
                <Text
                    style={{ ...textStyle.h4, ...textStyle.grayText }}
                >
                    {pokemonData.height}
                </Text>
            </View>
            {/* abilities */}
            {
                pokemonData.abilities.length > 0 ?
                    <View
                        style={{ ...layoutStyle.row, ...layoutStyle.widthFull, paddingVertical: 5 }}
                    >
                        <Text
                            style={{ ...textStyle.h4, ...textStyle.fontBold, ...layoutStyle.width30 }}
                        >
                            Abilities:
                        </Text>
                        <View>
                            {
                                pokemonData.abilities.map((ability, index) => {
                                    return (
                                        <View
                                            key={index}
                                            style={{ ...layoutStyle.row, marginVertical: 5, }}
                                        >
                                            <Text style={{ ...textStyle.grayText, }}>{'\u2022'}</Text>
                                            <Text style={{ ...textStyle.grayText, }}>{ability.ability.name} {ability.isHidden ? "(hidden)" : ""}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View> : <View />
            }
            {/* types */}
            {
                pokemonData.abilities.length > 0 ?
                    <View
                        style={{ ...layoutStyle.row, ...layoutStyle.widthFull, paddingVertical: 5 }}
                    >
                        <Text
                            style={{ ...textStyle.h4, ...textStyle.fontBold, ...layoutStyle.width30 }}
                        >
                            Type:
                        </Text>
                        <View
                            style={{ ...layoutStyle.row, ...layoutStyle.wrap, ...layoutStyle.widthHalf }}
                        >
                            {
                                pokemonData.types.map((type, index) => {
                                    const url = type.type.url
                                    const typeName = type.type.name;
                                    const typeColor = colorBasedOnType[typeName as keyof typeof colorBasedOnType];
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => redirectToTypeScreen(url)}
                                        >

                                            <View
                                                style={{ ...componentStyle.pokemonTypeContainer, backgroundColor: typeColor }}
                                            >
                                                <Text style={{ ...textStyle.whiteText, ...textStyle.fontBold }}>
                                                    {typeName}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </View> : <View />
            }
        </View>
    )
}