const DeckAdapter = (function(){
  let urlPaths = {'base': 'http://localhost:3001/api/v1/decks'}
  return class DeckAdapter {

    static index() {
      return fetch(urlPaths['base'])
    }

    static get(id){
      let body = JSON.stringify({
        body: {
          deck: id
        }
      })
      let newHeader = Object.assign({}, body)
      //add optional header for getting the cards of a deck
      return fetch(urlPaths['base']+`/${id}`, newHeader)
    }

    // static retrieveCards(deckId){
    //   return fetch(urlPaths['base'])
    // }

    static post(data){
      let header = {method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        deck: data
      })
    }
      return fetch(urlPaths['base'],header)
    }
  }
})()

export default DeckAdapter
