import React from "react";;
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text, Image, FlatList, Pressable } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { layouts } from "../styles/components/layouts";
import { layoutStyle } from "../styles/layouts";
import { textStyle } from "../styles/base";
import { open, close } from "../redux/reducers/header-menu"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsLinks } from "../navigators/main-navigation";

export default function Header() {
    const isHeaderMenuOpen = useAppSelector(state => state.headerMenu.isHeaderMenuOpen)
    const dispatch = useAppDispatch()

    type screenNavigationType = NativeStackNavigationProp<StackParamsLinks, "Pokemon Type">
    const navigation = useNavigation<screenNavigationType>()

    const route = useRoute();
    const routeName = route.name;

    const menu = [
        {
            name: "Home",
        },
        {
            name: "Pokemon Type"
        }
    ]

    function resetToHome() {
        navigation.reset({
            index: 0,
            routes: [{name: "Home"}]
        })
    }

    function changeIcon() {
        if (!isHeaderMenuOpen) {
            return dispatch(open())
        }

        dispatch(close())
    }

    return (
        <View>
            <View
                style={{ ...layouts.header }}
            >
                <Pressable
                onPress={() => resetToHome()}
                >
                    <Image
                        source={require('../assets/images/header-logo.png')}
                    />
                </Pressable>
                <Pressable onPress={() => changeIcon()} >
                    <FontAwesome5 name={isHeaderMenuOpen ? 'times' : 'bars'} solid />
                </Pressable>
            </View>
            {
                isHeaderMenuOpen ?
                    <View
                        style={{ ...layoutStyle.widthFull, ...layouts.headerMenu }}
                    >
                        <FlatList
                            data={menu}
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