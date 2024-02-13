import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({Navigation}) =>{
    return (
        <View style = {Styles.container}>
            <Text style = {Styles.text}>Home Page</Text>
            // <Button title="Toggle draw" onPress={()=> Navigation.toggleDrawer()} />
        </View>

    );
};

export default HomeScreen;

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