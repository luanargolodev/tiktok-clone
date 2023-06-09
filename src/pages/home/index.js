import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <TouchableOpacity>
          <Text style={[styles.labelText, { color: "#ddd" }]}>Seguindo</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.labelText, { color: "#fff" }]}>Pra você</Text>
          <View style={styles.indicator}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  labels: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    position: "absolute",
    top: 6,
    left: 0,
    right: 0,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 55,
    zIndex: 99,
  },
  labelText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  indicator: {
    backgroundColor: "#fff",
    width: 32,
    height: 2,
    alignSelf: "center",
  },
});
