import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';
import Card from '../components/Card';
import { useQuery } from '@apollo/client';
import { allOrders } from '../graphQL/queires';
import { useEffect } from 'react';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

const { loading, error, data } = useQuery(allOrders);

useEffect(() => {
  if (error) {
    console.log(error)
  }
  if (data) {
    console.log(data)
  }
}, [data, error])

  return (
    <View style={styles.container}>
      {
        loading
        ? <Text>Loading...</Text>
        : error
        ? <Text>{error}</Text>
        : data.orders.map(({ itemName }: any) => (
          <Card itemName={itemName} />
        ))
      }
      {/* <View style={styles.separator} lightColor="#fff" darkColor="rgba(255,255,255,0.1)" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
