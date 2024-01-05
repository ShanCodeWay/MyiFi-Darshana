import { StyleSheet } from "react-native";
import Colors from "./Colors";
import Fonts from "./Fonts";

const CommonInputFieldStyles = StyleSheet.create({
  parentContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    alignContent: "space-between",
    height: 100,
    margin: 2,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY,
  },
  input: {
    flex: 1,
    padding: 8,
    color: Colors.BLACK_DEEP,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 8,
    tintColor: Colors.BLACK_DEEP,
  },
  textStyleTitle: {
    color: Colors.BLACK_DEEP,

    marginLeft: 10,
    fontSize: 16,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
});

export default CommonInputFieldStyles;
