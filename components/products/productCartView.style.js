import { COLORS, SIZES } from "../../constants/index";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    backgroundColor: COLORS.secondary,
    marginEnd: 24,
    borderRadius: SIZES.medium,
  },
  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.small / 2,
    marginRight: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
    // backgroundColor: COLORS.gray2,
  },
  image: { aspectRatio: 1, resizeMode: "cover" },
  details: {
    padding: SIZES.small,
  },
  title: { fontFamily: "bold", fontSize: SIZES.large, marginBottom: 2 },
  supplier: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  price: { fontFamily: "bold", fontSize: SIZES.medium },
  addBtn: { position: "absolute", bottom: SIZES.small, right: SIZES.small },
});
export default styles;
