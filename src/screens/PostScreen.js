import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert
} from "react-native";
import { DATA } from "../data";
import { THEME } from "../../theme";

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam("postId");
  const post = DATA.find(p => p.id === postId);
  const removeHadler = () => {
    Alert.alert(
      "Удаление поста",
      "Вы действительно хотите удалить пост ?",
      [
        {
          text: "Отмена",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Удалить",
          style: "destructive",
          onPress: () => console.log("OK Pressed")
        }
      ],
      { cancelable: false }
    );
  };
  return (
    <ScrollView style={styles.center}>
      <Image style={styles.image} source={{ uri: post.img }} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Удалить"
        color={THEME.DANGER_COLOR}
        onPress={removeHadler}
      />
    </ScrollView>
  );
};
PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam("date");
  return {
    headerTitle: "Пост от " + new Date(date).toLocaleDateString(),
    headerStyle: {
      backgroundColor: "red",
      headerTintcolor: "#fff"
    }
  };
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  textWrap: {
    padding: 10
  },
  title: {
    fontFamily: "open-regular"
  }
});
