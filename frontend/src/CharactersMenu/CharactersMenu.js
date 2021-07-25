import React from 'react';
import { NavLink } from 'react-router-dom';
import './CharactersMenu.css';

const CharactersMenu = (props) => {
  const createCharacters = () => {
    if (props.characters && props.characters[0]) {
      const CharactersArray = [];
      for (let k in props.characters) {
        CharactersArray.push(<NavLink to={`/${props.characters[k].playername}`} key={k} className={`${props.characters[k].playername}`}><div className='caption'><h2>{props.characters[k].charactername}</h2><h3>Postać Gracza: {props.characters[k].playername}</h3><p>{props.characters[k].description}</p></div></NavLink>);
      }
      return (CharactersArray)
    }
  }
  return(
    <div className='CharactersMenu'>
      <h1>Wybierz postać</h1>
      <div className="Menu">
        {createCharacters()}
      </div>
    </div>
  )
}

export default CharactersMenu;
