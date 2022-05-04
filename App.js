import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  //partie des Hook
  const [product, setProduct] = useState('');
  const [myProduct, setMyProduct] = useState([]);

  const inputHandler = (val) => {
    setProduct(val);
  }

  const submitHandler = () => {
    const idString = Date.now().toString();
    setMyProduct(currentMyProducts => [{ key: idString, name: product }, ...currentMyProducts]);
    setProduct('');

  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
         <TextInput 
            style={styles.textInput}
            placeHolder="Nouveau produit"
            onChangeText={ inputHandler }
            value={ product }
         />
         <Button title="Valider" onPress={submitHandler}/>
      </View>
      
      <FlatList 
          data={ myProduct }
          renderItem={( { item }) => <Text style={styles.element}>{ item.name }</Text>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop:60
  },
  inputContainer: {
      flexDirection : 'row',
      marginBottom: 15
  },
  textInput: {
    borderColor : "gray",
    padding: 5,
    borderWidth :1,
    paddingTop: 9,
    fontSize : 18,
    flexGrow : 1
  },
  items: {
    marginTop : 10
  },
  element: {
    backgroundColor : "#ffb6c1",
    fontSize: 17,
    padding: 20,
    marginVertical: 6
  }
});
