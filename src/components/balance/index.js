import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';

export function Balance({ saldo, gastos}) {
return (
    <View style={styles.container}>

        <view style={styles.item}>
            <Text style={styles.itemSaldo}>Saldo</Text>
            <view style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
            </view>
        </view>


        <view style={styles.item}>
            <Text style={styles.itemGasto}>Gastos</Text>
            <view style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{gastos}</Text>
            </view>
        </view>

    </View>
    );
}
/* A style sheet. */
const styles =StyleSheet.create({
    container: {
        backgroundColor: '#e6e8e3',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingTOP: 20,
        paddingEnd: 28,
        marginTop: -24,
        marginStart: 8,
        marginEnd: 8,
        borderRadius: 8,
        paddingBottom:  40,
        zIndex: 99,
    },
    itemGasto: {
        color: '#ff0000',
        fontSize: 26,
        fontFamily: 'Poppins_400Regular',
    },
    itemSaldo: {
        color: '#00ff00',
        fontSize: 26,
        fontFamily: 'Poppins_400Regular',
    },
    content: {
        flexDirection: 'column',
        aligntItems: 'end',
    },
    currencySymbol: {
        color: '#000000',
        marginRight: 6,
        marginStart: 6,
    },
    balance: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
    },
    item: {
        marginTop: 20,
        flexDirection: 'column',
    }
})