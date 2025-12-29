import { useState } from 'react';
import {
    Button,
    FlatList,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TodoItem from './components/TodoItem';

export default function App() {
  const [enteredTaskText, setEnteredTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  function addTaskHandler() {
    if (enteredTaskText.trim().length === 0) return;

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), text: enteredTaskText },
    ]);
    setEnteredTaskText('');
    Keyboard.dismiss(); // Görev eklenince klavye kapansın
  }

  function deleteTaskHandler(id) {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      {/* Klavye giriş alanını kapatmasın diye sarmalıyoruz */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>My Todo List</Text>
          
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.textInput} 
              placeholder="Görev yaz..." 
              onChangeText={taskInputHandler}
              value={enteredTaskText}
            />
            <Button title="Add" onPress={addTaskHandler} />
          </View>

          <View style={styles.listContainer}>
            <FlatList 
              data={tasks}
              renderItem={(itemData) => (
                <TodoItem 
                  text={itemData.item.text} 
                  id={itemData.item.id}
                  onDelete={deleteTaskHandler} 
                />
              )}
              keyExtractor={(item) => item.id}
              ListEmptyComponent={
                <Text style={styles.emptyText}>No tasks yet. Add one!</Text>
              }
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 20,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginRight: 10,
    fontSize: 16,
    backgroundColor: 'white',
  },
  listContainer: {
    flex: 5, 
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});