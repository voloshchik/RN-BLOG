import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const AboutScreen = ({}) => {
  
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Вторая страница</Text>
      <Button title="Нажми меня" onPress={handler} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "red",
    fontSize: 40,
    padding: 19
  }
});
