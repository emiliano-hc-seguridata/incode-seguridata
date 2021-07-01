import React from 'react';
import { Text, Animated,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from '../Principal'
import MensajeFoto from '../MensajeFoto'
const Stack = createStackNavigator();




export default function Routes({navigation}){
  
  return (
    <SafeAreaProvider>
    <NavigationContainer>
    <Stack.Navigator
       initialRouteName="App"
       initialLayout={{width: Dimensions.get('window').width}}
       screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen name="Home" component={Principal}
          options={{
            title:'',
            headerStyleInterpolator: forFade ,
            headerStyle: { backgroundColor:"#78aa2e"},
            headerTintColor:"#78aa2e",
            headerTitleStyle:{fontSize:12}
          }} />
              <Stack.Screen
        name="MensajeFoto"
        component={MensajeFoto}
        options={{
          header: () => { 
            return (
              null
            );
           }
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};


