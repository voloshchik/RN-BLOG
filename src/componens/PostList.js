import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Post from './Post';

const PostList = ({ data, openPost }) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => {
          return <Post post={item} onOpen={openPost} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
});
export default PostList;
