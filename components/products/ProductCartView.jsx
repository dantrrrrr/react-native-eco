import { TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";
import styles from "./productCartView.style";

import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
const ProductCartView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails");
      }}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJvb20lMjBtb3JkZW58ZW58MHx8MHx8fDA%3D",
            }}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            doloribus exercitationem vel itaque voluptates odit fugit laborum
            alias at commodi.
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Products Title
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            $65657
          </Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCartView;
