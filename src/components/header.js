import React from 'react';
import {
Text,
SafeAreaView,
TextInput,
Button,
StyleSheet,
View,
} from 'react-native';

export default function Header(){
    return(
    <View style = {styles.header}> 
        <Text style = {styles.title}> Minhas Tarefas</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral'
    },

    title:{
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        //fontWeigth: '',
    }

});