import React from 'react'
class GifList extends React.Component{
  render(){   
     return (
        <div>{this.props.gifs}</div>
     )
  }
}
export default GifList