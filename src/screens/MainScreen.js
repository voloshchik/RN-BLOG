import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Post from "../componens/Post";
import { DATA } from "../data";
import AppHeaderIcon from "../componens/AppHeaderIcon";
export const MainScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked
    });
  };
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => {
          return <Post post={item} onOpen={openPostHandler} />;
        }}
      />
    </View>
  );
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
const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
});
