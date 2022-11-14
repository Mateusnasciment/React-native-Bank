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
                    Olá, Mateus !
                </Text>
                <View style={styles.buttonUser} >
                    <TouchableOpacity >
                        <AntDesign name="aliwangwang-o1" size={24} color="white" />
                    </TouchableOpacity>
                        <TouchableOpacity >
                            <AntDesign name="github" size={24} color="white" href="https://github.com/Mateusnasciment" />
                        </TouchableOpacity>
                            <TouchableOpacity >
                                <MaterialCommunityIcons name="email" size={23} color="white" />
                            </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#612F74',
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
        paddingBottom: 10,
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonUser:{
        display: 'flex',
        flex: '1',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 14,
        height: 14
    }
})
