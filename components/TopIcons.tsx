import { FC } from "react";
import { Feather } from "@expo/vector-icons";
import { TopIcons } from "./types";
import { StyleSheet, Text, View } from "react-native";

const App: FC<TopIcons> = (props) => {
  return (
    <View style={styles.container}>
      <Feather name={props.iconName} color={props.color} size={11} />
      <Text style={{ fontSize: 12, color: "#555" }}>{props.title}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    elevation: 3,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#e7e7e7",
    height: 60,
    width: 90,
    borderTopWidth: 0.3,
    borderTopColor:'#f7f7f7'
  }
});
