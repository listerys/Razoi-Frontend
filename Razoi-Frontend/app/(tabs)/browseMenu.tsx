// BrowseMenu.tsx
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
import { Card, Title, Paragraph } from 'react-native-paper';

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
    {
      id: '6',
      name: 'Toys',
      icon: 'https://via.placeholder.com/100?text=Toys',
    },
  ];

  const dishes: Dish[] = [
    {
      id: '1',
      name: 'Chicken Biryani',
      image: 'https://via.placeholder.com/300',
      price: '₹200',
      category: 'Groceries',
    },
    {
      id: '2',
      name: 'Paneer Butter Masala',
      image: 'https://via.placeholder.com/300',
      price: '₹180',
      category: 'Groceries',
    },
    {
      id: '3',
      name: 'Gadget XYZ',
      image: 'https://via.placeholder.com/300',
      price: '₹1200',
      category: 'Electronics',
    },
    // Add more dishes with different categories
  ];

  const filteredDishes = selectedCategory
    ? dishes.filter((dish) => dish.category === selectedCategory)
    : [];

  const { width: screenWidth } = useWindowDimensions();

  const numColumns = screenWidth >= 600 ? 3 : 3;

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        item.name === selectedCategory && styles.selectedCategoryItem,
      ]}
      onPress={() => setSelectedCategory(item.name)}
      activeOpacity={0.8}
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
    <TouchableOpacity
      style={styles.dishItem}
      activeOpacity={0.8}
      onPress={() => console.log('Dish pressed:', item.name)}
    >
      <Card style={styles.dishCard}>
        <Card.Cover source={{ uri: item.image }} style={styles.dishImage} />
        <Card.Content>
          <Title style={styles.dishName}>{item.name}</Title>
          <Paragraph style={styles.dishPrice}>{item.price}</Paragraph>
        </Card.Content>
      </Card>
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
        <Text style={styles.bannerButtonText}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed Header */}
      <Header address={address} setAddress={setAddress} />

      {/* Content */}
      {selectedCategory ? (
        <FlatList
          data={filteredDishes}
          renderItem={renderDishItem}
          keyExtractor={(item) => item.id}
          numColumns={1}
          contentContainerStyle={styles.contentContainer}
          ListHeaderComponent={
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{selectedCategory}</Text>
            </View>
          }
          ListFooterComponent={renderPromotionalBanner}
        />
      ) : (
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          columnWrapperStyle={styles.categoryRow}
          contentContainerStyle={styles.contentContainer}
          ListHeaderComponent={
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Browse Categories</Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    color: '#333333',
    marginBottom: 15,
    fontFamily: 'Roboto-Bold',
  },
  categoryRow: {
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
    marginBottom: 20,
    width: '30%',
  },
  selectedCategoryItem: {
    backgroundColor: '#E0F7FA',
    borderRadius: 15,
    padding: 10,
  },
  categoryIcon: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212121',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  selectedCategoryText: {
    color: '#00796B',
    fontWeight: 'bold',
  },
  dishItem: {
    marginBottom: 20,
  },
  dishCard: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  dishImage: {
    height: 200,
  },
  dishName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    fontFamily: 'Roboto-Bold',
  },
  dishPrice: {
    fontSize: 18,
    color: '#FF6F61',
    marginTop: 5,
    fontFamily: 'Roboto-Regular',
  },
  bannerContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
  },
  bannerImage: {
    width: '100%',
    height: 150,
  },
  bannerButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#FF6F61',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
  },
  bannerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
  },
});

export default BrowseMenu;
