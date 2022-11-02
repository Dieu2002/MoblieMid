
import * as React from 'react';
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Home';
import Banner from './src/Banner';
import Profile from './src/Profile';
import Test from './src/Test';
import Detail from './src/Detail';


const Tab = createBottomTabNavigator();

function MyTabs() {

  return (
    
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./src/image/home.png')}
              style={{width: 26, height: 30, }}
            />
          ),
        headerShown: false,
        }}
      />
      <Tab.Screen
        name="Banner"
        component={Banner}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./src/image/notificaion.png')}
              style={{width: 26, height: 30, }}
            />
          ),
        headerShown: false,
        }}
      />
      <Tab.Screen
        name="Plus"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./src/image/plus.png')}
              style={{width: 26, height: 30, }}
            />
          ),
        headerShown: false,
        }}
      />
       <Tab.Screen
        name="Detail"
        component={Detail}
        options={{
          tabBarLabel: 'Detail',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./src/image/box.png')}
              style={{width: 26, height: 30, }}
            />
          ),
        headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./src/image/profile.png')}
              style={{width: 26, height: 30, }}
            />
          ),
        headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}