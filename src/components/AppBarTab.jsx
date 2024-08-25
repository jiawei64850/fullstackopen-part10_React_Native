import { View, Text, Pressable } from "react-native"
import { Link } from "react-router-native";

const AppBarTab = ({ item, styles }) => {
  return (
    <View style={styles.box} >
      <Pressable onPress={() => console.log(item)}>
        <Link to={`/${item}`}>
          <Text style={styles.text}>{item}</Text>
        </Link>
      </Pressable>
    </View>
  )
};

export default AppBarTab;