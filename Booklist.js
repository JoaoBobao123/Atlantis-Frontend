import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// URL do backend
const API_URL = 'http://localhost:5000/api/library';

const BookList = ({ navigation }) => {
  const [books, setBooks] = useState([]); // Lista de livros

  // Buscar livros do backend
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(API_URL); // Requisição GET para o backend
        const data = await response.json();
        setBooks(data); // Atualiza a lista de livros
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    };

    fetchBooks();
  }, []);

  // Renderiza cada livro como um botão
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.bookItem}
      onPress={() => navigation.push('BookDetails', { id: item.id })} // Navega para os detalhes do livro
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>Autor: {item.author}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lista de Livros</Text>
      <FlatList
        data={books} // Dados dos livros
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem} // Como exibir cada livro
      />
    </View>
  );
};

// Estilos da página
const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f4f4f4', flex: 1 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  bookItem: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
  subtitle: { fontSize: 16, color: '#666' },
});

export default BookList;
