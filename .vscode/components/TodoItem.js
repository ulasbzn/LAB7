import { StyleSheet, Text, View } from 'react-native';

export default function TodoItem({ text }) {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    marginVertical: 5,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    elevation: 2, // Android gölgesi
    shadowColor: '#000', // iOS gölgesi
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  taskText: {
    fontSize: 16,
  },
});