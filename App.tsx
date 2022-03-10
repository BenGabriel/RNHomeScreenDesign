import { FC } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BottomDetailItems, SideTabs, TopTabs } from "./components/data";
import { BottomComponent, SideIcons, TopTabIcon } from "./components";

const { width, height } = Dimensions.get("screen");

const App: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              color: "#db69be",
              fontSize: 35
            }}
          >
            10
            <Text
              style={{
                color: "#44aad2"
              }}
            >
              39 PM
            </Text>
          </Text>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "700", fontSize: 13 }}>Monday</Text>
            <Text style={{ fontWeight: "200", fontSize: 10 }}>April 27</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="radio-button-off" />
          <Ionicons name="radio-button-on" />
        </View>
      </View>
      <View style={styles.weatherContainer}>
        <Text style={{ fontSize: 12, color: "#777" }}>Broken Clouds</Text>
        <Text style={{ fontSize: 12, color: "#777" }}>56°f</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 15,
          marginBottom: 10,
          paddingHorizontal: 4
        }}
      >
        {TopTabs.map((item) => (
          <TopTabIcon
            color={item.color}
            title={item.title}
            iconName={item.iconName}
          />
        ))}
      </View>
      <View style={styles.options}>
        <Text style={{ fontSize: 12, color: "#555" }}>
          <Ionicons name="reorder-three-outline" size={20} />
        </Text>
        <Text style={{ fontSize: 12, color: "#555" }}>39%</Text>
      </View>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: -50
        }}
      >
        <View style={{ width: "63%" }}>
          {BottomDetailItems.map((item) => (
            <BottomComponent
              color={item.color}
              title={item.title}
              iconName={item.iconName}
              text={item.text}
            />
          ))}
        </View>
        <View style={{ width: "30%" }}>
          {SideTabs.map((item) => (
            <SideIcons
              color={item.color}
              title={item.title}
              iconName={item.iconName}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e7e7",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  weatherContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    elevation: 3,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#e7e7e7",
    marginVertical: 10,
    borderTopWidth: 0.3,
    borderTopColor: "#fff"
  },
  options: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 10,
    alignItems: "center",
    marginVertical: 10
  }
});
