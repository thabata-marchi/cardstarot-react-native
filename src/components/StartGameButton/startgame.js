import React from 'react';
import { TouchableHighlight } from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import suffle from 'shuffle-array';

const StartGame = ({toogleRender, setToogleRender, cards, setCards, setCardSelected}) => {

  const initGame = () => {
    setToogleRender(!toogleRender);
    setCards(suffle(cards));
    setCardSelected("");
  }  

  return (
    <TouchableHighlight style={styles.btnPlay} onPress={initGame}>
      <Icon name="play" style={styles.play} />
    </TouchableHighlight>
  )    
}

export default StartGame;