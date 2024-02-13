import { View, Text, StyleSheet } from "react-native";

const ProfileScreen =()=>{
    return (
        <View style = {Styles.container}>
            <Text style = {Styles.text}>Home Page</Text>
        </View>

    );
};

export default ProfileScreen;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },  text: {
            fontSize: 24,
            fontWeight : "bold",
            marginBottom: 16,
    },
}
)