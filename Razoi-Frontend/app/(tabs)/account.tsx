import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const AccountScreen: React.FC = () => {
  const userName = 'John Doe';
  const email = 'johndoe@example.com';

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      {/* Account Actions */}
      <View style={styles.actionSection}>
        <TouchableOpacity style={styles.actionItem}>
          <Text style={styles.actionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Text style={styles.actionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Text style={styles.actionText}>Logout</Text>
        </TouchableOpacity>
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
  profileSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  actionSection: {
    marginTop: 20,
  },
  actionItem: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  actionText: {
    fontSize: 16,
    color: '#B71C1C', // Use your preferred color here
  },
});

export default AccountScreen;
