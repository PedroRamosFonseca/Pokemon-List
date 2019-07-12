import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  
  render () {
    const pokemonIndex = this.props.data.map(function(poke) {
        return <img src = {poke.sprites.front_default}></img>
    })
    return (
      <div>
        {pokemonIndex}
      </div>
    )
  }
}


export default (PokemonIndex)