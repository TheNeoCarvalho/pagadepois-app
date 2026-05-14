import { StyleSheet, Text, TextInput, View } from 'react-native';
export default function LoginScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.txtLogin}>Login</Text>
            <Text style={styles.txtWelcome}>Bem vindo(a) ao Paguedepois </Text>

            <View style={styles.box}>
                    <View style={styles.boxEmail}>
                        <Text style={styles.txtEmail}>E-mail</Text>
                        <TextInput style={styles.inputEmail}/>
                    </View>
                     <View style={styles.boxSenha}>
                        <Text style={styles.txtSenha}>Senha</Text>
                        <TextInput style={styles.inputSenha}/>
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
    },
    boxEmail:{
        width: '100%',
        paddingHorizontal: 34,
        paddingVertical: 60
    },
    txtEmail: {
        fontSize: 16,
        color: '#250C77',
        fontWeight: 500
    },
    inputEmail:{
        width: 326,
        height: 40,
        backgroundColor: '#e6e6e6',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#CACACA'
    },
    boxSenha:{
        width: '100%',
        paddingHorizontal: 34,
        paddingVertical: 60
    },
    txtSenha: {
        fontSize: 16,
        color: '#250C77',
        fontWeight: 500
    },
    inputSenha:{
        width: 326,
        height: 40,
        backgroundColor: '#e6e6e6',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#CACACA'
    }
});