import { StyleSheet } from "react-native";
import { Text } from "react-native";
import Colors from "../../constants/colors"

export default function Title({title}){
    return <Text style={styles.title}> {title}</Text>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.dark,
        textAlign: 'center',
        paddingTop: 60      ,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: Colors.dark,

    }
});