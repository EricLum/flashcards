const CardAdapter = (function(){
  let urlPaths = {'base': 'http://localhost:3001/api/v1/cards'}
  if (process.env.NODE_ENV === 'production') {
    urlPaths['base'] = 'https://flashiercards-backend.herokuapp.com/api/v1/decks'
  }
  return class CardAdapter {

    static index() {
      return fetch(urlPaths['base'])
    }

    static get(index){
      return fetch(urlPaths['base']+`${index}`)
    }

    static post(data){
      let header = {method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        card: data,
        deck: {
          id: data.deckId
        }
      })
    }
      return fetch(urlPaths['base'],header)
    }

    static getDeckCards(data){
      let header = {method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        card: {deckId: data}
      })
    }
    return fetch(urlPaths['base'],header)
    }



  }
})()

export default CardAdapter
