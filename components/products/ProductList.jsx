import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";
import React from "react";
import styles from "./productList.style";
import useFetch from "../../hook/useFetch";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "../products/ProductCartView";
const ProductList = () => {
  const { data, isLoading, error } = useFetch();
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }
  const renderProductCard = ({ item }) => <ProductCardView item={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={renderProductCard}
        contentContainerStyle={styles.containerList}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default ProductList;
