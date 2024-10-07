// HomeScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { Card, Title, Paragraph } from 'react-native-paper';

// Define Category and Dish types
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

  // Define the categories and dishes data arrays
  const categories: Category[] = [
    { id: '1', name: 'Best Seller', icon: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Indian', icon: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Chinese', icon: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Italian', icon: 'https://via.placeholder.com/150' },
    { id: '5', name: 'Fast Food', icon: 'https://via.placeholder.com/150' },
  ];

  const dishes: Dish[] = [
    {
      id: '1',
      name: 'Dish 1',
      image: 'https://via.placeholder.com/300',
      price: '₹70 / Kg',
    },
    {
      id: '2',
      name: 'Dish 2',
      image: 'https://via.placeholder.com/300',
      price: '₹120 / Kg',
    },
    {
      id: '3',
      name: 'Dish 3',
      image: 'https://via.placeholder.com/300',
      price: '₹150 / Kg',
    },
    {
      id: '4',
      name: 'Dish 4',
      image: 'https://via.placeholder.com/300',
      price: '₹200 / Kg',
    },
  ];

  // Function to render each category item
  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity style={styles.categoryItem} activeOpacity={0.8}>
      <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  // Function to render each dish item
  const renderDishItem = ({ item }: { item: Dish }) => (
    <TouchableOpacity
      style={styles.dishContainer}
      activeOpacity={0.8}
      onPress={() => console.log('Dish pressed:', item.name)}
    >
<Card mode="contained" style={styles.dishCard}>
  <Card.Cover source={{ uri: item.image }} style={styles.dishImage} />
  <Card.Content>
    <Title style={styles.dishName}>{item.name}</Title>
    <Paragraph style={styles.dishPrice}>{item.price}</Paragraph>
  </Card.Content>
</Card>


    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header address={address} setAddress={setAddress} />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            horizontal
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
          />
        </View>

        {/* Popular Dishes Section */}
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

        {/* Promotional Banner */}
        <View style={styles.bannerContainer}>
          <Image
            source={{
              uri: 'https://via.placeholder.com/600x300?text=Special+Offer',
            }}
            style={styles.bannerImage}
          />
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  categoryList: {
    paddingLeft: 20,
  },
  categoryItem: {
    width: 120,
    height: 150,
    marginRight: 15,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    elevation: 0,
    shadowOpacity: 0,
  },
  categoryIcon: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  categoryText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dishList: {
    paddingLeft: 20,
  },
  dishContainer: {
    marginRight: 15,
  },
  dishCard: {
    width: 200,
    padding: 0,
    margin: 5,
    backgroundColor: 'FFFFFF',
    elevation: 0, // Android
    shadowOpacity: 0, // iOS
    shadowRadius: 0, // iOS
    shadowColor: 'transparent', // iOS
    shadowOffset: { width: 0, height: 0 }, // iOS
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  dishImage: {
    height: 150,
    borderRadius: 15,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  dishPrice: {
    fontSize: 16,
    color: '#333333',
    marginTop: 5,
  },
  bannerContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    borderRadius: 15,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 150,
  },
  bannerButton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  bannerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
