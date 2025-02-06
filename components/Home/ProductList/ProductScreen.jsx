import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native';

const productList = [
  { id: '1', name: 'Amul Gold Full Cream Fresh Milk', price: 67, size: '1L', image: 'https://bejiness.com/home/bejiness-logo.png', deliveryTime: '6 Mins' },
  { id: '2', name: 'Amul Salted Butter', price: 60, size: '100g', image: 'https://bejiness.com/home/bejiness-logo.png', deliveryTime: '6 Mins' },
  { id: '3', name: 'Fortune Kachi Ghani Mustard Oil', price: 158, mrp: 195, discount: 37, size: '1L', image: 'https://bejiness.com/home/bejiness-logo.png', deliveryTime: '6 Mins' },
  { id: '4', name: 'Amul Masti Dahi Pouch', price: 35, size: '400g', image: 'https://bejiness.com/home/bejiness-logo.png', deliveryTime: '6 Mins' },
  { id: '5', name: 'Kurkure Masala Munch', price: 20, size: '78g', image: 'https://bejiness.com/home/bejiness-logo.png', deliveryTime: '6 Mins' },
  { id: '6', name: 'Aashirvaad Atta - Shudh Chakki Atta', price: 455, mrp: 485, discount: 30, size: '10kg', image: 'https://bejiness.com/home/bejiness-logo.png', deliveryTime: '6 Mins' },
];

const ProductListScreen = () => {
  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productSize}>{item.size}</Text>
      <Text style={styles.deliveryTime}>{item.deliveryTime}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>₹{item.price}</Text>
        {item.mrp && <Text style={styles.productMRP}>MRP ₹{item.mrp}</Text>}
        {item.discount && <Text style={styles.discountBadge}>{item.discount} off</Text>}
      </View>
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <TextInput
        style={styles.searchBar}
        placeholder="Search for 'milk'"
        placeholderTextColor="#888"
      /> */}
      <Text style={styles.sectionTitle}>
        Buy <Text style={styles.sectionHighlight}>Again</Text>
      </Text>
      <FlatList
        data={productList}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionHighlight: {
    color: '#6a0dad',
    textDecorationLine: 'underline',
  },
  productList: {
    paddingBottom: 16,
  },
  productCard: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    margin: 8,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  productSize: {
    fontSize: 12,
    color: '#555',
    marginBottom: 4,
  },
  deliveryTime: {
    fontSize: 12,
    color: '#999',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  productMRP: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: '#888',
    marginLeft: 8,
  },
  discountBadge: {
    fontSize: 12,
    color: '#28a745',
    marginLeft: 8,
  },
  addToCartButton: {
    backgroundColor: '#ff6f61',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProductListScreen;
