import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    modal: {
        padding:15,
        backgroundColor: "#fff",
        height:200,
        marginLeft: 30,
        marginRight: 30,
        borderRadius:10,
        flexDirection:"column",
        justifyContent:"space-between"
    },
    modalTitle:{
        fontSize:20,
        fontWeight:"bold"
    },
    modalText : {
        fontSize:16,
    },
    modalBtArea:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    modalBtYes:{
        backgroundColor:"#14A44D",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:5
    },
    modalBtYesText : {
        fontSize:16,
        color:"#fff",
        fontWeight:"500"
    },
    modalBtNo:{
        backgroundColor:"#DC4C64",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:5
    },
    modalBtNoText:{
        fontSize:16,
        color:"#fff",
        fontWeight:"500"
    }

});

export default styles