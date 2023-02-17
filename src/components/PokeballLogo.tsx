import { View, Text } from 'react-native'
import React from 'react'

export default function PokeballLogo({ typeColor }: { typeColor: string }) {

    return (
        <View style={{ width: 200, height: 200, borderRadius: 100, backgroundColor: typeColor, transform: [{ translateY: -70, }], position: 'absolute', display: 'flex', flexDirection: 'row', top: 150, right: -100 }}>
            <View style={{ width: 60, height: 20, backgroundColor: 'white', marginTop: 90 }}></View>
            <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: 'white', position: 'absolute', margin: 50, display: 'flex', flexDirection: 'row' }}>
                <View style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: typeColor, position: 'relative', margin: 20 }}></View>
            </View>
            <View style={{ width: 60, height: 20, backgroundColor: 'white', marginTop: 90, marginLeft: 80 }}></View>
        </View>
    )
}
