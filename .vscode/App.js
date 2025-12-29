import { useState } from 'react'; 
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  const [enteredTaskText, setEnteredTaskText] = useState(''); // Yazdığın metni tutar
  const [tasks, setTasks] = useState([]); // Tüm listeyi tutar

  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  function addTaskHandler() {
    if (enteredTaskText.trim().length === 0) return; // 

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), text: enteredTaskText },
    ]);
    setEnteredTaskText(''); // Yazdıktan sonra kutuyu temizle
    Keyboard.dismiss(); // Klavyeyi kapat
  }

return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>My Todo List</Text>
        
        {/* YENİ: Giriş Alanı */}
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput} 
            placeholder="Görev yaz..." 
            onChangeText={taskInputHandler}
            value={enteredTaskText}
          />
          <Button title="Ekle" onPress={addTaskHandler} color="#5e0acc" />
        </View>

        {/* Listemiz buraya gelecek */}
      </View>
    </SafeAreaView>
  );
}inputContainer: {
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
  }