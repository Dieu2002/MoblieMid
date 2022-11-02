import * as React from 'react';
import { View, ImageBackground, StyleSheet, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Detail from './Detail';

const Banner = ({ navigation }) => {
  return (
    <View>
      <View style={styles.banner}>
        <ImageBackground source={require("./image/banner.png")} style={styles.image}>
          <View style={styles.txtGroup}>
            <Text style={styles.text}>Save extra on every order</Text>
            <Text style={styles.txt}>Etiam mollis metus non faucibus sollicitudin.</Text>
          </View>
          <Button
                    title="Go to detail"
                    onPress={() => navigation.navigate('Detail')}/>
        </ImageBackground>
      </View>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DetailScreen" component={Detail} />
      </Stack.Navigator>
    </View>
  );
}
export default Banner;

const styles = StyleSheet.create({

  banner: {
    position: 'relative',
    marginTop: 45,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  txtGroup: {
    position: 'absolute',
  },
  text: {
    marginTop: 28,
    marginLeft: 24,
    marginBottom: 6,
    width: 119,
    height: 42,
    fontSize: 18,
    color: '#1987FB',
    fontWeight: '700',
    lineHeight: 21,
    fontFamily: 'Overpass'
  },
  txt: {
    width: 124,
    height: 32,
    marginBottom: 32,
    marginLeft: 23,
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Overpass',
    color: 'rgba(9, 15, 71, 0.65)',
  },
});


