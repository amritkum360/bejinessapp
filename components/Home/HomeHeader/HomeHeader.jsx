import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.brandContainer}>
        <Image
          source={{ uri: 'https://bejiness.com/home/bejiness-logo.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for products"
          placeholderTextColor="#888"
        />
      </View>

      <TouchableOpacity style={styles.cartButton}>
        <Ionicons name="cart-outline" size={24} color="#fff" />
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#000',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  logo: {
    width: 100,   // Adjust width as needed
    height: 40,   // Adjust height to fit the logo proportionally
  },
  searchContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginHorizontal: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  cartButton: {
    backgroundColor: '#ff6f61',
    padding: 8,
    borderRadius: 8,
  },
});
