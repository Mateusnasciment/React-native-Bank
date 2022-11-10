import React from 'react-native';

import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import { Entypo } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64 ;

export function Header() {
    return(
        <View style={styles.container}>
            <View  style={styles.container}>
                <Text>
                    Mateus nascimento
                </Text>
                <TouchableOpacity>
                    <Entypo name="user" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#8000FF',
        paddingTop: statusBarHeight,
        alignItems: 'center'
    }
});