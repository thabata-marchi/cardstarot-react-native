import { StyleSheet } from 'react-native';

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
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    width: 120,
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
  play: {
    color: '#fff',
    paddingLeft: 18,
    paddingTop: 15,
    fontSize: 20,
    backgroundColor: '#C00',
    borderRadius: 50,
    width:50,
    height:50,
    marginBottom: 10,  
  },
  textCard: {
    textAlign: "center",
    marginTop: 10,
  }
})

export default styles;