import LetterService from './services/letterService';
import AsyncStorage from "@react-native-async-storage/async-storage";

async function returnActiveLetters() {
    var lstCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const letters = await AsyncStorage.getItem("@raflewthestop:validletters");
   
    if (letters != null) {
        const lst = JSON.parse(letters);
        var lstReturn = [];
        lst.filter(i => i.switch).forEach(function (value, key) {
            lstReturn.push(value.key)
        });
        return lstReturn;
    }

    return lstCharacters;
};

async function getTime(){
    const time = await AsyncStorage.getItem("@raflewthestop:time");
    return time == null ? 5 : parseInt(time)
}

const raflewLetter = (lstLetters) => {

    var letter = lstLetters[Math.floor(Math.random() * lstLetters.length)];

    LetterService.create({ letter: letter });

    return letter
};


export default {
    returnActiveLetters,
    raflewLetter,
    getTime
};