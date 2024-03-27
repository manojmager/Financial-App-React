import { FlatList, StyleSheet, View, Text } from "react-native";
import ListItem from "../components/listItem";
import { useSelector } from 'react-redux'
import React from 'react'

function TransactionScreen(props) {
  const transactions = useSelector((store) => store.transaction);

  const renderItem = ({ item }) => <ListItem transaction={item} navigation={props.navigation} />;

  return (
    <View style={styles.container}>
      {transactions.length > 0 ? (
        <FlatList
          data={transactions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      ) : (
        <Text style={styles.emptyText}>No transactions available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
  emptyText: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#999',
  },
});

export default TransactionScreen;