import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

export default function PrimaryButton({children}){
    // View should wrap pressable in order to create better styling
    return(
        <View style={styles.outerContainer} >
            <Pressable android_ripple={{color: 'grey'}} style={ ({pressed}) => pressed? [styles.innerContainer, styles.pressedIOS] : styles.innerContainer}>
                <Text style={styles.text}>
                    {children}
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 12,
        margin: 4,
        overflow: 'hidden',
    },
    innerContainer: {
        backgroundColor: 'black',
        paddingHorizontal: 16,
        paddingVertical: 6,
        elevation: 2,
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    pressedIOS: {
        opacity: 0.5
    }
});