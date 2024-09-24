import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For the dropdown icon

interface HeaderProps {
  address: string;
  setAddress: (address: string) => void;
}

const Header: React.FC<HeaderProps> = ({ address, setAddress }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.addressContainer}>
        <TouchableOpacity style={styles.addressTextContainer}>
          <Text style={styles.addressText}>{address}</Text>
          <Ionicons name="chevron-down-outline" size={20} color="#B71C1C" />
        </TouchableOpacity>
      </View>
      
      <TextInput
        style={styles.searchBar}
        placeholder="Search for dishes..."
        placeholderTextColor="#888"
        value="Search for dishes..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
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
    fontSize: 16,
    color: '#333',
  },
});

export default Header;
