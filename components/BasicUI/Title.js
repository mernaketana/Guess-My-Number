import { StyleSheet } from "react-native";
import { Text, Platform } from "react-native";
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
        paddingTop: 30      ,
        paddingBottom: 10,
        borderBottomWidth: Platform.select({ios: 0, android: 2}), // Platform.OS === 'android' ? 2 : 0,
        borderBottomColor: Colors.dark,
        maxWidth: '90%',
        width: 300
    }
});