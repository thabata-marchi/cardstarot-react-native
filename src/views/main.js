import React, { useState } from 'react';
import useDataApi from '../services/useDataApi';

import { SafeAreaView, Text } from 'react-native';

import styles from './styles';
import { StartGame } from '../components/StartGameButton';
import { ListCards } from '../components/ListCards';

const Main = () => {
  const data = useDataApi(); 

  const [ toogleRender, setToogleRender ] = useState(false);
  const [ cardTurn, setCardTurn ] = useState(false);
  const [ cardSelected, setCardSelected ] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Jogo de tarot</Text>
      <StartGame 
        toogleRender={toogleRender}
        setToogleRender={setToogleRender}
        cards={data.cardsRes}
        setCardSelected={setCardSelected}
      /> 
      <ListCards 
        setCardSelected={setCardSelected}
        cardSelected={cardSelected}
        setCardTurn={setCardTurn}
        cardTurn={cardTurn}
        toogleRender={toogleRender}
        cards={data.cardsRes}
        pathCards={data.pathCardsRes}
      />
    </SafeAreaView>
  )
}

export default Main;