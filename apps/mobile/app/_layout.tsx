import { Slot } from 'expo-router';
import { View } from 'react-native';

export default function Layout() {
  return (
    <View className="flex-1 bg-gradient-to-br from-blue-500 to-purple-600">
      <Slot />
    </View>
  );
}
