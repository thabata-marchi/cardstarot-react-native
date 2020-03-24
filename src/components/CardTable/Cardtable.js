import React, { useEffect, useCallback, useState } from 'react';
import api from '../../services/api';
import { 
  SafeAreaView, 
  FlatList, 
  View, 
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import suffle from 'shuffle-array';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const CardTable = () => {
  const [ cards, setCards ] = useState([]);
  const [ pathCards, setPathCards ] = useState([]); 
  const [ toogleRender, setToogleRender ] = useState(false);

  const [ cardTurn, setCardTurn ] = useState(false);
  const [cardSelected, setCardSelected] = useState("");

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

  const selectCards = item => { 
    setCardSelected(item);
    if(item) return setCardTurn(!cardTurn)
  }

  const startGame = () => {
    setToogleRender(!toogleRender);
    setCards(suffle(cards));
    setCardSelected("");
  }

  const renderItem = ({item, index}) => (
    
    <View key={index} style={styles.item}>
      {  
        !toogleRender || cardTurn && item === cardSelected ? 
          <>
            <Image 
              style={styles.cardsImage} 
              source={{uri: pathCards.url + item.image}} 
            />
            
          { 
            cardTurn && item === cardSelected ?           
            <Text style={styles.textCard}>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Text>
            :
            null 
          }
          </>
        :        
        <TouchableOpacity onPress={() => selectCards(item)}>
          <Image 
            style={styles.cardsImage} 
            source={{uri: pathCards.cardsBack}} 
          />
        </TouchableOpacity>   
      }
    </View>
  ) 

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>
        Jogo de tarot     
      </Text>

      <TouchableHighlight 
        onPress={startGame}
      >
        <Icon name="play" style={styles.play} />
      </TouchableHighlight>
      
      <FlatList 
        data={cards} 
        keyExtractor={item => item.id}
        numColumns={2} 
        renderItem={renderItem}  
      />  
    </SafeAreaView>
  )
}



export default CardTable;