import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    alignItems: "center",
    paddingTop: SIZES.xxLarge,
    paddingLeft: SIZES.small / 2,
    // backgroundColor: "red",
  },
  containerList: {
    // overflow:"hidden",
    alignItems: "center",
    paddingTop: SIZES.xxLarge,
    paddingLeft: SIZES.small / 2,
    // backgroundColor: "blue",
  },
  separator: { height: 20 },
});

export default styles;
