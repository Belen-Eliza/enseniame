import { TouchableOpacity , StyleSheet} from "react-native"
import { ThemedText } from "./ThemedText"
import { estilos } from "./estilos"


function BotonLogin (props:{callback: Function,textColor: string, bckColor: string, text: string}){
    return (
        <TouchableOpacity onPress={()=>props.callback()} style={[styles.loginButton, estilos.centrado,estilos.shadow,{backgroundColor:props.bckColor}]} >
            <ThemedText type="subtitle" lightColor={props.textColor}>{props.text}</ThemedText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    loginButton: {
        borderRadius: 10,
        height: 50,
        minWidth: 300,
        marginTop: 40,
        marginBottom: 15,
    },
})

export {BotonLogin}