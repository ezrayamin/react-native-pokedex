import React, { useLayoutEffect, useState, useRef, useMemo, useCallback } from "react";
import { View, ScrollView } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet"
import Header from "../../components/header";
import { fetchPokemons } from "./utils/LoadPokemon";
import PokemonBottomSheet from "./partials/PokemonBottomSheet";
import HomeContent from "./partials/HomeContent";
import HomePokemonList from "./partials/HomePokemonList";
import Pagination from "../../models/pagination";

export default function HomeScreen() {
    const [selectedPokemonId, setSelectedPokemonId] = useState(0)
    const [pokemonList, setPokemonList] = useState<Pagination>({
        count: 0,
        next: null,
        previous: null,
        results: []
    })
    const [offset, setOffset] = useState(0)
    const [stopFetching, setStopFetching] = useState(false)
    const [isBotoomSheetOpen, setIsBotoomSheetOpen] = useState(false)

    const scrollViewRef = useRef<ScrollView>(null);
    const pokemonListRef = useRef<View>(null);
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['60%', '90%'], []);

    useLayoutEffect(() => {
        fetchPokemonList()
    }, []);


    async function fetchPokemonList() {
        if (stopFetching) {
            return;
        }

        const currentFetchedPokemons = await fetchPokemons(offset)
        await setPokemonList({
            count: currentFetchedPokemons.count,
            next: currentFetchedPokemons.next,
            previous: currentFetchedPokemons.previous,
            results: [...pokemonList.results, ...currentFetchedPokemons.results],
        })

        const totalPokemons = pokemonList.results.length
        setOffset(totalPokemons)

        if (!currentFetchedPokemons.next) {
            setStopFetching(true)
        }
    }

    function scrollToListSection() {
        scrollViewRef.current?.scrollTo({ x: 0, y: 600, animated: true })
    }

    const handleBottomSheet = useCallback((index: number, pokemonId: number) => {
        bottomSheetRef.current?.snapToIndex(index);
        setSelectedPokemonId(pokemonId)
        setIsBotoomSheetOpen(true)
    }, [])

    return (
        <View>
            <Header />
            <ScrollView
                ref={scrollViewRef}
                scrollEventThrottle={16}
                // infinite pagination
                onMomentumScrollEnd={(e) => {
                    const scrollPosition = e.nativeEvent.contentOffset.y
                    const scrollViewHeight = e.nativeEvent.layoutMeasurement.height
                    const contentHeight = e.nativeEvent.contentSize.height

                    const isScrolledToBottom = scrollViewHeight + scrollPosition

                    if (stopFetching) {
                        return;
                    }

                    if (isScrolledToBottom >= (contentHeight)) {
                        fetchPokemonList()
                    }
                }}
            >
                <HomeContent
                    scrollToListSection={scrollToListSection}
                />
                <View
                    ref={pokemonListRef}
                >
                    <HomePokemonList
                        count={pokemonList.count}
                        pokemonList={pokemonList.results}
                        stopFetching={stopFetching}
                        handleBottomSheet={handleBottomSheet}
                    />
                </View>
            </ScrollView>
            {
                isBotoomSheetOpen ?
                    <BottomSheet
                        ref={bottomSheetRef}
                        snapPoints={snapPoints}
                        index={0} //  default bottomsheet view is closed
                        enablePanDownToClose={true}
                        onClose={() => setIsBotoomSheetOpen(false)}
                    >
                        <BottomSheetView>
                            <PokemonBottomSheet
                                key={selectedPokemonId}
                                id={selectedPokemonId}
                            />
                        </BottomSheetView>

                    </BottomSheet>
                    :
                    <View />
            }
        </View>
    );
}
