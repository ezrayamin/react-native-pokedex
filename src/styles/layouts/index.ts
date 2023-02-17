import {StyleSheet} from "react-native"
export  const layoutStyle = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    },
    wrap: {
        flexWrap: "wrap"
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    alignCenter: {
        alignItems: 'center'
    },
    widthFull: {
        width: '100%'
    },
    width30: {
        width: '30%' 
    },
    widthHalf: {
        width: '50%' 
    }
})