import { useEffect, useCallback, useState } from 'react';
import api from './api';

const useDataApi = () => {
  const [ cardsRes, setCardsRes ] = useState([]);
  const [ pathCardsRes, setPathCardsRes ] = useState([]); 

  useEffect(() => {
    apiConnect();
  }, []);

  const apiConnect = useCallback( async() => {
    try {
      const response = await api.get('tarot.json');
      const arrCards = response.data.cards.map(
        (item, index) => ({...item, id: index})
      );
      setCardsRes( arrCards );      
      setPathCardsRes({ url: response.data.imagesUrl, cardsBack: response.data.imageBackCard })

    } catch (err) {
      console.log("error", err);
    }
  }, [cardsRes, pathCardsRes]) 

  return { cardsRes, pathCardsRes }
}

export default useDataApi;