import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AppHeaderIcon from "../componens/AppHeaderIcon";
// import { DATA } from "../data";
import PostList from "../componens/PostList";
import { loadPosts } from "../store/actions/postActions";
import { THEME } from '../../theme';
export const MainScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked
    });
  };
  const dispatch = useDispatch();
  const allPosts = useSelector(state => state.post.allPosts);
  const loading = useSelector(state => state.post.loading);
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={THEME.MAIN_COLOR} />
      </View>
    );
  }

  return <PostList data={allPosts} onOpen={openPostHandler} />;
};

MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Мой блог",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="take photo"
        iconName="ios-camera"
        onPress={() => navigation.push("Create")}
      />
    </HeaderButtons>
  ),
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
