import { useLocalSearchParams, useRouter, useSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getRequestById, postRequest } from '../../API/api';

export default function BookDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams(); 
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [isRented, setIsRented] = useState(false);
  
  const [book, setBook] = useState([])
  useEffect(()=>{
    const getLivros = async () => {
      const resp = await getRequestById(id)
      setBook(resp)
    }

    getLivros()
  },[])
  
  const postLivros = async () => {
    const add = await postRequest(id);
    console.log(add)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>Autor: {book.author}</Text>
      <Text style={styles.summary}>{book.year}</Text>

     
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
          <Button title="Alugar" onPress={()=> postLivros()} />
        </>
     

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