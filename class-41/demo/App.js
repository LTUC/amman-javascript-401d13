import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import Item from './components/Item';

export default function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  const textHandler = (enteredText) => {
    setNewItem(enteredText);
  };

  const addItemHandler = () => {
    setItems([...items, newItem]);
    console.log('item added!');
  };

  const removeItemHandler = (itemToRemove) => {
    const newItems = items.filter(item => item !== itemToRemove);
    setItems(newItems);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Add item'
          onChangeText={textHandler}
        />
        <Button title='Add Item' onPress={addItemHandler} />
      </View>
      {/* My added list of items */}
      <FlatList
        data={items}
        renderItem={
          itemData => (
            <Item title={itemData.item} onDelete={removeItemHandler} />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%'
  }
});
