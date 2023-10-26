import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";
const Carousel = () => {
  const slider = [
    "https://plus.unsplash.com/premium_photo-1661962952618-031d218dd040?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slider}
        dotColor={COLORS.primary}
        ImageComponentStyle={{ borderRadius: 15, width: "95%", marginTop: 15 }}
        autoplay={true}
        circleLoop
        autoplayInterval={2000}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: { flex: 1, alignItems: "center" },
});
