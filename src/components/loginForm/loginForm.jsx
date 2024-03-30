import style from './login.form.module.css'

function LoginForm() {
    return ( 
        <div className={style.formContainer}>
            <div className={style.formTitle}>
                <h1>Fill your Credentials</h1>
        </div>
        
    <form>
        <div className={style.credential}>
             <label>Username</label>
             <input type='text' placeholder='Your Email' name='email'/> 
         </div>
          <div className={style.credential}>
             <label>Passowrd</label>
             <input type='password' placeholder='Your Passsword' name='password'/>
          </div>
    
           <button type="submit" className={style.submitBtn}>
            LOGIN
           </button>
     </form>
    </div>
   );
}

export default LoginForm;