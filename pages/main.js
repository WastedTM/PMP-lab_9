import React from "react";
import {Text, TouchableOpacity, View, StyleSheet, StatusBar} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        borderWidth: 1,
        fontSize: 24,
        borderColor: 'gray',
        padding: 3,
        marginBottom: 5
    }
})

class Main extends React.Component {
    state = {
        firsButtonName: "Page1",
        secondButtonName: "Page3",
    }

    render() {
        const {navigation} = this.props

        const attachButtonPage1 = () => {
            navigation.navigate(this.state.firsButtonName)
        };

        const attachButtonPage2 = () => {
            navigation.navigate(this.state.secondButtonName)
        };

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={attachButtonPage1}>
                    <Text style={styles.buttonText}>{this.state.firsButtonName}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={attachButtonPage2}>
                    <Text style={styles.buttonText}>{this.state.secondButtonName}</Text>
                </TouchableOpacity>

                <StatusBar theme='auto'/>
            </View>
        );
    }
}

export default Main;