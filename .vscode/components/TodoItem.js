import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function TodoItem({ text, id, onDelete }) {
  return (
    <Pressable 
      onPress={() => onDelete(id)} // Tıklandığında silme fonksiyonunu id ile çağırır
      style={({ pressed }) => [
        styles.taskItem,
        pressed && styles.pressedItem, // Basıldığında görsel geri bildirim verir
      ]}
    >
      <View>
        <Text style={styles.taskText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    marginVertical: 5,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  taskText: {
    fontSize: 16,
  },
  pressedItem: {
    opacity: 0.5, // Basıldığında hafif şeffaflaşır
    backgroundColor: '#dddddd',
  },
});