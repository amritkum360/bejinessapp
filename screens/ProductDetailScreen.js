import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const ProductDetailScreen = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${productId}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        if (data.success) setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#ff6f61" style={styles.loader} />;
  }

  if (!product) {
    return <Text style={styles.errorText}>Product not found.</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Image Swiper */}
        <Swiper style={styles.swiper} autoplay={true} autoplayTimeout={3} showsPagination={true} dotColor="#ccc" activeDotColor="#ff5722">
          {product.images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={{ uri: image }} style={styles.productImage} />
            </View>
          ))}
        </Swiper>

        {/* Product Name */}
        <Text style={styles.productName}>{product.product_name}</Text>

        {/* Category */}
        <Text style={styles.categoryType}>{product.category_type}</Text>

        {/* Price Section */}
        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹{product.prices[0].price}</Text>
          {product.prices[0].mrp && <Text style={styles.mrp}>MRP ₹{product.prices[0].mrp}</Text>}
          {product.prices[0].discount && <Text style={styles.discount}>{product.prices[0].discount} off</Text>}
        </View>

        {/* Description */}
        <Text style={styles.description}>{product.description}</Text>

        {/* Specifications */}
        <View style={styles.specsContainer}>
          <Text style={styles.specsTitle}>Specifications</Text>
          {product.specs.map((spec, index) => (
            <View key={index} style={styles.specItem}>
              <Text style={styles.specKey}>{spec.key}</Text>
              <Text style={styles.specValue}>{spec.value}</Text>
            </View>
          ))}
        </View>

        {/* Seller Info */}
        <View style={styles.sellerInfo}>
          <Text style={styles.sellerTitle}>Sold by: {product.seller_company}</Text>
          <Text style={styles.sellerType}>{product.seller_type}</Text>
          {product.is_seller_verified && <Text style={styles.verified}>✔ Verified Seller</Text>}
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.addToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNow}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  swiper: { height: 300 },
  slide: { justifyContent: 'center', alignItems: 'center' },
  productImage: { width: width, height: 300, resizeMode: 'contain' },
  productName: { fontSize: 22, fontWeight: 'bold', color: '#333', padding: 10 },
  categoryType: { fontSize: 16, color: '#666', paddingLeft: 10 },
  priceContainer: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  price: { fontSize: 24, fontWeight: 'bold', color: '#ff5722', marginRight: 10 },
  mrp: { fontSize: 16, color: '#888', textDecorationLine: 'line-through', marginRight: 10 },
  discount: { fontSize: 16, color: '#28a745', fontWeight: 'bold' },
  description: { fontSize: 14, color: '#555', padding: 10, lineHeight: 20 },
  specsContainer: { padding: 10, backgroundColor: '#f5f5f5', borderRadius: 5, margin: 10 },
  specsTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  specItem: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 },
  specKey: { fontSize: 14, color: '#555', fontWeight: 'bold' },
  specValue: { fontSize: 14, color: '#333' },
  sellerInfo: { padding: 10, backgroundColor: '#fff', marginTop: 10 },
  sellerTitle: { fontSize: 16, fontWeight: 'bold' },
  sellerType: { fontSize: 14, color: '#666' },
  verified: { fontSize: 14, color: '#28a745', fontWeight: 'bold' },
  bottomButtons: { flexDirection: 'row', position: 'absolute', bottom: 0, width: '100%', height: 50, borderTopWidth: 1, borderTopColor: '#ddd' },
  addToCart: { flex: 1, backgroundColor: '#f0c14b', justifyContent: 'center', alignItems: 'center' },
  buyNow: { flex: 1, backgroundColor: '#ff5722', justifyContent: 'center', alignItems: 'center' },
  buttonText: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  errorText: { textAlign: 'center', fontSize: 16, color: '#ff6f61', marginTop: 20 },
});

export default ProductDetailScreen;
