import { Platform, StatusBar, StyleSheet } from "react-native";

export const GetCommonStyles = (theme) => {
  const CommonStyles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
      marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    },

  });

  return CommonStyles;
};
