import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const horizontalProducts = [
  { id: '1', name: 'Amul Full Cream Milk', price: 67, image: 'https://bejiness.com/home/bejiness-logo.png', offer: null },
  { id: '2', name: 'Amul Salted Butter', price: 60, image: 'https://bejiness.com/home/bejiness-logo.png', offer: '10% off' },
  { id: '3', name: 'Fortune Mustard Oil', price: 158, image: 'https://bejiness.com/home/bejiness-logo.png', offer: '₹37 off' },
  { id: '4', name: 'Amul Masti Dahi', price: 35, image: 'https://bejiness.com/home/bejiness-logo.png', offer: null },
  { id: '5', name: 'Kurkure Masala Munch', price: 20, image: 'https://bejiness.com/home/bejiness-logo.png', offer: '₹5 off' },
  { id: '6', name: 'Aashirvaad Atta', price: 455, image: 'https://bejiness.com/home/bejiness-logo.png', offer: '₹30 off' },
];

const HorizontalProductSlider = () => {
  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.sliderTitle}>Recommended for You</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {horizontalProducts.map((product) => (
          <TouchableOpacity key={product.id} style={styles.productCard}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productName} numberOfLines={1}>
              {product.name}
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>₹{product.price}</Text>
              {product.offer && <Text style={styles.offerBadge}>{product.offer}</Text>}
            </View>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    padding: 16,
    backgroundColor: '#fff',
    width: '100%',
  },
  sliderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollContainer: {
    paddingHorizontal: 8,
  },
  productCard: {
    width: 150,
    marginRight: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    flexShrink: 0, // Prevent shrinking to enable horizontal scrolling
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
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  offerBadge: {
    fontSize: 12,
    color: '#28a745',
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
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

export default HorizontalProductSlider;
