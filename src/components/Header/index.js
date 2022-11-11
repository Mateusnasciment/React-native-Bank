import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import { Entypo, AntDesign,MaterialCommunityIcons } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64 ;

export function Header() {
    return(
        <View style={styles.container}>
            <View  style={styles.content}>
                <Text style={styles.username}>
                    Olá, Mateus nascimento
                </Text>
                <TouchableOpacity style={styles.buttonUser}>
                    <AntDesign name="aliwangwang-o1" size={20} color="white" />
                        <MaterialCommunityIcons name="email" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#61329A',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 10,
        paddingEnd: 10,
        paddingBottom: 20
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username:{
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonUser:{
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: 44,
        height: 44
    }
})
