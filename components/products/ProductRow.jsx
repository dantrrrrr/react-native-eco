import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React from "react";
import styles from "./productRow.style";
import { COLORS, SIZES } from "../../constants";
import ProductCartView from "./ProductCartView";
import useFetch from "../../hook/useFetch";
const ProductRow = () => {
  const { data, error, isLoading, refetch } = useFetch();
  console.log(
    "🚀 ~ file: ProductRow.jsx:9 ~ ProductRow ~ isLoading:",
    isLoading
  );
  console.log("🚀 ~ file: ProductRow.jsx:9 ~ ProductRow ~ error:", error);
  console.log("🚀 ~ file: ProductRow.jsx:9 ~ ProductRow ~ data:", data.length);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
      ) : error ? (
        <Text>Something wentWrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCartView />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default ProductRow;
