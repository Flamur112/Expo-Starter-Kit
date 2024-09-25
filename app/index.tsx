import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>MUL</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2a422b',
    }
});
