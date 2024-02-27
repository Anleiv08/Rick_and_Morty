import Card from './Card';
import React from 'react';

export default function Cards(props) {
   const { characters, onClose } = props;

   return (
   <div>
      {characters.map((character) => (
         <Card 
         character={character}
         onClose={onClose}
         key={character.id}
         name={character.name}
         status={character.status}
         gender={character.gender}
         origin={character.origin.name}
         image={character.image}
         />
      ))};
   </div>
   );
}
