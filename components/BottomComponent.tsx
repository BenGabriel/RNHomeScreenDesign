import { FC } from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomDetails } from "./types";
import { StyleSheet, Text, View } from "react-native";

const App: FC<BottomDetails> = (props) => {
  return (
    <View style={styles.container}>
      {props.iconName === "whatsapp" ? (
        <MaterialCommunityIcons
          name={props.iconName}
          color={props.color}
          size={22}
        />
      ) : (
        <Feather name={props.iconName} color={props.color} size={22} />
      )}
      <View style={{ marginLeft: 20 }}>
        <Text style={{ fontSize: 13, color: "#555" }}>{props.title}</Text>
        <Text style={{ fontSize: 9, color: "#888" }}>{props.text}</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#e7e7e7",
    height: 65,
    width: "100%",
    // borderTopWidth: 0.3,
    // borderTopColor: "#fff",
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
    paddingHorizontal: 16
  }
});
