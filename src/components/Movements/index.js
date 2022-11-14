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
    return (
        <View style={styles.container}>
            <UsersIcon style={{ marginRight:20, width: 20, height: 20 }}/>
            <Text style={styles.title}>
                {item.name}, 
                {item.id},
                {item.type},
                {item.sexo},
                {item.value},
                </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
    },  
})
