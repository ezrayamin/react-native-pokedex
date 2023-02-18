import React, { useLayoutEffect, useState, useRef, useMemo, useCallback } from "react";
import { View, ScrollView } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet"
import Header from "../../components/header";
import { fetchPokemons } from "./utils/LoadPokemon";
import PokemonBottomSheet from "./partials/PokemonBottomSheet";
import HomeContent from "./partials/HomeContent";
import HomePokemonList from "./partials/HomePokemonList";
import Pagination from "../../models/pagination";
import { useAppSelector } from "../../redux/hooks";

export default function HomeScreen() {
    const isHeaderMenuOpen = useAppSelector(state => state.headerMenu.isHeaderMenuOpen)

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
    const snapPoints = useMemo(() => ['65%', '90%'], []);

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
        if (index == -1) {
            return bottomSheetRef.current?.close()
        }
        bottomSheetRef.current?.snapToIndex(index);
        setSelectedPokemonId(pokemonId)
        setIsBotoomSheetOpen(true)
    }, [])

    return (
        <View>
            <Header />
            {
                isHeaderMenuOpen ? <View /> :
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
            }
            {
                isBotoomSheetOpen ?
                    <BottomSheet
                        ref={bottomSheetRef}
                        snapPoints={snapPoints}
                        index={0} //  default bottomsheet view is closed
                        enablePanDownToClose={true}
                        onClose={() => setIsBotoomSheetOpen(false)}
                    >
                        <BottomSheetScrollView>
                            <PokemonBottomSheet
                                key={selectedPokemonId}
                                id={selectedPokemonId}
                                closeBottomSheet={handleBottomSheet}
                            />
                        </BottomSheetScrollView>

                    </BottomSheet>
                    :
                    <View />
            }
        </View>
    );
}
