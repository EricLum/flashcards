const DeckAdapter = (function(){
  let urlPaths = {'base': 'http://localhost:3001/api/v1/decks'}
  return class DeckAdapter {

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
        deck: data
      })
    }
      return fetch(urlPaths['base'],header)
    }
  }
})()

export default DeckAdapter
