import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';

import { Text, View } from '../components/Themed';
import { useDeliveriesQuery } from '../hooks/useDeliveriesQuery';

export default function TabTwoScreen() {

  const { pendings, loading, error } = useDeliveriesQuery();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        {
          loading
            ? <Text>Loading...</Text>
            : error
              ? <Text>{error}</Text>
              : pendings.map(({ id, itemName, arrivalDate, shippedDate, value }: any) => (
                <Card key={id} itemName={itemName} arrivalDate={arrivalDate} shippedDate={shippedDate} value={value} />
              ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  scrollview: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
