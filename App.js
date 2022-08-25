import { StatusBar } from 'expo-status-bar';
import { View, Text, Modal, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const data = [ 1, 2, 3 ];

export default function App() {
  return (
    <Modal
      visible
    >
      <View style={styles.container}>
        <Carousel
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: 'gray',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}
            >
              <Text>
                {item}
              </Text>
            </View>
          )}
          width={Dimensions.get('window').width}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
