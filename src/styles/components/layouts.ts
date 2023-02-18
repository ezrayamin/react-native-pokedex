import { Platform, StyleSheet } from "react-native"
export const layouts = StyleSheet.create({
    header: { 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 24, 
        paddingVertical: 12, 
        marginTop: Platform.OS == "ios" ? 40 : 0, 
    },
    headerMenu: {
        position: 'absolute',
        top: 80
    },
    itemMenu: {
        paddingVertical: 10,
        paddingHorizontal: 30
    }
})
