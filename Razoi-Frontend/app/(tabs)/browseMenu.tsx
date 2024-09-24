import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../../components/Header'; // Import the header component

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

  const categories: Category[] = [
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
    // Add more categories
  ];

  const dishes: Dish[] = [
    { id: '1', name: 'Chicken Biryani', image: 'https://via.placeholder.com/100', price: '$10' },
    { id: '2', name: 'Paneer Butter Masala', image: 'https://via.placeholder.com/100', price: '$8' },
    // Add more dishes
  ];

  const filteredDishes = selectedCategory ? dishes : [];

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
    <View style={styles.container}>
      {/* Fixed Header */}
      <Header address={address} setAddress={setAddress} />

      {/* Scrollable Content */}
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Browse Menu</Text>
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            columnWrapperStyle={styles.categoryRow}
            scrollEnabled={false} // Disable scrolling for the FlatList inside the ScrollView
          />
        </View>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 30,
    paddingHorizontal: 20,
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
  selectCategoryText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default BrowseMenu;
