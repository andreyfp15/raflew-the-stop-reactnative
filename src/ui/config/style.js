import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    titleArea: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    titleBtBack: {
        paddingTop: 3
    },
    titleName: {
        color: "#000",
        paddingTop: 5,
        fontSize: 18,
        fontFamily: 'Poppins_700Bold',

    },

    configTimeArea: {
        display: "flex",
        paddingHorizontal: 5
    },
    configTimeTitle: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: "400"
    },

    configTimeValueArea: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10
    },
    configTimeValueBtMinus: {
        padding: 10,
        backgroundColor: "#E2E3E3",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: "#D1D2D2",
        borderWidth: 1
    },
    configTimeValueField: {
        padding: 10,
        backgroundColor: "#F3F4F4",
        width: 130,
        borderColor: "#D1D2D2",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    configTimeValueFieldFont: {
        fontSize: 16,
        fontWeight: "400"
    },
    configTimeValueBtPlus: {
        padding: 10,
        backgroundColor: "#E2E3E3",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: "#D1D2D2",
        borderWidth: 1
    },

    configLettersArea: {
        display: "flex",
        paddingHorizontal: 5
    },
    configLettersTitle: {
        marginTop: 40,
        fontSize: 16,
        fontWeight: "400"
    },


    itemList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#e3e3e3"
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

});

export default styles