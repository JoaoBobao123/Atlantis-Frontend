import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookList from 'BookList';
import BookDetails from 'BookDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Rota inicial: Lista de Livros */}
        <Stack.Screen name="BookList" component={BookList} options={{ title: 'Lista de Livros' }} />
        {/* Rota de detalhes: Detalhes do Livro */}
        <Stack.Screen name="BookDetails" component={BookDetails} options={{ title: 'Detalhes do Livro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
