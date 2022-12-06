import { View, Text, TouchableOpacity } from "react-native"
import styles from "./style";
import Modal from "react-native-modal";

const BackgroundLoader = (props) => {

    return (
        <View>
            <Modal transparent={true} animationType="fade" isVisible={props.showLoader}>
                <View></View>
            </Modal>
        </View>
    );
}

export default BackgroundLoader