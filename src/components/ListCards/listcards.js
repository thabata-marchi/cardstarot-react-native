import React from 'react';
import { 
  FlatList, 
  View, 
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

const ListCards = ({setCardSelected, cardSelected, setCardTurn, cardTurn, toogleRender, cards, pathCards}) => {

  const selectCards = item => { 
    setCardSelected(item);
    if(item) return setCardTurn(!cardTurn)
  }

  const renderItem = ({item, index}) => (    
    <View key={index} style={styles.item}>
      {!toogleRender || cardTurn && item === cardSelected ? 
          <>
            <Image style={styles.cardsImage} source={{uri: pathCards.url + item.image}} />
            {cardTurn && item === cardSelected 
            ? <Text style={styles.textCard}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Text>
            : null}
          </>
        : <TouchableOpacity onPress={() => selectCards(item)}>
          <Image 
            style={styles.cardsImage} 
            source={{uri: pathCards.cardsBack}} 
          />
        </TouchableOpacity>}
    </View>
  ) 

  return (
    <FlatList 
      data={cards} 
      keyExtractor={item => item.id}
      numColumns={2} 
      renderItem={renderItem}  
    />      
  )
}

export default ListCards;