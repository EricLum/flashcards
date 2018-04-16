const CardAdapter = ( function(){
  let postBody = JSON.stringify({
    card:{}
  })

  let urlPaths = {'base': 'http://localhost:3001/api/v1/cards'}
  return class CardAdapter {

    static indexCards() {
      return fetch(urlPaths['base'])
    }

    static getCard(index){
      return fetch(urlPaths['base']+`${index}`)
    }

    static postCard(data){
      let header = {method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        card: data
      })
    }
      return fetch(urlPaths['base'],header)
    }
  }
})()

const DeckAdapter = ( function(){

})()

export {CardAdapter, DeckAdapter}
