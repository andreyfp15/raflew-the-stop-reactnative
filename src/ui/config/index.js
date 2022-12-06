import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, Switch, ScrollView, Alert } from "react-native"
import styles from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Config() {

    const navigation = useNavigation();

    const [time, setTime] = useState(0);
    const [listLetters, setListLetters] = useState([
        { key: 'A', switch: true },
        { key: 'B', switch: true },
        { key: 'C', switch: true },
        { key: 'D', switch: true },
        { key: 'E', switch: true },
        { key: 'F', switch: true },
        { key: 'G', switch: true },
        { key: 'H', switch: true },
        { key: 'I', switch: true },
        { key: 'J', switch: true },
        { key: 'K', switch: true },
        { key: 'L', switch: true },
        { key: 'M', switch: true },
        { key: 'N', switch: true },
        { key: 'O', switch: true },
        { key: 'P', switch: true },
        { key: 'Q', switch: true },
        { key: 'R', switch: true },
        { key: 'S', switch: true },
        { key: 'T', switch: true },
        { key: 'U', switch: true },
        { key: 'V', switch: true },
        { key: 'X', switch: true },
        { key: 'Y', switch: true },
        { key: 'Z', switch: true },
    ]);

    async function getTimeStorage() {
        const time = await AsyncStorage.getItem("@raflewthestop:time");
        setTime(time == null ? 5 : parseInt(time));
    }

    async function getLettersStorage() {
        const letters = await AsyncStorage.getItem("@raflewthestop:validletters");
        setListLetters(letters ? JSON.parse(letters) : {});
    }

    useEffect(() => {
        getTimeStorage();
        getLettersStorage();
    }, [])

    function backPage() {
        navigation.navigate('Main');
    }

    async function btMinusClick() {
        if (time == 1) {
            Alert.alert("Atenção", "O valor mínimo para o tempo é 1s.");
            return;
        }

        setTime(time - 1);
        await AsyncStorage.setItem("@raflewthestop:time", (time - 1).toString());
    }

    async function btPlusClick() {
        if (time == 10) {
            Alert.alert("Atenção", "O valor máximo para o tempo é 10s.");
            return;
        }

        setTime(time + 1);
        await AsyncStorage.setItem("@raflewthestop:time", (time + 1).toString());
    }

    async function setSwitchValue(value, index){
        const tempData = [...listLetters];
        tempData[index].switch = value;
        setListLetters(tempData);
        await AsyncStorage.setItem("@raflewthestop:validletters", JSON.stringify(tempData));
    }

    return (
        <ScrollView style={styles.container}>

            <View style={styles.titleArea}>
                <View style={{ width: "33%" }}>
                    <TouchableOpacity style={styles.titleBtBack} onPress={() => backPage()}>
                        <MaterialCommunityIcons name="keyboard-backspace" size={32} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ width: "67%" }}>
                    <Text style={styles.titleName}>CONFIGURAÇÕES</Text>
                </View>
            </View>

            <View style={styles.configTimeArea}>
                <Text style={styles.configTimeTitle}>Segundos para sorteio da letra: </Text>

                <View style={styles.configTimeValueArea}>
                    <TouchableOpacity style={styles.configTimeValueBtMinus} onPress={() => btMinusClick()}>
                        <AntDesign name="minus" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={styles.configTimeValueField}>
                        <Text style={styles.configTimeValueFieldFont}>{time}</Text>
                    </View>
                    <TouchableOpacity style={styles.configTimeValueBtPlus} onPress={() => btPlusClick()}>
                        <AntDesign name="plus" size={24} color="black" />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.configLettersArea}>
                <Text style={styles.configLettersTitle}>Letras ativas para sorteio </Text>

                <View>
                    {listLetters.map((item, index) =>
                        <View style={styles.itemList} key={item.key}>
                            <Text style={styles.item}>{item.key}</Text>
                            <Switch
                                onValueChange={(value) => setSwitchValue(value, index)}
                                value={item.switch}
                            />
                        </View>
                    )}
                </View>

                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingTop: 50, paddingBottom: 10 }}>
                    <Text style={{ color: "#828282" }}>Versão 1.00</Text>
                </View>


            </View>

        </ScrollView>
    );
} 