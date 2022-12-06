import React, { useState, useRef, useEffect } from "react"
import { View, Text, StatusBar, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import styles from "./style";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { FontAwesome } from '@expo/vector-icons';
import LetterService from '../../services/letterService';
import Helper from "../../helper";
import AlertActionComponent from "../components/alertActionComponent";
import BackgroundLoader from "../components/backgroundLoader";

export default function Main() {

    const scrollViewRef = useRef();
    const navigation = useNavigation();

    const [modalDeleteShow, setModalDeleteShow] = useState(false);
    const [modalDeleteLetterShow, setModalDeleteLetterShow] = useState(false);
    const [modalDeleteLetterSelLetter, setModalDeleteLetterSelLetter] = useState(null);
    const [modalDeleteLetterSelLetterId, setModalDeleteLetterSelLetterId] = useState(null);

    const [showLoaderRaflew, setShowLoaderRaflew] = useState(false);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const [listLetters, setListLetters] = useState([]);
    const [currentLetter, setCurrentLetter] = useState(null);

    useEffect(() => {
        LetterService.all().then((data) => {
            setListLetters(data);
        }).catch(err => console.log(err));
    }, []);

    let [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_700Bold });
    if (!fontsLoaded) { return null; }

    function openModalDelteLetter(letterParam) {
        setModalDeleteLetterShow(true);
        setModalDeleteLetterSelLetter(letterParam.letter);
        setModalDeleteLetterSelLetterId(letterParam.id);
    }

    function deleteLetter() {
        LetterService.remove(modalDeleteLetterSelLetterId).then(data => { }).catch(err => console.log(err));

        LetterService.all().then((data) => {
            setListLetters(data);
            setModalDeleteLetterShow(false);
        }).catch(err => console.log(err));
    }

    const raflewLetter = async () => {
        setShowLoaderRaflew(true);

        const time = await Helper.getTime();
        await delay(time * 1000);

        LetterService.all().then(async (data) => {
            var lstCharacters = await Helper.returnActiveLetters();

            let lstUsedLetters = data;
            lstUsedLetters.forEach(element => {
                if (lstCharacters.some(i => i == element.letter))
                    lstCharacters.splice(lstCharacters.indexOf(element.letter), 1);
            });

            if (lstCharacters.length == 0 || lstCharacters == null) {
                Alert.alert("Atenção", "Todas as letras foram sorteadas.");
                setCurrentLetter("FIM");
                setShowLoaderRaflew(false);
                return;
            }

            var letter = Helper.raflewLetter(lstCharacters);

            setListLetters(data);
            setCurrentLetter(letter);

            setShowLoaderRaflew(false);
        }).catch(err => console.log(err));
    };

    function deleteAllLetters() {
        LetterService.removeAll().then(data => { }).catch(err => console.log(err));

        LetterService.all().then((data) => {
            setListLetters(data);
        }).catch(err => console.log(err));

        setCurrentLetter(null);
        setModalDeleteShow(false);
    }

    function openConfig() {
        navigation.navigate('Config');
    }

    return (
        <View style={styles.container}>

            <StatusBar backgroundColor={"#ebebeb"} barStyle="dark-content" />

            <View style={styles.raflewArea}>
                <View style={styles.raflewContentTitleArea}>
                    <Text style={styles.raflewContentTitle}>SORTEIO</Text>
                    <TouchableOpacity style={styles.raflewContentTitleBtConfig} onPress={() => openConfig()}>
                        <FontAwesome name="cog" size={32} color="black" />
                    </TouchableOpacity>
                </View>
                {
                    showLoaderRaflew ?
                        <ActivityIndicator size="large" color="#3f6ccc" style={styles.raflewLoader} /> :
                        <Text style={styles.raflewContentLetter}>{currentLetter == null ? "N/A" : currentLetter}</Text>
                }
            </View>

            <View style={styles.lettersUsedListArea} >
                <Text style={styles.lettersUsedListTitle}>Letras usadas</Text>
                <View style={styles.lettersUsedListLetterArea}>

                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                        ref={scrollViewRef}
                        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                    >

                        {
                            listLetters.map((i, index) =>

                                <TouchableOpacity onPress={() => openModalDelteLetter(i)} key={i.id}>
                                    <Text style={styles.lettersUsedListLetter}>{i.letter}</Text>
                                </TouchableOpacity>


                            )
                        }

                    </ScrollView>

                </View>
            </View>

            <View style={styles.btDetleteLetterArea}>
                {!showLoaderRaflew && listLetters.length > 0 ? (
                    <TouchableOpacity style={styles.btDeleteLetter} onPress={() => setModalDeleteShow(true)}>
                        <Text style={styles.btDeleteLetterText}>Excluir letras usadas</Text>
                    </TouchableOpacity>
                ) : null}
            </View>

            <View style={styles.btRaflewArea}>
                {!showLoaderRaflew ? (
                    <TouchableOpacity style={styles.btRaflew} onPress={() => raflewLetter()}>
                        <Text style={styles.btRaflewText}>SORTEAR</Text>
                    </TouchableOpacity>
                ) : null}
            </View>

            <AlertActionComponent
                modalCompShow={modalDeleteShow}
                modalCompTitle="Atenção"
                modalCompText="Deseja realmente excluir todas as letras?"
                clickYes={() => deleteAllLetters()}
                clickNo={() => setModalDeleteShow(false)}
            />

            <AlertActionComponent
                modalCompShow={modalDeleteLetterShow}
                modalCompTitle="Atenção"
                modalCompText={"Deseja excluir a letra " + modalDeleteLetterSelLetter + "?"}
                clickYes={() => deleteLetter()}
                clickNo={() => setModalDeleteLetterShow(false)}
            />

            <BackgroundLoader showLoader={showLoaderRaflew} />

        </View>
    );
} 