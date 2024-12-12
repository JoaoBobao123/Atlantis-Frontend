import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { getRequest } from '../API/api';

export default function PAGE() {
  const router = useRouter();

  const [book, setBook] = useState([])
  
  const getLivros = async () => {
    const resp = await getRequest()
    setBook(resp)
  }

  useEffect(()=>{
    getLivros()
  },[])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Atlantis - a maior biblioteca de todos os tempo 🧜‍♂️🌊</Text>
      <Text style={styles.title}>O final feliz começa quando você devolve o livro no prazo❤️❤️❤️</Text>

      <FlatList
        data={book}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              router.push(`/books/${item.id}`);
            }}
            style={[styles.pressableButton, item.quantity <= 0 ? styles.faltaLivro : ""]}
            disabled={item.quantity > 0 ? false : true}
          >
            <Text style={styles.pressableText}>{item.title} - {item.quantity <= 0 ? "Em falta" : item.quantity} </Text>
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
  faltaLivro: {
    background: '#fd7e14'
  }
});
