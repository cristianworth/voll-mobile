import { StyleSheet, Text, View } from 'react-native';

export default function Principal() {
  return (
    <View style={styles.container}>
      <Text>Main screen.</Text>
    </View>
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
