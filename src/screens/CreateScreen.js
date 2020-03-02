import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AppHeaderIcon from "../componens/AppHeaderIcon";
import { TextInput } from "react-native-paper";
import { THEME } from "../../theme";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { addPost } from "../store/actions/postActions";
import PhotoPicker from "../componens/PhotoPicker";
export const CreateScreen = ({ navigation }) => {
  const img =
    "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg";
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const imgRef = useRef();
  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img: imgRef.current,
      booked: false
    };
    dispatch(addPost(post));
    navigation.navigate("Main");
  };
  const onPhotoPickHandler = uri => {
    imgRef.current = uri;
  };
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создай новый пост</Text>
          <TextInput
            value={text}
            style={styles.textarea}
            onChangeText={setText}
            placeholder="Введите текст поста"
            multiline
          />
          <PhotoPicker onPick={onPhotoPickHandler} />
          <Button
            title="Создать пост"
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};
CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Создать пост",

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
  wrapper: {
    padding: 10
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "open-regular",
    marginVertical: 10
  },
  textarea: {
    padding: 10,
    marginBottom: 10
  }
});
