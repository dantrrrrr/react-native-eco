// Import necessary components and hooks from libraries
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react"; // Importing React for component creation
import styles from "./welcome.style"; // Importing styles for the component
import { Feather, Ionicons } from "@expo/vector-icons"; // Importing icons for UI enhancement
import { COLORS, SIZES } from "../../constants"; // Importing predefined constants for uniform styling
import { useNavigation } from "@react-navigation/native"; // Importing navigation hook for navigation functionality

// Define the Welcome component
const Welcome = () => {
  // Use the navigation hook to get the navigation object which can be used to navigate between different screens
  const navigation = useNavigation();

  // Return the component JSX
  return (
    <View>
      {/* Start of Welcome Text Section */}
      <View style={styles.container}>
        {/* Display a welcome text */}
        <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>
          Find The Most
        </Text>
        {/* Display a welcome text with primary color */}
        <Text style={styles.welcomeText(COLORS.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>
      {/* End of Welcome Text Section */}

      {/* Start of Search Bar Section */}
      <View style={styles.searchContainer}>
        {/* Start of Search Icon */}
        <TouchableOpacity>
          {/* Display a search icon */}
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        {/* End of Search Icon */}

        {/* Start of Search Input */}
        <View style={styles.searchWrapper}>
          {/* Display a text input field with a placeholder and an onPressIn event that navigates to the "Search" screen */}
          <TextInput
            style={styles.searchInput}
            value={""}
            placeholder="What are you looking for "
            onPressIn={() => navigation.navigate("Search")}
          />
        </View>
        {/* End of Search Input */}

        {/* Start of Camera Icon */}
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            {/* Display a camera icon */}
            <Ionicons
              name="camera-outline"
              size={SIZES.xLarge}
              color={COLORS.secondary}
            />
          </TouchableOpacity>
        </View>
        {/* End of Camera Icon */}
      </View>
      {/* End of Search Bar Section */}
    </View>
  );
};

// Export the Welcome component so it can be used in other parts of the application
export default Welcome;
