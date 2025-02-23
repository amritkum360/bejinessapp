import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for the heart icon
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation(); // Access the navigation object

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/products/search?q=girl');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data.success && Array.isArray(data.products)) {
          // Initialize liked state for each product
          const productsWithLikes = data.products.slice(0, 6).map(product => ({
            ...product,
            liked: false, // Default to not liked
          }));
          setProducts(productsWithLikes);
        } else {
          console.error('Unexpected response format:', data);
          setProducts([]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductPress = (productId) => {
    console.log('Product pressed:', productId);
    navigation.navigate('ProductDetail', { productId }); // Navigate to ProductDetailScreen with productId
  };

  // Function to handle like/unlike
  const handleLike = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].liked = !updatedProducts[index].liked; // Toggle liked state
    setProducts(updatedProducts);
  };

  const renderProduct = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleProductPress(item.product_id)}>
      <View style={styles.productCard}>
        <TouchableOpacity
          style={styles.likeButton}
          onPress={() => handleLike(index)}
        >
          <FontAwesome
            name={item.liked ? 'heart' : 'heart-o'}
            size={24}
            color={item.liked ? '#ff6f61' : '#ccc'}
          />
        </TouchableOpacity>
        <Image source={{ uri: item.images }} style={styles.productImage} />
        <Text style={styles.productName}>{item.product_name}</Text>
        <Text style={styles.productSize}>{item.unit}</Text>
        <Text style={styles.deliveryTime}>Delivery: 6 Mins</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>₹{item.prices[0].price}</Text>
          {item.prices[0].mrp && <Text style={styles.productMRP}>MRP ₹{item.prices[0].mrp}</Text>}
          {item.prices[0].discount && <Text style={styles.discountBadge}>{item.prices[0].discount} off</Text>}
        </View>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>
        Buy <Text style={styles.sectionHighlight}>Again</Text>
      </Text>
      {loading ? (
        <ActivityIndicator size="large" color="#ff6f61" />
      ) : products.length > 0 ? (
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.productList}
        />
      ) : (
        <Text style={styles.noProductsText}>No products available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
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
    position: 'relative', // For positioning the like button
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1, // Ensure it's above other elements
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
  noProductsText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 20,
  },
});

export default ProductListScreen;