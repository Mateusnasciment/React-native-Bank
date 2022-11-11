import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';

export function Balance() {
return (
    <View style={styles.container}>
        <view style={styles.item}>
            <Text style={styles.itemTtitle}>Saldo</Text>
            <view>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>1000,00</Text>
            </view>
        </view>

        <view style={styles.item}>
            <Text style={styles.itemTtitle}>Gastos</Text>
            <view>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>400,00</Text>
            </view>
        </view>
    </View>
    );
}
const styles =StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 28,
        paddingEnd: 28,
        marginTop: -24,
        marginStart: 10,
        marginEnd: 15,
        borderRadius: 8,
        paddingBottom:  20,
    }
})