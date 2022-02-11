import React, {useState, useEffect}  from 'react';
import {Header} from './Components/Header';
import {Logo} from './Components/Logo';
import {SearchBar} from './Components/SearchBar';
import {ContainerCards} from './Components/ContainerCards';
import {Card} from './Components/Card';
import {Pagination} from './Components/Pagination';
import {PagButton} from './Components/PagButton';

function App() {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState({})
  const [text, setText] = React.useState('');
  let searchCharacters = [];
  const baseUrl = 'https://rickandmortyapi.com/api/character';

  const consumeApi = async (url) => {
    const obj = await fetch(url);
    const data = await obj.json();
    setCharacters(data.results);
    setPages(data.info);
  }

  useEffect(() => {
    consumeApi(baseUrl);
  }, []);


  const onPrevius = () => {
    consumeApi(pages.prev);
  } 

  const onNext = () => {
    consumeApi(pages.next);
  } 

  if (characters.length >= 1) {
    searchCharacters = characters.filter(character => {
      const characterText = character.name.toLowerCase();
      const searchText = text.toLowerCase();
      return characterText.includes(searchText);	  
    });
  }
  else {
    searchCharacters = characters;
  }

  return (
    <React.Fragment>
      <Header>
        <Logo />
        <SearchBar
          text = {text}
          setText = {setText}
        />
      </Header>
      <ContainerCards>
        {searchCharacters?.map(character => (
          <Card 
            key = {character.id}
            name = {character.name}
            status = {character.status}
            species = {character.species}
            gender = {character.gender}
            image = {character.image}
          />
        ),)}
      </ContainerCards>
      <Pagination>
        {pages.prev && 
          <PagButton 
            onClick = {onPrevius}
            value = 'Previus'
          />
        }
        {pages.next && 
          <PagButton 
            onClick = {onNext}
            value = 'Next'
          />
        }
      </Pagination>
    </React.Fragment>
  );
}

export default App;

          