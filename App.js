import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import { bootstarap } from "./src/bootstrap";

export default function App() {
  const [isReady, setIsReadi] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstarap}
        onFinish={() => setIsReadi(true)}
        onError={err => console.log(err)}
      />
    );
  }
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text style={{ justifyContent: "center", alignItems: "center" }}>
        Open up App.jskkkkkkkkkkkkkkk to start working on your app!
      </Text>
    </View>
  );
}
