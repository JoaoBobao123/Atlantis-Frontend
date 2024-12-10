import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// URL do backend
const API_URL = 'http://localhost:5000/api/library';

const BookDetails = ({ route, navigation }) => {
  const { id } = route.params; // Pega o ID do livro
  const [book, setBook] = useState(null); // Detalhes do livro

  // Buscar detalhes do livro por ID
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        setBook(data); // Atualiza os detalhes do livro
      } catch (error) {
        console.error('Erro ao buscar detalhes do livro:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.subtitle}>Autor: {book.author}</Text>
      <Text>Ano: {book.year}</Text>
      <Text>Quantidade disponível: {book.quantity}</Text>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f4f4f4', flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  subtitle: { fontSize: 18, color: '#666', marginBottom: 10 },
  backButton: { marginTop: 20, backgroundColor: '#007BFF', padding: 10, borderRadius: 5 },
  backButtonText: { color: '#fff', fontWeight: 'bold' },
});

export default BookDetails;
