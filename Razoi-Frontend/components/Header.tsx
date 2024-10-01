import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Use Material Icons

interface HeaderProps {
  address: string;
  setAddress: (address: string) => void;
}

const Header: React.FC<HeaderProps> = ({ address, setAddress }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Top Section with Address and Profile Icon */}
      <View style={styles.topRow}>
        <View>
          <Text style={styles.deliveryText}>Deliver Now</Text>
          <TouchableOpacity style={styles.addressTextContainer}>
            <Text style={styles.addressText}>{address}</Text>
            <MaterialIcons name="keyboard-arrow-down" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.profileIconContainer}>
          <MaterialIcons name="person-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar Section */}
      <View style={styles.searchBarContainer}>
        <MaterialIcons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search for dishes & cuisines"
          placeholderTextColor="#888"
        />
        <MaterialIcons name="mic" size={20} color="#888" style={styles.micIcon} />
        <TouchableOpacity style={styles.filterIconContainer}>
          <MaterialIcons name="tune" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    paddingBottom: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  deliveryText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 3,
  },
  addressTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  profileIconContainer: {
    padding: 5,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  micIcon: {
    marginLeft: 10,
  },
  filterIconContainer: {
    marginLeft: 10,
    padding: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 25,
  },
});

export default Header;
