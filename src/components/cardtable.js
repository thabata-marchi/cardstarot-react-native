import React, { useEffect, useCallback, useState } from 'react';
import api from '../services/api';
import { 
  SafeAreaView, 
  StyleSheet, 
  FlatList, 
  View, 
  Image,
  Text
} from 'react-native';

const CardTable = () => {
  const [ cards, setCards ] = useState([]);
  const [ pathCards, setPathCards ] = useState([]);
 
  useEffect(() => {
    apiConnect();
  }, []);

  const apiConnect = useCallback( async() => {
    try {
      const response = await api.get('tarot.json');
      const cards = response.data.cards.map(
        (item, index) => ({...item, id: index})
      );
      setCards( cards );      
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

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>
        Jogo de tarot
      </Text>
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
  }
})

export default CardTable;