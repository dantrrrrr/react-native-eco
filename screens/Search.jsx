import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import styles from "./search.style";
import { COLORS, SIZES } from "../constants/index";
import { useState } from "react";
import axios from "axios";
import SearchTile from "../components/products/SearchTile";
const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  // console.log("🚀 ~ file: Search.jsx:10 ~ Search ~ searchKey:", searchKey);
  const handleSearchKeyChange = (text) => {
    setSearchKey(text);
  };
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/products/search/${searchKey}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.log("Failed to search products ", error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            placeholder="What are you looking for "
            onChangeText={handleSearchKeyChange}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
            <Feather
              name="search"
              size={SIZES.xLarge}
              color={COLORS.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>

      {searchResults.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTile item={item} />}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
