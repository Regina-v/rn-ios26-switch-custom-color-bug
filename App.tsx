import React, { useState } from 'react';
import { StyleSheet, Switch, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text>Toggles with custom color</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled1 ? '#ffffff' : '#292C5A'}
          ios_backgroundColor="#B4B4B4"
          onValueChange={setIsEnabled1}
          value={isEnabled1}
          style={styles.switch}
        />
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled2 ? '#ffffff' : '#292C5A'}
          ios_backgroundColor="#B4B4B4"
          onValueChange={setIsEnabled2}
          value={isEnabled2}
          style={styles.switch}
        />
        <Text>Toggles without custom color</Text>
        <Switch
          onValueChange={setIsEnabled3}
          value={isEnabled3}
          style={styles.switch} 
        />
        <Switch
          onValueChange={setIsEnabled4}
          value={isEnabled4}
          style={styles.switch}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch: {
    alignSelf: 'center',
    marginVertical: 10,
  }
});

export default App;
