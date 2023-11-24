import React from "react";
import {View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 24
    }
})

class Page2 extends React.Component {
    render() {
        const {route} = this.props;
        const {username, password} = route.params;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>{"Username: " + username}</Text>
                <Text style={styles.text}>{"Password: " + password}</Text>
            </View>
        );
    }
}

export default Page2;