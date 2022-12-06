import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Switch } from 'react-native';

class LetterListComponent extends Component {
    
    constructor() {
        super();
        this.state = {
            listKeys: [
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
            ]
        }
    }

    setSwitchValue = (val, ind) => {
        const _ = require('lodash');
        const tempData = _.cloneDeep(this.state.listKeys);
        //const tempData = this.state.listKeys;
        tempData[ind].switch = val;
        this.setState({ listKeys: tempData });
    }

    listItem = ({ item, index }) => (
        <View style={styles.itemList}>
            <Text style={styles.item}>{item.key}</Text>
            <Switch
                onValueChange={(value) => this.setSwitchValue(value, index)}
                value={item.switch}
            />
        </View>
    );

    render() {
        return (
            <FlatList
                contentContainerStyle={{ paddingBottom: 400 }}
                data={this.state.listKeys}
                renderItem={this.listItem}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    itemList: {
        flex: 1,
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

})

export default LetterListComponent;