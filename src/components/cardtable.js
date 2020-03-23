import React, { useEffect, useCallback, useState } from 'react';
import api from '../services/api';
import { 
  SafeAreaView, 
  StyleSheet, 
  FlatList, 
  View, 
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import suffle from 'shuffle-array';

const CardTable = () => {
  const [ cards, setCards ] = useState([]);
  const [ pathCards, setPathCards ] = useState([]);
 
  useEffect(() => {
    apiConnect();
  }, []);

  const apiConnect = useCallback( async() => {
    try {
      const response = await api.get('tarot.json');
      const arrCards = response.data.cards.map(
        (item, index) => ({...item, id: index})
      );
      setCards( arrCards );      
      setPathCards({ url: response.data.imagesUrl, cardsBack: response.data.imageBackCard })

    } catch (err) {
      console.log("error", err);
    }

  }, [cards, pathCards])

  const renderItem = ({item, index}) => (
    <View key={index} style={styles.item}>
      <Image 
        style={styles.cardsImage}
        source={{uri: pathCards.url + item.image}}
      />
    </View>
  ) 

  const startGame = () => {
    setCards([]); 
    setTimeout(() => {
      setCards(suffle(cards)); 
    }, 5);   
    
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>
        Jogo de tarot     
      </Text>

      <TouchableOpacity 
        style={styles.buttonStartGame}
        onPress={startGame}
      />
      
      <FlatList 
        data={cards} 
        keyExtractor={item => item.id}
        numColumns={2} 
        renderItem={renderItem}  
      />  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    alignItems: "center",
  },
  item: {
    alignItems: "center",
    flexGrow: 1,
    margin: 4,
    padding: 10
  },
  cardsImage: {
    width: 120,
    height: 252,       
  },
  h1: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonStartGame: {
    backgroundColor: '#C00',
    borderRadius: 50,
    width:50,
    height:50,
    marginBottom: 10
  }
})

export default CardTable;