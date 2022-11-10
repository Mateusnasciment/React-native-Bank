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
            <View  style={styles.content}>
                <Text style={styles.username}>
                    Mateus nascimento
                </Text>
                <TouchableOpacity style={styles.buttonUser}>
                    <Entypo name="user" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000FF',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username:{
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonUser:{
        width: 50,
        height: 50
    }
})
