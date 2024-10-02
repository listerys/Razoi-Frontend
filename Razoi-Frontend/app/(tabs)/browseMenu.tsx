import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../../components/Header'; 
import { SafeAreaView } from 'react-native-safe-area-context';

interface Dish {
  id: string;
  name: string;
  image: string;
  price: string;
  category: string;
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
  ];

  const dishes: Dish[] = [
    {
      id: '1',
      name: 'Chicken Biryani',
      image: 'https://via.placeholder.com/100',
      price: '$10',
      category: 'Indian',
    },
    {
      id: '2',
      name: 'Paneer Butter Masala',
      image: 'https://via.placeholder.com/100',
      price: '$8',
      category: 'Indian',
    },
    {
      id: '3',
      name: 'Pasta',
      image: 'https://via.placeholder.com/100',
      price: '$12',
      category: 'Italian',
    },
  ];

  const filteredDishes = selectedCategory
    ? dishes.filter(dish => dish.category === selectedCategory)
    : [];

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        item.name === selectedCategory && styles.selectedCategoryItem,
      ]}
      onPress={() => setSelectedCategory(item.name)}
    >
      <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
      <Text
        style={[
          styles.categoryText,
          item.name === selectedCategory && styles.selectedCategoryText,
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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <View style={styles.container}>
        {/* Fixed Header */}
        <Header address={address} setAddress={setAddress} />

        {/* Content */}
        {selectedCategory ? (
          <FlatList
            data={filteredDishes}
            renderItem={renderDishItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.contentContainer}
            ListHeaderComponent={
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Dishes</Text>
              </View>
            }
          />
        ) : (
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.categoryRow}
            contentContainerStyle={styles.contentContainer}
            ListHeaderComponent={
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Browse Menu</Text>
              </View>
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  categoryRow: {
    justifyContent: 'space-between',
  },
  categoryItem: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DADADA',
    backgroundColor: '#FFFFFF',
    transition: 'background-color 0.3s ease',
  },
  selectedCategoryItem: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  selectedCategoryText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  dishItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D1D1D1',
  },
  dishImage: {
    width: 80,
    height: 80,
    borderRadius: 15,
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
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default BrowseMenu;
