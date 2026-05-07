import { StyleSheet, Text, TextInput, View } from 'react-native';
export default function LoginScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.txtLogin}>Login</Text>
            <Text style={styles.txtWelcome}>Bem vindo(a) ao Paguedepois </Text>

            <View style={styles.box}>
                    <View>
                        <Text>Email</Text>
                        <TextInput />
                    </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#184177',
        paddingTop: 66,
    },
    txtLogin: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 64,
        paddingLeft: 29,
    },
    txtWelcome:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: 400,
        paddingLeft: 29,
    },
    box: {
        backgroundColor: '#FFF',
        width: '100%',
        height: 632,
        borderTopRightRadius: 24,
        marginTop: 55
    }
});