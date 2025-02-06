import { StyleSheet, ScrollView } from "react-native";
import ProductListScreen from "../components/Home/ProductList/ProductScreen";
import HorizontalProductSlider from "../components/Home/HorizontalProductSlider/HorizontalProductSlider";
import GroceryAndKitchenScreen from "../components/Home/Design3/Design3";
import HomeHeader from "../components/Home/HomeHeader/HomeHeader";
import CategoryBar from "../components/Home/CategoryBar/CategoryBar";

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <HomeHeader />
      <CategoryBar />
      <ProductListScreen />
      <HorizontalProductSlider />
      <GroceryAndKitchenScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 0,
    marginTop:30
  },
});
