import React, { useState, } from "react";;
import { useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { layouts } from "../styles/components/layouts";
import { layoutStyle } from "../styles/layouts";
import { textStyle } from "../styles/base";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const route = useRoute();
    const routeName = route.name;

    const headerMenu = [
        {
            name: "Home",
        },
        {
            name: "Pokemon Type"
        }
    ]

    function changeIcon() {
        if (!isMenuOpen) {
            return setIsMenuOpen(true)
        }

        setIsMenuOpen(false)
    }

    return (
        <View>
            <View
                style={{ ...layouts.header }}
            >
                <Image
                    source={require('../assets/images/header-logo.png')}
                />
                <TouchableOpacity onPress={() => changeIcon()} >
                    <FontAwesome5 name={isMenuOpen ? 'times' : 'bars'} solid />
                </TouchableOpacity>
            </View>
            {
                isMenuOpen ?
                    <View
                        style={{ ...layoutStyle.widthFull, ...layouts.headerMenu }}
                    >
                        <FlatList
                            data={headerMenu}
                            renderItem={({ item }) => {
                                const pageName = item.name
                                return (
                                    <View style={{ ...layouts.itemMenu }}>
                                        <Text style={routeName == pageName ? { color: '#E6AB09', ...textStyle.fontBold } : {}}>{item.name}</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>
                    :
                    <View />
            }
        </View>
    );
}