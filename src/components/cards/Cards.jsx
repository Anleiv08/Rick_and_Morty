import Card from '../card/Card';
import styles from './cards.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;

   return (
   <div className={styles.cardList}>
      {characters.map((character) => (
         <Card 
         character={character}
         onClose={onClose}
         key={character.id}
         name={character.name}
         status={character.status}
         gender={character.gender}  
         origin={character.origin.name}
         species={character.species}
         image={character.image}
         />
      ))};
   </div>
   );
}
