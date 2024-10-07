import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
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
    {
      id: '1',
      name: 'Groceries',
      icon: 'https://via.placeholder.com/100?text=Groceries',
    },
    {
      id: '2',
      name: 'Electronics',
      icon: 'https://via.placeholder.com/100?text=Electronics',
    },
    {
      id: '3',
      name: 'Clothing',
      icon: 'https://via.placeholder.com/100?text=Clothing',
    },
    {
      id: '4',
      name: 'Gifts',
      icon: 'https://via.placeholder.com/100?text=Gifts',
    },
    {
      id: '5',
      name: 'Books',
      icon: 'https://via.placeholder.com/100?text=Books',
    },
  ];

  const dishes: Dish[] = [
    {
      id: '1',
      name: 'Chicken Biryani',
      image: 'https://via.placeholder.com/100',
      price: '$10',
      category: 'Groceries',
    },
    {
      id: '2',
      name: 'Paneer Butter Masala',
      image: 'https://via.placeholder.com/100',
      price: '$8',
      category: 'Groceries',
    },
    {
      id: '3',
      name: 'Pasta',
      image: 'https://via.placeholder.com/100',
      price: '$12',
      category: 'Electronics',
    },
  ];

  const filteredDishes = selectedCategory
    ? dishes.filter((dish) => dish.category === selectedCategory)
    : [];

  const { width: screenWidth } = useWindowDimensions();

  const numColumns = screenWidth >= 600 ? 3 : 3;

  const paddingHorizontal = 20;
  const marginHorizontal = 10;

  const tileSize =
    (screenWidth - paddingHorizontal * 2 - marginHorizontal * numColumns * 2) /
    numColumns;

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        {
          width: tileSize,
          height: tileSize,
        },
        item.name === selectedCategory && styles.selectedCategoryItem,
      ]}
      onPress={() => setSelectedCategory(item.name)}
      activeOpacity={0.7}
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

  const renderPromotionalBanner = () => (
    <View style={styles.bannerContainer}>
      <Image
        source={{ uri: 'https://via.placeholder.com/600x150?text=Special+Offer' }}
        style={styles.bannerImage}
        resizeMode="cover"
      />
      <TouchableOpacity style={styles.bannerButton}>
        <Text style={styles.bannerButtonText}>Order Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <View style={styles.container}>
        {/* Fixed Header */}
        <Header address={address} setAddress={setAddress} />

        {/* Content */}
        <FlatList
          data={selectedCategory ? filteredDishes : categories}
          renderItem={selectedCategory ? renderDishItem : renderCategoryItem}
          keyExtractor={(item) => item.id}
          numColumns={selectedCategory ? 1 : numColumns}
          columnWrapperStyle={!selectedCategory ? styles.categoryRow : undefined}
          contentContainerStyle={styles.contentContainer}
          ListHeaderComponent={
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                {selectedCategory ? 'Dishes' : 'Browse Categories'}
              </Text>
            </View>
          }
          ListFooterComponent={renderPromotionalBanner}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light grey background for modern look
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
    color: '#212121', // Darker grey text
    marginBottom: 15,
  },
  categoryRow: {
    justifyContent: 'space-between',
  },
  categoryItem: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#FFFFFF', // White background for category items
  },
  selectedCategoryItem: {
    backgroundColor: '#E0F7FA', // Light cyan for selected category
  },
  categoryIcon: {
    width: 60,  // Reduced the size to fit better in the card
    height: 60, // Reduced the size to fit better in the card
    marginBottom: 10,
    borderRadius: 30, // Adjusted to match the new size, keeping the image round
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212121',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  selectedCategoryText: {
    color: '#00796B', // Teal color for selected text
    fontWeight: 'bold',
    fontSize: 6,
  },
  dishItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    // Removed fixed height to allow content to dictate card size
    justifyContent: 'space-between',
  },
  dishImage: {
    width: 100, // Adjusted dimensions
    height: 100,
    borderRadius: 15,
    marginRight: 15,
  },
  
  dishInfo: {
    flex: 1,
    justifyContent: 'center', // Centers text vertically
  },
  dishName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 5,
    textAlign: 'center', // Center the text horizontally
  },
  dishPrice: {
    fontSize: 16,
    color: '#00796B', // Teal color for price
    fontWeight: 'bold',
    textAlign: 'center', // Center the text horizontally
  },
  bannerContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
  bannerButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#00796B', // Teal color for the button
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
  },
  bannerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BrowseMenu;