import React, {useState} from 'react';
import {
Text,
SafeAreaView,
TextInput,
Button,
FlatList,
StyleSheet,
View,
} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';

export default function App(){
  const [todos, setTodos] = useState([
    {text: 'fazer café', key: '1'},
    {text: 'teste', key: '2'}
  
  ]);
  
  const pressHandler = (key) => {
      setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.key != key);
      });
  }

  const submitHandler = (text) => {
      setTodos((prevTodos)=> {
        return [
            {text: text, key: Math.random().toString() },
            ...prevTodos
        ]
      })
  }

  return(
    <View style = {styles.container}>
        <Header />
        <View style = {styles.content}>
            <AddTodo submitHandler = {submitHandler}/>
        </View>
        <View style = {styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item}) => (
              <TodoItem  item={item} pressHandler={pressHandler}
              />

            )}
          />
        </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

  },

  content:{
    padding: 40,

  },

  list:{
    marginTop:60,
    marginLeft:20
  }

});


