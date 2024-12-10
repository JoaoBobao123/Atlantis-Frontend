import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

export default function PAGE() {
  const router = useRouter();

  
  const data = [
    { id: '1', title: 'Dom Casmurro', author: 'Machado de Assis', year: '1899', qtd: '2' },
    { id: '2', title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis', year: '1881', qtd: '3' },
    { id: '3', title: 'Grande Sertão: Veredas', author: 'João Guimarães Rosa', year: '1956', qtd: '4' },
    { id: '4', title: 'O Cortiço', author: 'Aluísio Azevedo', year: '1890', qtd: '4' },
    { id: '5', title: 'Iracema', author: 'José de Alencar', year: '1865', qtd: '1' },
    { id: '6', title: 'Macunaíma', author: 'Mário de Andrade', year: '1928', qtd: '11' },
    { id: '7', title: 'Capitães da Areia', author: 'Jorge Amado', year: '1937', qtd: '2' },
    { id: '8', title: 'Vidas Secas', author: 'Graciliano Ramos', year: '1938', qtd: '9' },
    { id: '9', title: 'A Moreninha', author: 'Joaquim Manuel de Macedo', year: '1844', qtd: '2' },
    { id: '10', title: 'O Tempo e o Vento', author: 'Erico Verissimo', year: '1949', qtd: '1' },
    { id: '11', title: 'A Hora da Estrela', author: 'Clarice Lispector', year: '1977', qtd: '1' },
    { id: '12', title: 'O Quinze', author: 'Rachel de Queiroz', year: '1930', qtd: '1' },
    { id: '13', title: 'Menino de Engenho', author: 'José Lins do Rego', year: '1932', qtd: '5' },
    { id: '14', title: 'Sagarana', author: 'João Guimarães Rosa', year: '1946', qtd: '3' },
    { id: '15', title: 'Fogo Morto', author: 'José Lins do Rego', year: '1943', qtd: '1' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Título */}
      <Text style={styles.title}>Alexandria</Text>

      {/* Lista de Livros */}
      <FlatList
        data={data}
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
    backgroundColor: '#F8F8F8',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  pressableButton: {
    backgroundColor: '#008B8B', 
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  pressableText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
