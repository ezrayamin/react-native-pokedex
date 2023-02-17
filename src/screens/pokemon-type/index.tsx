import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import Header from "../../components/header";
import PokeballLogo from "../../components/PokeballLogo";
import colorBasedOnType from "../../constants/colors";
import { getIdFromUrl, pokemonIdFormat } from "../../helpers/string-manipulation";
import Type from "../../models/pokemon-types";
import { StackParamsLinks } from "../../navigators/main-navigation";
import { textStyle } from "../../styles/base";
import { componentStyle } from "../../styles/components";
import { layoutStyle } from "../../styles/layouts";
import Pagination from "./partials/Pagination";
import PokemonFlatList from "./partials/PokemonFlatList";
import { fetchSelectedType } from "./utils/LoadType";

type pokemonTypeScreenRouteType = RouteProp<StackParamsLinks, "Pokemon Type">

export default function PokemonTypeScreen() {
  const [typeData, setTypeData] = useState<Type>({
    id: 0,
    name: "",
    pokemon: [],
  })
  const [color, setColor] = useState("#d3d3d3")
  const [offset, setOffset] = useState(0)
  const limit = 5

  const { params: { url } } = useRoute<pokemonTypeScreenRouteType>();

  useLayoutEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const selectedType = await fetchSelectedType(url)
    setTypeData(selectedType)

    const typeName = selectedType.name
    const typeColor = colorBasedOnType[typeName as keyof typeof colorBasedOnType];
    setColor(typeColor)
  }

  function changePage(selectedPage: number) {
    const newOffset = (selectedPage - 1) * limit
    setOffset(newOffset)
  }

  return (
    <View style={{ backgroundColor: 'white', height: "100%" }}>
      <Header />
      <PokeballLogo
        typeColor={color}
      />
      <View style={{ paddingHorizontal: 24, paddingVertical: 44 }}>
        <Text style={{ ...textStyle.h1, ...textStyle.fontBold, marginBottom: 24, }}>
          Pokemon with {'\n'}Type {typeData.id}
        </Text>
        <View style={{ ...componentStyle.pokemonTypeContainer }}>
          <PokemonFlatList
            pokemons={typeData.pokemon}
            offset={offset}
            limit={limit}
          />
          <Pagination
            typeColor={color}
            totalData={typeData.pokemon.length}
            offset={offset}
            limit={limit}
            changePage={changePage}
          />
        </View>
      </View>
    </View>
  );
}
