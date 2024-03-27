import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TransactionDetailScreen({ route, navigation }) {
  const { title, amount, address } = route.params;

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.detailContainer}>
            <Text style={styles.label}>Amount:</Text>
            <Text style={styles.value}>{amount}</Text>
            </View>
            <View style={styles.detailContainer}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{address}</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: '#ffffff',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 5,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    fontSize: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 18,
    color: '#000000',
    marginLeft: 5,
  },
});
