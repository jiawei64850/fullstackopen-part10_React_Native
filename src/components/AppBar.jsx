import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'row', // Lays out children in a column
    justifyContent: 'space-between', // Distributes space around items
    alignItems: 'center',   // Centers items vertically
    backgroundColor: '#24292e',
  },
  box: {
    flexGrow: 1,
    flexShrink: 1,
    margin: 20,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
  }
  // ...
});

const BarItems = ['Repositories', 'SignIn']

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
      {BarItems.map((Baritem, index) => (
        <AppBarTab key={index} item={Baritem} styles={styles}/>
      ))}
      </ScrollView>
    </View>
  );
};

export default AppBar;