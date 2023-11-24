import React from "react";
import {StatusBar, TextInput, TouchableOpacity, View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    inputField:{
        width: 100,
        borderWidth: 1,
        fontSize: 16,
        padding: 3,
        marginBottom: 5
    },
    buttonField:{
        textAlign: "center",
        width: 100,
        borderWidth: 1,
        fontSize: 20,
        padding: 3,
    }
})

class Page1 extends React.Component {
    state = {
        username: "",
        password: ""
    }

    render() {
        const {navigation} = this.props;

        return (
            <View style={styles.container}>
                <TextInput style={styles.inputField} placeholder={"Name"} onChangeText={(text) => {
                    this.setState({username: text})
                }}/>
                <TextInput style={styles.inputField} placeholder={"Password"} onChangeText={(text) => {
                    this.setState({password: text})
                }}/>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Page2", {
                        username: this.state.username,
                        password: this.state.password
                    })
                }}>
                    <Text style={styles.buttonField}>{"Submit"}</Text>
                </TouchableOpacity>
                <StatusBar theme='auto'/>
            </View>
        );
    }
}

export default Page1;