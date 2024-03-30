import SearchBar from '../searchbar/SearchBar';
import styles from './navBar.module.css'
import { Link } from 'react-router-dom';

export default function NavBar ({onSearch, random}){
    return (
    <div className={styles.navContainer}>
        <div className={styles.linksContainer}>
            <Link to='/about'>About</Link>
            <Link to='/home'>Home</Link>
        </div>

        <SearchBar onSearch={onSearch}/>
        <button className={styles.random} onClick={random}>
            ADD RANDOM
        </button>
    </div>
    )
}
