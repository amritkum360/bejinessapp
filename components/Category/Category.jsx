import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const Category = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products/search?q=a');
        const data = await response.json();

        if (data.success) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.sliderTitle}>Agri products & Equipments</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {products.map((product) => (
          <TouchableOpacity key={product.product_id} style={styles.productCard}>
            <Image source={{ uri: product.images }} style={styles.productImage} />
            <Text style={styles.productName} numberOfLines={1}>
              {product.product_name}
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>₹{product.prices[0]?.price || 'N/A'}</Text>
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

export default Category;
