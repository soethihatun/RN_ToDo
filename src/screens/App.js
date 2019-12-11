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
} from 'react-native';
import { ADD } from '../actions/todoAction';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={{ textAlign: "center" }}>To Do</Text>

          <Button title="Add" onPress={() => {
            this.props.add()
          }}/>

        <Text>Tasks : { this.props.todos }</Text>
        </View>
      </SafeAreaView>
    )
  }
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
    add: () => {dispatch({ type: ADD, task: "Two" })}
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(App);
