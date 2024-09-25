import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/Header';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface Dish {
  id: string;
  name: string;
  image: string;
  price: string;
}

const HomeScreen: React.FC = () => {
  const [address, setAddress] = useState<string>('123 Street, City');

  // Categories as provided
  const categories: Category[] = [
    { id: '1', name: 'Best Seller', icon: 'https://via.placeholder.com/50' },
    { id: '2', name: 'Indian', icon: 'https://via.placeholder.com/50' },
    { id: '3', name: 'Chinese', icon: 'https://via.placeholder.com/50' },
    { id: '4', name: 'Italian', icon: 'https://via.placeholder.com/50' },
    { id: '5', name: 'Fast Food', icon: 'https://via.placeholder.com/50' },
  ];

  // Sample dishes
  const dishes: Dish[] = [
    { id: '1', name: 'Dish 1', image: 'https://via.placeholder.com/100', price: '₹70 / Kg' },
    { id: '2', name: 'Dish 2', image: 'https://via.placeholder.com/100', price: '₹120 / Kg' },
    { id: '3', name: 'Dish 3', image: 'https://via.placeholder.com/100', price: '₹150 / Kg' },
    { id: '4', name: 'Dish 4', image: 'https://via.placeholder.com/100', price: '₹200 / Kg' },
  ];

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderDishItem = ({ item }: { item: Dish }) => (
    <View style={styles.dishContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.dishImage} />
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={16} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.dishName}>{item.name}</Text>
      <Text style={styles.dishPrice}>{item.price}</Text>
    </View>
  );

  return  (
    <View style={styles.container}>
      {/* Header */}
      <Header address={address} setAddress={setAddress} />

      {/* Content */}
      <ScrollView>
        {/* Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            horizontal
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList} // Added style for left margin
          />
        </View>

        {/* Popular Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular</Text>
          <FlatList
            horizontal
            data={dishes}
            renderItem={renderDishItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dishList}
          />
        </View>

        {/* Recommended for you Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommended for you</Text>
          <FlatList
            horizontal
            data={dishes}
            renderItem={renderDishItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dishList}
          />
        </View>

        {/* Order Again Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Again</Text>
          <FlatList
            horizontal
            data={dishes}
            renderItem={renderDishItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dishList}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
  },
  addressText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    paddingVertical: 10,
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  filterButton: {
    backgroundColor: '#FFA500',
    padding: 6,
    borderRadius: 8,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  categoryList: {
    paddingLeft: 20, // Added left margin for category list
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
    backgroundColor: '#F1F1F1',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  dishContainer: {
    width: 140,
    marginHorizontal: 10,
  },
  imageContainer: {
    position: 'relative', // Helps to position the add button over the image
  },
  dishImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,  // Position as per the image
    right: 10,   // Position as per the image
    backgroundColor: '#fff',
    width: 25,
    height: 25,
    borderRadius: 12, // Slightly rounded square
    justifyContent: 'center',
    alignItems: 'center',
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dishPrice: {
    fontSize: 14,
    color: '#888',
  },
  dishList: {
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
