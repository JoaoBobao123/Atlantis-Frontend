import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { getRequestById, postRequest } from '../../API/api';

export default function BookDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams(); 
  const [name, setName] = useState('');
  const [aniversario, setAniversario] = useState('');
  const [isRented, setIsRented] = useState(false);
  const [book, setBook] = useState([]);
  const [error, setError] = useState('');

  const getLivros = async () => {
    try {
      const resp = await getRequestById(id);
      setBook(resp);
    } catch (err) {
      setError('Erro ao carregar os dados do livro.');
    }
  };

  useEffect(() => {
    getLivros();
  }, []);

  const postLivros = async () => {
    try {
      await postRequest(id, name, aniversario);
      getLivros();
      
      router.push('/');
      setError('');
    } catch (err) {
      setError('Erro ao alugar o livro. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      {error && (
        <View style={styles.errorCard}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>Autor: {book.author}</Text>
      <Text style={styles.summary}>Ano: {book.year}</Text>
      <Text style={styles.summary}>Quantidade: {book.quantity}</Text>

      <>
        <Text style={styles.prompt}>Deseja alugar este livro? Preencha seus dados abaixo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu Nome"
          placeholderTextColor={"#FFF"}  // Cor do texto do placeholder em branco
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento (DD/MM/AAAA)"
          value={aniversario}
          placeholderTextColor={"#FFF"}  // Cor do texto do placeholder em branco
          onChangeText={setAniversario}
        />

        <TouchableOpacity
          style={styles.rentButton}
          onPress={() => postLivros()}
        >
          <Text style={styles.buttonText}>Alugar</Text>
        </TouchableOpacity>
      </>
      
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push('/')}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',  // Fundo preto
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',  // Texto branco
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    color: '#FFF',  // Texto branco
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
    color: '#FFF',  // Texto branco
    marginBottom: 20,
  },
  prompt: {
    fontSize: 16,
    marginBottom: 10,
    color: '#FFF',  // Texto branco
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    color: '#FFF',  // Texto dentro das caixas de texto em branco
    backgroundColor: '#333',  // Fundo escuro nas caixas de texto
  },
  rentButton: {
    backgroundColor: '#dc3545',  // Vermelho
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#007BFF',  // Azul
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',  // Texto branco
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorCard: {
    backgroundColor: '#FFCCCB',  // Vermelho claro
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF0000',
  },
  errorText: {
    color: '#FF0000',  // Texto de erro em vermelho
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
