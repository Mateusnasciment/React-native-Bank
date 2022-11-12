import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export function Movements( { data }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.date}>{data.date}</Text>
            <View>
            </View>
        </TouchableOpacity>
        
    );
}
const styles = StyleSheet.create({
    container: {
        
    },
    date: {
        color: 'white',
        fontSize: 20,
    }
})
