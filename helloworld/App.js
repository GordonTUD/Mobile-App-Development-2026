import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [fullname, setFullname] = useState("Gordon Bruns");
  return (
    <View>
      <Text style={styles.paragraph}>
      
        helloWorld, {fullname}  
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={fullname}
        onChangeText={(text) =>setFullname(text)} />
      
    </View>
  );
}


const styles = StyleSheet.create({
paragraph: {
margin: 24,
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center',
},
});

