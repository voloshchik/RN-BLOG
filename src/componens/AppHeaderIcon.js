import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { THEME } from "../../theme";
const AppHeaderIcon = props => {
  return (
    <HeaderButton
      {...props}
      iconSize={24}
      n
      IconComponent={Ionicons}
      color={Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR}
    />
  );
};

export default AppHeaderIcon;
