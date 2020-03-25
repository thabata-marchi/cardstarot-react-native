import React, { useEffect, useCallback, useState } from 'react';
import api from '../../services/api';
import { SafeAreaView, Text } from 'react-native';

import styles from './styles';
import { StartGame } from '../StartGameButton';
import ListCards from '../ListCards/listcards';

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

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}> Jogo de tarot </Text>
      <StartGame 
        toogleRender={toogleRender}
        setToogleRender={setToogleRender}
        cards={cards}
        setCards={setCards}
        setCardSelected={setCardSelected}
      />
      <ListCards 
        setCardSelected={setCardSelected}
        cardSelected={cardSelected}
        setCardTurn={setCardTurn}
        cardTurn={cardTurn}
        toogleRender={toogleRender}
        cards={cards}
        pathCards={pathCards}
      />
    </SafeAreaView>
  )
}

export default CardTable;