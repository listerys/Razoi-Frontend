import React, { useState } from 'react';
import { View, Text, TextInput, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For the dropdown icon

interface Dish {
  id: string;
  name: string;
  image: string;
  price: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

const BrowseMenu: React.FC = () => {
  const [address, setAddress] = useState<string>('123 Street, City');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Categories based on your provided list
  const categories: Category[] = [
    // Cuisines
    { id: '1', name: 'Indian', icon: 'https://via.placeholder.com/50' },
    { id: '2', name: 'South Indian', icon: 'https://via.placeholder.com/50' },
    { id: '3', name: 'Chinese', icon: 'https://via.placeholder.com/50' },
    { id: '4', name: 'Italian', icon: 'https://via.placeholder.com/50' },
    { id: '5', name: 'Arabic', icon: 'https://via.placeholder.com/50' },
    { id: '6', name: 'Mughlai', icon: 'https://via.placeholder.com/50' },
    { id: '7', name: 'Punjabi', icon: 'https://via.placeholder.com/50' },
    { id: '8', name: 'Gujarati', icon: 'https://via.placeholder.com/50' },
    { id: '9', name: 'Rajasthani', icon: 'https://via.placeholder.com/50' },
    { id: '10', name: 'Bengali', icon: 'https://via.placeholder.com/50' },
    // Dish Types
    { id: '11', name: 'Soups', icon: 'https://via.placeholder.com/50' },
    { id: '12', name: 'Chicken', icon: 'https://via.placeholder.com/50' },
    { id: '13', name: 'Vegetarian', icon: 'https://via.placeholder.com/50' },
    { id: '14', name: 'Seafood', icon: 'https://via.placeholder.com/50' },
    { id: '15', name: 'Sweet Tooth', icon: 'https://via.placeholder.com/50' },
    { id: '16', name: 'Breads', icon: 'https://via.placeholder.com/50' },
    { id: '17', name: 'Rice Dishes', icon: 'https://via.placeholder.com/50' },
    { id: '18', name: 'Starters', icon: 'https://via.placeholder.com/50' },
    { id: '19', name: 'Beverages', icon: 'https://via.placeholder.com/50' },
    { id: '20', name: 'Desserts', icon: 'https://via.placeholder.com/50' },
  ];

  // Sample data for dishes (you should replace this with actual data)
  const dishes: Dish[] = [
    { id: '1', name: 'Chicken Biryani', image: 'https://via.placeholder.com/100', price: '$10' },
    { id: '2', name: 'Paneer Butter Masala', image: 'https://via.placeholder.com/100', price: '$8' },
    { id: '3', name: 'Gulab Jamun', image: 'https://via.placeholder.com/100', price: '$4' },
    { id: '4', name: 'Masala Dosa', image: 'https://via.placeholder.com/100', price: '$5' },
  ];

  // Filter dishes based on selected category (placeholder logic)
  const filteredDishes = selectedCategory ? dishes : [];

  // Render each category as a button with an icon
  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        item.id === selectedCategory && styles.selectedCategoryItem,
      ]}
      onPress={() => setSelectedCategory(item.id)}
    >
      <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
      <Text
        style={[
          styles.categoryText,
          item.id === selectedCategory && styles.selectedCategoryText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  // Render dishes for the selected category
  const renderDishItem = ({ item }: { item: Dish }) => (
    <TouchableOpacity style={styles.dishItem}>
      <Image source={{ uri: item.image }} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishName}>{item.name}</Text>
        <Text style={styles.dishPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Address and Dropdown Section */}
      <View style={styles.addressContainer}>
        <TouchableOpacity style={styles.addressTextContainer}>
          <Text style={styles.addressText}>{address}</Text>
          <Ionicons name="chevron-down-outline" size={20} color="#B71C1C" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for dishes..."
        placeholderTextColor="#888"
      />

      {/* Categories Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Browse Menu</Text>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          columnWrapperStyle={styles.categoryRow}
          scrollEnabled={false} // Disable scrolling for the FlatList since we are inside ScrollView
        />
      </View>

      {/* Dishes Section */}
      <View style={styles.section}>
        {selectedCategory ? (
          <>
            <Text style={styles.sectionTitle}>Dishes</Text>
            <FlatList
              data={filteredDishes}
              renderItem={renderDishItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false} // Disable FlatList scrolling
            />
          </>
        ) : (
          <Text style={styles.selectCategoryText}>Please select a category</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  addressContainer: {
    marginBottom: 10,
  },
  addressTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#B71C1C',
    paddingBottom: 5,
  },
  addressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#B71C1C',
    flex: 1,
  },
  searchBar: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B71C1C',
    marginBottom: 10,
  },
  categoryRow: {
    justifyContent: 'space-between',
  },
  categoryItem: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
  },
  selectedCategoryItem: {
    backgroundColor: '#B71C1C',
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  selectedCategoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  selectCategoryText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 50,
  },
  dishItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 10,
  },
  dishImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  dishInfo: {
    flex: 1,
  },
  dishName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  dishPrice: {
    fontSize: 16,
    color: '#B71C1C',
    fontWeight: 'bold',
  },
});

export default BrowseMenu;
