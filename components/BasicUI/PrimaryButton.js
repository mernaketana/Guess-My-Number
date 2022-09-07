import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../constants/colors"

export default function PrimaryButton({children, onPress}){
    // View should wrap pressable in order to create better styling
    return(
        <View style={styles.outerContainer} >
            <Pressable onPress={onPress} android_ripple={{color: 'grey'}} style={ ({pressed}) => pressed? [styles.innerContainer, styles.pressedIOS] : styles.innerContainer}>
                <Text style={styles.text}>
                    {children}
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 30,
        margin: 4,
        overflow: 'hidden',
    },
    innerContainer: {
        backgroundColor: Colors.light,
        paddingHorizontal: 16,
        paddingVertical: 6,
        elevation: 2,
        height: 40
    },
    text: {
        color: Colors.dark,
        textAlign: 'center',
        fontSize: 18
    },
    pressedIOS: {
        opacity: 0.5
    }
});