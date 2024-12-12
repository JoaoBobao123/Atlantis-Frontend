import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { getRequest } from '../API/api';

export default function PAGE() {
  const router = useRouter();

  const [book, setBook] = useState([])
  useEffect(()=>{
    const getLivros = async () => {
      const resp = await getRequest()
      setBook(resp)
    }

    getLivros()
  },[])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Atlantis - a maior biblioteca de todos os tempo 🧜‍♂️🌊</Text>

      <FlatList
        data={book}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              router.push(`/books/${item.id}`);
            }}
            style={styles.pressableButton}
          >
            <Text style={styles.pressableText}>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFAFA',
    marginBottom: 20,
    textAlign: 'center',
  },
  pressableButton: {
    backgroundColor: '#008B8B', 
    padding: 12,
    borderRadius: 30,
    marginBottom: 8,
    alignItems: 'center',
  },
  pressableText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
