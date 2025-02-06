import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const categories = [
  { id: '1', name: 'Art and Design', icon: 'https://bejiness.com/home/bejiness-logo.png' },
  { id: '2', name: 'Auto and Vehicles', icon: 'https://bejiness.com/home/bejiness-logo.png' },
  { id: '3', name: 'Beauty', icon: 'https://bejiness.com/home/bejiness-logo.png' },
  { id: '4', name: 'Books and Reference', icon: 'https://bejiness.com/home/bejiness-logo.png' },
  { id: '5', name: 'Business', icon: 'https://bejiness.com/home/bejiness-logo.png' },
  { id: '6', name: 'Comics', icon: 'https://bejiness.com/home/bejiness-logo.png' },
  { id: '7', name: 'Communication', icon: 'https://bejiness.com/home/bejiness-logo.png' },
  { id: '8', name: 'Dating', icon: 'https://bejiness.com/home/bejiness-logo.png' },
  { id: '9', name: 'Education', icon: 'https://bejiness.com/home/bejiness-logo.png' },
  { id: '10', name: 'Entertainment', icon: 'https://bejiness.com/home/bejiness-logo.png' },
];

export default function CategoryBar() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      {/* <View style={styles.headerContainer}> */}
        {/* <Text style={styles.headerText}>bejiness Appstore</Text> */}
        {/* <Ionicons name="person-circle-outline" size={30} color="#fff" /> */}
      {/* </View> */}

      {/* Search Bar */}
      {/* <View style={styles.searchContainer}>
        <Text style={styles.searchText}>Enjoy the latest experience</Text>
        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
      </View> */}

      {/* Category Navigation */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navItemText}>Featured</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navItemText}>Top Charts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Text style={styles.activeNavItemText}>Categories</Text>
        </TouchableOpacity>
      </View>

      {/* Category Grid */}
      <View style={styles.categoryGrid}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryCard}>
            <Image source={{ uri: category.icon }} style={styles.categoryIcon} />
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#121212',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#1f1f1f',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2c2c2c',
    padding: 12,
    margin: 16,
    borderRadius: 8,
  },
  searchText: {
    color: '#fff',
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  updateButtonText: {
    fontWeight: 'bold',
    color: '#000',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#1f1f1f',
  },
  navItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  navItemText: {
    color: '#888',
    fontSize: 14,
  },
  activeNavItem: {
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
  },
  activeNavItemText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 16,
  },
  categoryCard: {
    width: '40%',
    margin: 8,
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 8,
    padding: 12,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  categoryName: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});
