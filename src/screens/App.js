/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import { ADD } from '../actions/todoAction';
import { connect } from 'react-redux';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={{ textAlign: "center" }}>To Do</Text>

          <TextInput
            editable
            maxLength={20}
            placeholder="Enter a task"
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
            style={{
              backgroundColor: "white",
              borderBottomColor: "#000000",
              borderBottomWidth: 1,
              margin: 16,
              padding: 4,
            }}
          />
          <Button title="Add" onPress={() => {
            this.props.add(this.state.text)
            this.state.text = ""
          }} />

          <Text style={{ padding: 16, fontWeight: "bold" }}>Tasks : {this.props.todos.length}</Text>
            <FlatList
              data={this.props.todos}
              renderItem={(item) => renderRow(item)}
              keyExtractor={item => item}
            />
        </View>
      </SafeAreaView>
    )
  }
}

const renderRow = ({ item }) => {
  return (
    <View style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8 }}>
      <Text style={{ color: 'black' }}>{`\u2022 ${item}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (props) => {
  return {
    todoState: props.todoState,
    todos: props.todoState.todos
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    add: (text) => { dispatch({ type: ADD, task: text }) }
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(App);
