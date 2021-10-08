import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Screen1 = ({navigation}) => {
  return (
    <Button
      title="Go to screen 2"
      onPress={() => navigation.navigate('Screen2')}
    />
  );
};

const Screen2 = () => {
  const [value, setValue] = useState('');

  return <TextInput value={value} onChangeText={setValue} autoFocus />;
};
