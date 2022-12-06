import { StyleSheet } from "react-native";
import { Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#f0f0f0"
    },

    raflewArea: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffffff",
        height: 300,
        borderBottomColor: "#e3e3e3",
        borderBottomWidth: 1,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.30,
        shadowRadius: 4.70,
        elevation: 20,
    },
    raflewContentTitleArea:{
        flexDirection:"row",
        width:"50%",
        justifyContent:"center",
        marginLeft:"35%"
    },
    raflewContentTitle: {
        color: "#000",
        paddingTop: 10,
        fontSize: 18,
        fontFamily: 'Poppins_700Bold',
    },
    raflewContentTitleBtConfig:{
        paddingTop:8,
        marginLeft:"auto"
    },
    raflewContentLetter: {
        color: "#000",
        paddingTop: 25,
        fontSize: 120,
        fontWeight:"700"
    },
    raflewLoader : {
        paddingTop: 40,
        transform: [{ scaleX: 3 }, { scaleY: 3 }]
    },

    lettersUsedListArea: {
        paddingTop: 20,
    },
    lettersUsedListTitle: {
        fontSize: 18,
        textAlign: "center",
        fontFamily: 'Poppins_400Regular'
    },
    lettersUsedListLetterArea: {
        flexDirection: "row",
        alignContent: "space-around",
        justifyContent: "center",
        alignItems: "center",
    },
    lettersUsedListLetter: {
        fontSize: 26,
        paddingHorizontal: 20,
        paddingTop: 5,
        fontFamily: 'Poppins_400Regular'
    },

    btDetleteLetterArea: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop:15
    },
    btDeleteLetter: {
        backgroundColor: "#eb344f",
        paddingHorizontal:15,
        paddingVertical:7,
        borderRadius: 7
    },
    btDeleteLetterText: {
        color: "#fff",
        fontFamily: 'Poppins_500Medium'
    },

    btRaflewArea: {
        paddingTop: 40,
        flexDirection: "row",
        justifyContent: "center"
    },
    btRaflew: {
        backgroundColor: "#3f6ccc",
        width: 150,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 11,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },
    },
    btRaflewText: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
        fontFamily: 'Poppins_700Bold'
    },

});

export default styles