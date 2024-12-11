import { useLocalSearchParams, useRouter, useSearchParams } from 'expo-router';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function BookDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams(); 
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [isRented, setIsRented] = useState(false);

 
  const data = [
    { 
      id: '1', 
      title: 'Dom Casmurro', 
      author: 'Machado de Assis', 
    },
    { 
      id: '2', 
      title: 'Memórias Póstumas de Brás Cubas', 
      author: 'Machado de Assis', 
     },
    { 
      id: '3', 
      title: 'Grande Sertão: Veredas', 
      author: 'João Guimarães Rosa', 
    },
    { 
      id: '4', 
      title: 'O Cortiço', 
      author: 'Aluísio Azevedo', 
     },
    { 
      id: '5', 
      title: 'Iracema', 
      author: 'José de Alencar', 
     },
    { 
      id: '6', 
      title: 'Macunaíma', 
      author: 'Mário de Andrade', 
      summary: 'As aventuras cômicas e surrealistas de Macunaíma, o herói sem caráter, em sua busca por uma pedra mágica.' 
    },
    { 
      id: '7', 
      title: 'Capitães da Areia', 
      author: 'Jorge Amado', 
     },
    { 
      id: '8', 
      title: 'Vidas Secas', 
      author: 'Graciliano Ramos', 
     },
    { 
      id: '9', 
      title: 'A Moreninha', 
      author: 'Joaquim Manuel de Macedo', 
    },
    { 
      id: '10', 
      title: 'O Tempo e o Vento', 
      author: 'Erico Verissimo', 
         },
    { 
      id: '11', 
      title: 'A Hora da Estrela', 
      author: 'Clarice Lispector', 
        },
    { 
      id: '12', 
      title: 'O Quinze', 
      author: 'Rachel de Queiroz', 
         },
    { 
      id: '13', 
      title: 'Menino de Engenho', 
      author: 'José Lins do Rego', 
    
    },
    { 
      id: '14', 
      title: 'Sagarana', 
      author: 'João Guimarães Rosa', 
    },
    { 
      id: '15', 
      title: 'Fogo Morto', 
      author: 'José Lins do Rego', 
    }
  ];


  const book = data.find((item) => item.id === id);

  if (!book) {
    return (
      <View style={styles.container}>
        <Text>Livro não encontrado!</Text>
      </View>
    );
  }

  const handleRent = () => {
    if (name && dob) {
      setIsRented(true);
    } else {
      alert('Por favor, insira seu nome e data de nascimento!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>Autor: {book.author}</Text>
      <Text style={styles.summary}>{book.summary}</Text>

      {!isRented ? (
        <>
          <Text style={styles.prompt}>Deseja alugar este livro? Preencha seus dados abaixo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu Nome"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Data de Nascimento (DD/MM/AAAA)"
            value={dob}
            onChangeText={setDob}
          />
          <Button title="Alugar" onPress={handleRent} />
        </>
      ) : (
        <Text style={styles.success}>Obrigado, {name}! O livro foi alugado com sucesso.</Text>
      )}

      <Button title="Voltar" onPress={() => router.push('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  prompt: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  success: {
    fontSize: 16,
    color: 'green',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});