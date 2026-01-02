import { View, Text, Image } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center p-8">
      <Image 
        source={{ uri: 'https://via.placeholder.com/150/6366f1/ffffff?text=BP' }} 
        style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 40 }} 
      />
      <Text className="text-4xl font-bold text-white mb-4">Boilerplate</Text>
      <Text className="text-2xl text-white mb-8 text-center">NestJS + Nuxt 3 + Expo</Text>
      <Text className="text-xl text-white text-center">Monorepo starter ready!</Text>
      <View className="mt-12 space-y-4 w-full max-w-md">
        <View className="bg-white/20 rounded-xl p-6">
          <Text className="text-white text-lg font-bold">Backend</Text>
          <Text className="text-white">NestJS + Prisma + JWT Auth</Text>
        </View>
        <View className="bg-white/20 rounded-xl p-6">
          <Text className="text-white text-lg font-bold">Web</Text>
          <Text className="text-white">Nuxt 3 + Tailwind + Nuxt UI</Text>
        </View>
        <View className="bg-white/20 rounded-xl p-6">
          <Text className="text-white text-lg font-bold">Mobile</Text>
          <Text className="text-white">Expo + React Native + Nativewind</Text>
        </View>
      </View>
    </View>
  );
}
