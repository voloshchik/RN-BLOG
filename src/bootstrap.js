import * as Font from "expo-font";
export async function bootstarap() {
  await Font.loadAsync({
    "open-bold": require("../assets/OpenSans-Bold.ttf"),
    "open-regular": require("../assets/OpenSans-Regular.ttf")
  });
}
