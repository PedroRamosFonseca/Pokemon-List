import React from 'react';
import './index.css';
import axios from 'axios';
import PokemonDetails from './PokemonDetails'
import PokemonIndex from './PokemonIndex';

class ShowPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      input: '',
      pokemonList: [],
    }
  }

  async componentDidMount () {
    let i = 1;
    const pokemonList = await Promise.all(Array(807).fill().map( (poke)  => this.getPokemon(i++)))
    this.setState({pokemonList: pokemonList})
  }

  getListPokemons () {

  }

  async getPokemon (input) {
    const pokemon =  await axios.get('https://pokeapi.co/api/v2/pokemon/'+input)
    .then(
      response => response
    )
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    return pokemon.data
  }

  render () {
    let input = this.state.input;

    return (
      <div>
        
        <input placeholder='Id or name' ref = {node => {input = node}}></input>
        <button onClick={() => this.getPokemon(input.value)}>{'Search'}</button>
        <br></br>
        <PokemonDetails data={this.state.data} ></PokemonDetails>
        <br></br>
        <PokemonIndex data={this.state.pokemonList}></PokemonIndex>
      </div>
    )
  }
}


export default (ShowPokemon)