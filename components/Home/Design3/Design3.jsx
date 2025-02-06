import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const categories = [
  { id: '1', name: 'Fruits & Vegetables', image: 'https://bejiness.com/home/bejiness-logo.png' },
  { id: '2', name: 'Dairy, Bread & Eggs', image: 'https://bejiness.com/home/bejiness-logo.png' },
  { id: '3', name: 'Atta, Rice, Oil & Dals', image: 'https://bejiness.com/home/bejiness-logo.png' },
  { id: '4', name: 'Meat, Fish & Eggs', image: 'https://bejiness.com/home/bejiness-logo.png' },
  { id: '5', name: 'Masala & Dry Fruits', image: 'https://bejiness.com/home/bejiness-logo.png' },
  { id: '6', name: 'Breakfast & Sauces', image: 'https://bejiness.com/home/bejiness-logo.png' },
  { id: '7', name: 'Packaged Food', image: 'https://bejiness.com/home/bejiness-logo.png' },
];

const CategorySection = ({ title, data }) => {
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryCard}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryName} numberOfLines={2}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.categoryList}
      />
    </View>
  );
};

const GroceryAndKitchenScreen = () => {
  return (
    <View style={styles.container}>
      <CategorySection title="Grocery & Kitchen" data={categories} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoryList: {
    alignItems: 'center',
  },
  categoryCard: {
    width: 100,
    margin: 8,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  categoryImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
});

export default GroceryAndKitchenScreen;
