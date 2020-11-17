import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {Provider as PaperProvider, Button} from 'react-native-paper';

export default function App() {
  console.log('AQUI');
  return (
    <PaperProvider>
      <SafeAreaView>
        <Text>Hola Mundo</Text>
        <Button icon="image" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
