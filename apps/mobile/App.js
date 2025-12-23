import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.logo} />
      <Text style={styles.title}>Boilerplate Mobile</Text>
      <Text style={styles.subtitle}>NestJS + Nuxt 3 + Expo</Text>
      <View style={styles.cards}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Backend Ready</Text>
          <Text>NestJS + Prisma + JWT</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Web Ready</Text>
          <Text>Nuxt 3 + Tailwind</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Mobile Ready</Text>
          <Text>Expo + React Native</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 20 },
  logo: { width: 120, height: 120, marginBottom: 30 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, color: '#666', marginBottom: 40 },
  cards: { width: '100%' },
  card: { backgroundColor: '#f0f0f0', padding: 20, borderRadius: 10, marginBottom: 20, alignItems: 'center' },
  cardTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
