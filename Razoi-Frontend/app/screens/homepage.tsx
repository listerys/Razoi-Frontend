import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header'; // Import Header component
import { Ionicons } from '@expo/vector-icons';

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
      {/* Fixed Header */}
      <Header address={address} setAddress={setAddress} />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Greeting Section */}
        <Text style={styles.greetingText}>Hi, {userName}</Text>


        {/* Food Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            horizontal
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
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
            keyExtractor={(item) => item.id}
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
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
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
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B71C1C',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#B71C1C',
    marginBottom: 20,
  },
  categoryItem: {
    marginRight: 20,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  dishItem: {
    marginRight: 20,
    alignItems: 'center',
  },
  dishImage: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    width: 140,
  },
});

export default HomeScreen;
