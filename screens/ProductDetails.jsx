import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./productDetails.style";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { useState } from "react";

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1);

  const updateCount = (operation) => {
    setCount((prev) => (operation === "increment" ? prev + 1 : prev - 1));
  };
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJvb20lMjBtb3JkZW58ZW58MHx8MHx8fDA%3D",
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Lorem, ipsum dolor.</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$2323</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color={"gold"} />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity
              onPress={() => decrement()}
              disabled={count === 0}
            >
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            vero odit voluptatibus commodi consectetur mollitia delectus
            suscipit facere aperiam explicabo et cum, qui dicta tempore
            dignissimos? Unde optio quas illum?Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Sunt nihil suscipit delectus eaque
            rerum asperiores perferendis beatae voluptatibus architecto
            similique.
          </Text>
        </View>
        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name={"location-outline"} size={20} />
              <Text>Shoem wherek</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name={"truck-delivery-outline"}
                size={20}
              />
              <Text>Free delivery</Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto
              name={"shopping-bag"}
              size={22}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // </SafeAreaView>
  );
};

export default ProductDetails;
