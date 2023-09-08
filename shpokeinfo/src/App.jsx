/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from './components/Button';


/* https://pokeapi.co/api/v2/pokemon/zeraora */
/* https://pokeapi.co/api/v2/pokemon/807 */

var scod = 2; 

const App = () => {
  
  const [pokemon, setPokemon] = useState("1");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  
  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
    console.log(pokemon);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();

  };

  const sortePoke = () => {
    const gerar = Math.floor(Math.random() * (898 - 1 + 1)) + 1;
    if (scod == 2) {
      setPokemon(gerar);
      getPokemon();
      scod= 3;
    }
    else{
      setPokemon(gerar);
      getPokemon();
      console.log(`Estado atual ${pokemon}`);
    }
  }

// const sleep = (milliseconds) => {
//   return new Promise(resolve => setTimeout(resolve, milliseconds))

// }

  const getPokemon = async () => {
    const pokeInfo = [];

    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${ pokemon }`;
      const res = await axios.get(url);
      pokeInfo.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      // Define o array pokeInfo para corresponder a PokemonData
      setPokemonData(pokeInfo);


    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    getPokemon();
  }, []
  );

  return (
    <div className="App" key='pinpokearea'>
      
      {pokemonData.map((data) => {
        return(
          <div className="container" key="containerkey">
          <div className="divTable" key={'keytablearea'}>
            <div className="quadroImagem" key={`keypokeimage`}>
              <img id="miniatura" 
              src={data.sprites["front_default"]} 
              alt="Ilustração do pokémon" 
              key={'keypokesprite'} />
            </div>
            <div className="divTableBody" key={'bodyPokeTable'}>
              <div className="divTableRow" key={'linhaID'}>
                <div className="divTableCellSup" key={`pokeID-aid`}>{data.id}</div>
                <div className="divTableCellInf" key={`pokeNames-daname`}>{data.name.toUpperCase()}</div>
              </div>
              <div className="divTableRow" key={'linhaTipo'}>
                <div className="divTableCellSup" key={`pokeTypeTitle-datatyp`}>Type</div>
                <div className="divTableCellInf" key={`pokeType-fspoketyp`}> {pokemonType}</div>
              </div>
              <div className="divTableRow" key={'linhaAltura'}>
                <div className="divTableCellSup" key={`pokeHeightTitle-spokeheigh`}>Height</div>
                <div className="divTableCellInf" key={`pokeHeight-spokeheighnum`}>
                  {" "}
                  {Math.round(data.height * 3.9)} inches
                </div>
              </div>
              <div className="divTableRow" key={'pokeTableRow'}>
                <div className="divTableCellSup" key={`pokeWeightTitle-spokeweight`}>Weight</div>
                <div className="divTableCellInf" key={`pokeWeight-spokeweightnum`}>

                  {Math.round(data.weight / 4.3)} lbs
                </div>
              </div>
              <div className="divTableRow" key={'pokeTableRow2'}>
                <div className="divTableCellSup" key={`pokeBattleNumTitle-spokebat`}>Number of Battles</div>
                <div className="divTableCellInf" key={`pokeBattles-spokenum`}> {data.game_indices.length} </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} key='formPoke'>
            <label className="txtLabel" key={'labelPoke'}>
            <Button onClick={() => sortePoke()}>❓ Aleatório</Button>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Digite o nome do pokemon aqui" 
                key='inputAreaPoke' />
            </label>
          </form>
          </div>
        );
      })}

      
      <div className="foot" key='pokeFoot'>
        <p>Desenvolvido por Samuel Mendes com PokeAPI, ReactJS e axios</p>
      </div>
      
    </div>
  );
};
export default App;