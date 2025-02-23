import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryBar = ({ highlightButton }) => {
  const categories = [
    'all', 'Agri products & Equipments', 'Apparel & Fashion', 'Automobile Spares & parts',
    'Bags and Luggage', 'Beauty, Cosmetics & Care', 'Books, Stationery & Office supplies',
    'Chemicals, dyes & solvents', 'Construction supplies', 'Drip Irrigation', 'Electricals & lights',
    'Electronics & Computers', 'Footwear', 'Furniture & Interior Decorative', 'Hardware & paints',
    'Home & kitchen appliances', 'Industrial equipments', 'Submersible motors & pumps', 'Tiles & Ceramics'
  ];

  const imageSources = [
    'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100',
    'https://bejiness.com/category-img/agri-pump.png', 
    'https://bejiness.com/category-img/t-shirt.png', 
    'https://bejiness.com/category-img/automobile.png',
    'https://bejiness.com/category-img/luggage.png',
    'https://bejiness.com/category-img/cosmetics%20.png', 
    'https://bejiness.com/category-img/stationary.png',
    'https://bejiness.com/category-img/chemicals.png',
     'https://bejiness.com/category-img/construction.png', 
    'https://bejiness.com/category-img/Drip-irrigation.png',
    'https://bejiness.com/category-img/electrical.png', 
    'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100',
    'https://bejiness.com/category-img/footware.png', 
    'https://bejiness.com/category-img/furniture.png', 
    'https://bejiness.com/category-img/hardware.png',

    'https://bejiness.com/category-img/appliances.png',
     'https://bejiness.com/category-img/equipment.png', 
    'https://bejiness.com/category-img/submersible-motors-and-pumps.png',
    'https://bejiness.com/category-img/tiles.png'
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const scrollRef = useRef();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    highlightButton(category);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
        contentContainerStyle={styles.scrollContainer}
      >
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem} onPress={() => handleCategoryClick(category)}>
            <Image source={{ uri: imageSources[index] }} style={styles.categoryImage} />
            <Text style={[styles.categoryText, selectedCategory === category && styles.selectedCategoryText]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  categoryText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  selectedCategoryText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default CategoryBar;
