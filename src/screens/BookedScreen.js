import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import AppHeaderIcon from "../componens/AppHeaderIcon";
import PostList from "../componens/PostList";

export const BookedScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked
    })
  }

  const bookedPosts = useSelector(state => state.post.bookedPosts)

  return <PostList data={bookedPosts} onOpen={openPostHandler} />
}

BookedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Избранное',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle Drawer'
        iconName='ios-menu'
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
})