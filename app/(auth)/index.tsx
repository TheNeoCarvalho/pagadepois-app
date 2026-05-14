import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
                        <TextInput secureTextEntry style={styles.inputSenha}/>
                    </View>
                    <View style={styles.boxBtn}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.txtBtn}>Entrar</Text>
                        </TouchableOpacity>
                        <Text>Não possui uma conta? Cadastre-se</Text>
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
        fontWeight: 500,
        paddingBottom: 6
    },
    inputEmail:{
        width: 326,
        height: 40,
        backgroundColor: '#e6e6e6',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#CACACA',
        padding: 8
    },
    boxSenha:{
        width: '100%',
        paddingHorizontal: 34,
        marginTop: -23
    },
    txtSenha: {
        fontSize: 16,
        color: '#250C77',
        fontWeight: 500,
        paddingBottom: 6
    },
    inputSenha:{
        width: 326,
        height: 40,
        backgroundColor: '#e6e6e6',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#CACACA',
        padding: 8
    }, 
    boxBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 23,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 326,
        height: 57,
        backgroundColor: '#184177',  
    },
    txtBtn:{
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold'
    }
});