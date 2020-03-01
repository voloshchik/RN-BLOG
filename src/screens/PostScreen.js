import React, { useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert
} from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DATA } from "../data";
import { THEME } from "../../theme";
import AppHeaderIcon from "../componens/AppHeaderIcon";
import { useDispatch, useSelector } from "react-redux";
import { toggleBooked } from "../store/actions/postActions";

export const PostScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const postId = navigation.getParam("postId");
  const post = DATA.find(p => p.id === postId);

  const toggleHandler = useCallback(() => {
    console.log(postId);
    dispatch(toggleBooked(postId));
  }, [dispatch, postId]);
  const booked = useSelector(state =>
    state.post.bookedPost.some(post => post.id === postId)
  );
  useEffect(() => {
    navigation.setParams({ booked });
  }, [booked]);
  useEffect(() => {
    navigation.setParams({ toggleHandler });
  }, []);
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
  const booked = navigation.getParam("booked");
  const toggleHandler = navigation.getParam("toggleHandler");
  const iconName = booked ? "ios-star" : "ios-star-outline";
  return {
    headerTitle: "Пост от " + new Date(date).toLocaleDateString(),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="take photo" iconName={iconName} onPress={toggleHandler} />
      </HeaderButtons>
    )
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
