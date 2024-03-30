import { useNavigate } from 'react-router-dom';
import styles from './card.module.css'

export default function Card(props) {
   
   const navigate = useNavigate()
   const {character, onClose} = props;


   function navigateHandler(){
      navigate(`/detail/${character.id}`)
   }

    return (
       <div className={styles.cardContainer} >
         <div  className={styles.imageContainer}>
            <img 
            className={styles.characterImage} 
            src={character.image} 
            alt={character.name}
            onClick={navigateHandler} 
            />
            <h2 className={styles.name}>{character.name}</h2>
            <button className={styles.closeButton} onClick={()=>{onClose(character.id)}}>X</button> 
         </div>

         <div className={styles.atributes}>
             <h2>Species: {character.species}</h2>  
             <h2>Gender: {character.gender}</h2>
         </div>
    </div>
    );
 }
 
 