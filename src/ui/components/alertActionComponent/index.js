import { View, Text, TouchableOpacity } from "react-native"
import styles from "./style";
import Modal from "react-native-modal";

const AlertActionComponent = (props) => {

    return (
        <View>
            <Modal transparent={true} animationType="slide" isVisible={props.modalCompShow}>
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>{props.modalCompTitle}</Text>
                    <Text style={styles.modalText}>{props.modalCompText}</Text>

                    <View style={styles.modalBtArea}>
                        <TouchableOpacity style={styles.modalBtYes} onPress={() => props.clickYes()}>
                            <Text style={styles.modalBtYesText}>Sim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalBtNo} onPress={() => props.clickNo()}>
                            <Text style={styles.modalBtNoText}>Não</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        </View>
    );
}

export default AlertActionComponent