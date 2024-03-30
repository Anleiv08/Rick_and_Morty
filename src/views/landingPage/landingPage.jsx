import LoginForm from "../../components/loginForm/loginForm";
import style from './landingPage.module.css'

function LandingPage () {
    return ( 
        <div className={style.landingContainer}>
            <LoginForm/>
        </div>
     );
}

export default LandingPage ;