import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { textStyle } from '../../../styles/base'

export default function Pagination({ typeColor, totalData, offset, limit, changePage} : { typeColor: string, totalData: number, offset: number, limit: number, changePage: (selectedPage: number) => void }) {

    const firstPage = 1
    const lastPage = Math.ceil(totalData / limit)
    const currentPage = offset / limit + 1

    let onePageBefore = currentPage - 1
    let twoPagesBefore = currentPage - 2

    let onePageAfter = currentPage + 1
    let twoPagesAfter = currentPage + 2

    function goTo(selectedPage: number) {
        changePage(selectedPage)
    }

    const styles = StyleSheet.create({
        paginationContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 10,

        },
        activeSquare: {
            borderColor: 'white',
            borderWidth: 1,
            backgroundColor: typeColor,
            height: 35,
            width: 35,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.7,
            marginHorizontal: 6,
            borderRadius: 10
        },
        nonActiveSquare: {
            borderColor: typeColor,
            borderWidth: 1,
            height: 35,
            width: 35,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 8,
            borderRadius: 10
        },
        activePaginationFont: {
            fontWeight: 'bold',
            color: 'white',
            fontSize: 10
        },
        nonActivePaginationFont: {
            fontWeight: 'bold',
            color: typeColor,
            fontSize: 10
        },
    })


    return (
        <View style={{ paddingHorizontal: 5, paddingTop: 20 }}>
            <Text style={{ ...textStyle.fontBold, color: typeColor, textAlign: 'right' }}>Total Data: {totalData}</Text>
            <View>
                {
                    currentPage === firstPage
                        ?
                        <View style={styles.paginationContainer}>
                            <View style={styles.activeSquare}>
                                <Text style={styles.activePaginationFont}> {currentPage} </Text>
                            </View>
                            <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(onePageAfter)}>
                                <Text style={styles.nonActivePaginationFont}> {onePageAfter} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(twoPagesAfter)}>
                                <Text style={styles.nonActivePaginationFont}> {twoPagesAfter} </Text>
                            </TouchableOpacity>
                            <View style={styles.nonActiveSquare}>
                                <Text style={styles.nonActivePaginationFont}> ... </Text>
                            </View>
                            <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(lastPage)}>
                                <Text style={styles.nonActivePaginationFont}> {lastPage} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(onePageAfter)}>
                                <Text style={styles.nonActivePaginationFont}> {'>'} </Text>
                            </TouchableOpacity>
                        </View>
                        :
                        currentPage === 2
                            ?
                            <View style={styles.paginationContainer}>
                                <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(onePageBefore)}>
                                    <Text style={styles.nonActivePaginationFont}> {'<'} </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(onePageBefore)}>
                                    <Text style={styles.nonActivePaginationFont}> {onePageBefore} </Text>
                                </TouchableOpacity>
                                <View style={styles.activeSquare}>
                                    <Text style={styles.activePaginationFont}> {currentPage} </Text>
                                </View>
                                <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(onePageAfter)}>
                                    <Text style={styles.nonActivePaginationFont}> {onePageAfter} </Text>
                                </TouchableOpacity>
                                <View style={styles.nonActiveSquare}>
                                    <Text style={styles.nonActivePaginationFont}> ... </Text>
                                </View>
                                <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(lastPage)}>
                                    <Text style={styles.nonActivePaginationFont}> {lastPage} </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(onePageAfter)}>
                                    <Text style={styles.nonActivePaginationFont}> {'>'} </Text>
                                </TouchableOpacity>
                            </View>
                            :
                            currentPage === lastPage
                                ?
                                <View style={styles.paginationContainer}>
                                    <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(onePageBefore)}>
                                        <Text style={styles.nonActivePaginationFont}> {'<'} </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(firstPage)}>
                                        <Text style={styles.nonActivePaginationFont}> {firstPage} </Text>
                                    </TouchableOpacity>
                                    <View style={styles.nonActiveSquare}>
                                        <Text style={styles.nonActivePaginationFont}> ... </Text>
                                    </View>
                                    <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(twoPagesBefore)}>
                                        <Text style={styles.nonActivePaginationFont}> {twoPagesBefore} </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(onePageBefore)}>
                                        <Text style={styles.nonActivePaginationFont}> {onePageBefore} </Text>
                                    </TouchableOpacity>
                                    <View style={styles.activeSquare}>
                                        <Text style={styles.activePaginationFont}> {currentPage} </Text>
                                    </View>
                                </View>
                                :
                                currentPage < lastPage && currentPage > (lastPage - 2)
                                    ?
                                    <View style={styles.paginationContainer}>
                                        <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(onePageBefore)}>
                                            <Text style={styles.nonActivePaginationFont}> {'<'} </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(firstPage)}>
                                            <Text style={styles.nonActivePaginationFont}> {firstPage} </Text>
                                        </TouchableOpacity>
                                        <View style={styles.nonActiveSquare}>
                                            <Text style={styles.nonActivePaginationFont}> ... </Text>
                                        </View>
                                        <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(onePageBefore)}>
                                            <Text style={styles.nonActivePaginationFont}> {onePageBefore} </Text>
                                        </TouchableOpacity>
                                        <View style={styles.activeSquare}>
                                            <Text style={styles.activePaginationFont}> {currentPage} </Text>
                                        </View>
                                        <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(onePageAfter)}>
                                            <Text style={styles.nonActivePaginationFont}> {onePageAfter} </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(onePageAfter)}>
                                            <Text style={styles.nonActivePaginationFont}> {'>'} </Text>
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    <View style={styles.paginationContainer}>
                                        <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(onePageBefore)}>
                                            <Text style={styles.nonActivePaginationFont}> {'<'} </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(firstPage)}>
                                            <Text style={styles.nonActivePaginationFont}> {firstPage} </Text>
                                        </TouchableOpacity>
                                        <View style={styles.nonActiveSquare}>
                                            <Text style={styles.nonActivePaginationFont}> ... </Text>
                                        </View>
                                        <View style={styles.activeSquare}>
                                            <Text style={styles.activePaginationFont}> {currentPage} </Text>
                                        </View>
                                        <View style={styles.nonActiveSquare}>
                                            <Text style={styles.nonActivePaginationFont}> ... </Text>
                                        </View>
                                        <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(lastPage)}>
                                            <Text style={styles.nonActivePaginationFont}> {lastPage} </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.nonActiveSquare} onPress={() => goTo(onePageAfter)}>
                                            <Text style={styles.nonActivePaginationFont}> {'>'} </Text>
                                        </TouchableOpacity>
                                    </View>
                }
            </View>
        </View>
    )
}
