import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Card from '../components/Card';
import { useQuery } from '@apollo/client';
import { allOrders } from '../graphQL/queires';

export default function TabOneScreen() {

const { loading, error, data } = useQuery(allOrders);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
      {
        loading
        ? <Text>Loading...</Text>
        : error
        ? <Text>{error}</Text>
        : data.orders.map(({ id, itemName, arrivalDate, shippedDate, value }: any) => (
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
