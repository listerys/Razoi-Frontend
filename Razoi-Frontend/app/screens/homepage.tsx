import React, { useState } from 'react';
import { View, Text, TextInput, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Use this for the dropdown icon

interface Dish {
  id: string;
  name: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

const HomeScreen: React.FC = () => {
  const [address, setAddress] = useState<string>('123 Street, City');
  const userName = 'John Doe';

  // Sample data for dishes
  const dishes: Dish[] = [
    { id: '1', name: 'Dish 1', image: 'https://via.placeholder.com/100' },
    { id: '2', name: 'Dish 2', image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Dish 3', image: 'https://via.placeholder.com/100' },
    { id: '4', name: 'Dish 4', image: 'https://via.placeholder.com/100' },
  ];

  // Sample data for categories
  const categories: Category[] = [
    { id: '1', name: 'Best Seller', icon: 'https://via.placeholder.com/50' },
    { id: '2', name: 'Indian', icon: 'https://via.placeholder.com/50' },
    { id: '3', name: 'Chinese', icon: 'https://via.placeholder.com/50' },
    { id: '4', name: 'Italian', icon: 'https://via.placeholder.com/50' },
    { id: '5', name: 'Fast Food', icon: 'https://via.placeholder.com/50' },
  ];

  const renderDishItem = ({ item }: { item: Dish }) => (
    <TouchableOpacity style={styles.dishItem}>
      <Image source={{ uri: item.image }} style={styles.dishImage} />
      <Text style={styles.dishName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
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

      {/* Greeting Section */}
      <Text style={styles.greetingText}>Hi, {userName}</Text>

      {/* Food Categories Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          horizontal
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Popular Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular</Text>
        <FlatList
          horizontal
          data={dishes}
          renderItem={renderDishItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Order Again Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Again</Text>
        <FlatList
          horizontal
          data={dishes}
          renderItem={renderDishItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
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
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#B71C1C',
    paddingBottom: 5,
  },
  addressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#B71C1C',
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
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B71C1C',
    marginBottom: 20,
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
  categoryItem: {
    marginRight: 15,
    alignItems: 'center',
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
  },
  dishItem: {
    marginRight: 15,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  dishImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default HomeScreen;
