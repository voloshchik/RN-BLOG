import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { DATA } from "../data";
import AppHeaderIcon from "../componens/AppHeaderIcon";
import PostList from "../componens/PostList";
export const MainScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked
    });
  };
  return <PostList data={DATA} openPost={openPostHandler} />;
};
MainScreen.navigationOptions = {
  headerTitle: "Мой блог",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="take photo"
        iconName="ios-camera"
        onPress={() => console.log("ssss")}
      />
    </HeaderButtons>
  ),
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => console.log("ssss")}
      />
    </HeaderButtons>
  )
};
