import styles from './card.module.css'

export default function Card(props) {
   const {character, onClose} = props;

    return (
       <div className={styles.cardContainer} >
         <div  className={styles.imageContainer}>
            <img 
            className={styles.characterImage} 
            src={character.image} 
            alt={character.name} 
            />
            <h2 className={styles.name}>{character.name}</h2>
            <button className={styles.closeButton} onClick={onClose}>X</button> 
         </div>

         <div className={styles.atributes}>
             <h2>Especie: {character.species}</h2>  
             <h2>Género: {character.gender}</h2>
         </div>
    </div>
    );
 }
 
 