import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AppHeaderIcon from "../componens/AppHeaderIcon";
// import { DATA } from "../data";
import PostList from "../componens/PostList";
import { loadPosts } from "../store/actions/postActions";
export const MainScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked
    });
  };
  const dispatch = useDispatch();
  const allPosts=useSelector(state=>state.post.allPosts)
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);
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
