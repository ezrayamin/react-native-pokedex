import { StyleSheet } from "react-native"
export const componentStyle = StyleSheet.create({
    primaryButton: {
        backgroundColor: '#E6AB09',
        borderRadius: 14,
        // padding: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    pokemonCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 25,
        marginVertical: 25,
    },
    pokemonImageSizeLarge: {
        width: 200,
        height: 200,
    },
    pokemonImageSizeSmall: {
        width: 75,
        height: 75,
    },
    pokemonBottomSheet: {
        paddingVertical: 20,
        paddingHorizontal: 36,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        height: '95%',

    },
    pokemonTypeContainer: {
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    }
})