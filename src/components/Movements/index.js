import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { UsersIcon } from '@heroicons/react/24/solid';

export function Movements({item}) {
    function Type () {
        if (item.type === 'deposit') {
            return <Text style={styles.typeDeposit}>Depósito</Text>
        } else {
            return <Text style={styles.typeWithdraw}>Retirado</Text>
    }}
    return (
        <View style={styles.container}>
            <UsersIcon style={{ marginRight:20, width: 20, height: 20 }}/>
                <Text style={styles.title}>
                {item.value}, 
                <Type />
                {item.date},
                </Text>
        </View>
    );
}
const styles=StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    container: {
        gap: 6,
        flexDirection: 'row',
        alignItems: 'flex-start',
        display: 'flex',
        textAlign: 'center',
    },
    typeDeposit: {
        paddingStart: 10,
        paddingEnd: 10,
        marginBottom: 10,
        marginStart: 20,
        marginRight: 20,
        borderRadius: 10,
        backgroundColor: '#D4E4BC',
    },
    typeWithdraw: {
        paddingStart: 10,
        paddingEnd: 10,
        marginBottom: 10,
        marginStart: 25,
        marginRight: 20,
        borderRadius: 8,
        backgroundColor: '#805D5D',
    },
})

