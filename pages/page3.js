import React from "react";
import {Alert, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textInputFieldL: {
        borderWidth: 1,

        padding: 3,
        marginBottom: 5,
    },
    mainButton: {
        marginTop: 20,
        padding: 3,

        borderWidth: 1,
        borderColor: 'gray'
    },
});

class Page3 extends React.Component {
    state = {
        red: 0,
        green: 0,
        blue: 0,

        tempRed: 0,
        tempGreen: 0,
        tempBlue: 0,
    }

    attachRedInputField = (number) => this.setState({tempRed: number})
    attachGreenInputField = (number) => this.setState({tempGreen: number})
    attachBlueInputField = (number) => this.setState({tempBlue: number})
    attachColorButton = () => {
        const tempRed = this.state.tempRed;
        const tempBlue = this.state.tempBlue;
        const tempGreen = this.state.tempGreen;

        if (tempRed < 0 || tempRed > 255) {
            Alert.alert("Невірне значення для числа red.", "Введіть число в діапазоні від 0 до 255.");
            return;
        }

        if (tempBlue < 0 || tempBlue > 255) {
            Alert.alert("Невірне значення для числа blue.", "Введіть число в діапазоні від 0 до 255.");
            return;
        }

        if (tempGreen < 0 || tempGreen > 255) {
            Alert.alert("Невірне значення для числа green.", "Введіть число в діапазоні від 0 до 255.");
            return;
        }

        this.setState({red: tempRed, blue: tempBlue, green: tempGreen});
    }

    render() {
        const {red, green, blue} = this.state;
        const bgColor = `rgb(${red}, ${green}, ${blue})`;
        const {navigation} = this.props;
        return (
            <View style={styles.mainContainer}>

                <View style={{marginBottom: 50, width: 100, height: 100, backgroundColor: bgColor}}></View>

                <TextInput
                    placeholder={"Enter red count"}
                    style={styles.textInputFieldL}
                    onChangeText={this.attachRedInputField}
                    keyboardType="numeric"
                />

                <TextInput
                    placeholder={"Enter green count"}
                    style={styles.textInputFieldL}
                    onChangeText={this.attachGreenInputField}
                    keyboardType="numeric"
                />

                <TextInput
                    placeholder={"Enter blue count"}
                    style={styles.textInputFieldL}
                    onChangeText={this.attachBlueInputField}
                    keyboardType="numeric"
                />

                <TouchableOpacity onPress={this.attachColorButton}>
                    <Text style={styles.mainButton}>{"Send and apply color"}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate("Main");}}>
                    <Text style={styles.mainButton}>{"Return to main page"}</Text>
                </TouchableOpacity>
                <StatusBar theme = 'auto'/>
            </View>
        );
    }
}

export default Page3;