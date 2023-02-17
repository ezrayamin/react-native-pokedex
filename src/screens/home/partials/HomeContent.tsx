import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { textStyle } from '../../../styles/base'
import { componentStyle } from '../../../styles/components'

export default function HomeContent({ scrollToListSection }: { scrollToListSection: () => void }) {
    return (

        <View
            style={{ padding: 24, paddingBottom: 40, display: 'flex', alignItems: 'flex-end' }}
        >
            <Image source={require('../../../assets/images/home-background.png')} />
            <View style={{ alignItems: 'flex-start' }}>
                <Text
                    style={{ ...textStyle.h1, ...textStyle.fontBold }}
                >
                    All the Pokemon data you'll ever need in one place!
                </Text>
                <Text
                    style={{ ...textStyle.h4, ...textStyle.grayText, ...textStyle.fontRegular }}
                >
                    Thousands of data compiled into one place
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        scrollToListSection()
                    }}
                    style={{ ...componentStyle.primaryButton, marginTop: 24, }}
                >
                    <Text
                        style={{ ...textStyle.whiteText, ...textStyle.h4, ...textStyle.fontBold }}
                    >
                        Check PokèDex
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}