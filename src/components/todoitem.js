import React from 'react';
import {
Text,
SafeAreaView,
TextInput,
TouchableOpacity,
FlatList,
StyleSheet,
View,
} from 'react-native';

export default function TodoItem({ item, pressHandler }) {
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}> {item.text}</Text>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderColor: 'black',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius: 10
    }
})