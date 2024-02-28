import './App.css';
import Card from './components/card/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';


   function searchHandler() {
      window.alert('El ID que estoy buscando')
   }

   function closeHandler() {
      window.alert('Emulamos que se cierra la card')
   }


function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={searchHandler} />
         <Cards characters={characters} onClose={closeHandler} />
         <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            />
      </div>
   );
}

export default App;
