import Cards from './components/cards/Cards.jsx';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/navBar/navBar.jsx';
import logoRM from './assets/logo_2-removebg-preview.png'
import axios from 'axios';
import Detail from './views/detail/detail'
import About from './views/about/about'
import './App.css'
import LandingPage from './views/landingPage/landingPage.jsx';


function App() {
   const [characters, setCharacters] = useState([]) // se crea el estado(array vacio)

   function searchHandler(id){ // esta funcion es para darle click a la barra de busqueda para agregar un personaje al estado
      // setCharacters([...characters, example])
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
      }
   });
 }
   function closeHandler(id){
   let deleted = characters.filter((character)=> character.id !== Number(id));
   setCharacters(deleted);
   }


   function randomHandler(){
      let haveIt = []

      let random = (Math.random() * 826).toFixed()

      random = Number(random)

      if(!haveIt.includes(random)){
         haveIt.push(random)
         fetch(`https://rickandmortyapi.com/api/character/${random}`)
         .then((response) => response.json())
         .then ((data) =>  {
            if(data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('No hay personajes con ese ID');
         }
      });
   } else {
      console.log('Ya agregaste todos los personajes');
      return false
   }
 }

   return (
      <div className='App'>
         <img className='title' src={logoRM} alt='logo' />
         <NavBar onSearch={searchHandler} random={randomHandler} />
         <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route 
            path='/home' 
            element={<Cards characters={characters} onClose={closeHandler} /> } />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/about' element={<About/>} />
         </Routes>

      </div>
   );
}

export default App;
