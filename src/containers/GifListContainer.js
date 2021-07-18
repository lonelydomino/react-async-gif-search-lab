import React from 'react'
import GifList from '../components/GifList.js'
class GifListContainer extends React.Component{
    state = {
        gifs: []
    }
    componentDidMount() {
        fetch("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                gifs: json.data
            })
        })
    }
    render(){ 
        debugger 
     return (
        <div>
        </div>
     )
  }
}
export default GifListContainer