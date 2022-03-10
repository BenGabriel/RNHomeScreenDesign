import { FC } from "react";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { TopIcons } from "./types";
import { StyleSheet, Text, View } from "react-native";

const App: FC<TopIcons> = (props) => {
  return (
    <View
      style={{
        ...styles.container,
        flex: props.iconName === "social-spotify" ? 1.2 : 2
      }}
    >
      {props.iconName === "social-spotify" ? (
        <SimpleLineIcons name={props.iconName} color={props.color} size={18} />
      ) : (
        <Feather name={props.iconName} color={props.color} size={18} />
      )}
      <Text style={{ fontSize: 9, color: "#555", textAlign: "center", marginTop: 8 }}>
        {props.title}
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    elevation: 3,
    borderRadius: 10,
    backgroundColor: "#e7e7e7",
    height: 60,
    width: '100%',
    // borderTopWidth: 0.3,
    // borderTopColor: "#f7f7f7",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 15
  }
});
