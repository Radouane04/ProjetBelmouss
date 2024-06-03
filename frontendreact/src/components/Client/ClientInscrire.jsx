import React from "react";
import { Link } from 'react-router-dom';
export default function ClientInscrire(){
  return(
    <div class="login-container">
        <form>
            <h2 className="title">S'inscrire</h2>
            <div class="form-group">
                <label for="email">Nom:</label>
                <input type="text" id="nom" name="nom" required/>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="form-group">
                <label for="password">Mot de passe:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <label for="password">Verification de mot de passe:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div className="form-group">
              <button type="submit" id="button-login">Se connecter</button>
              <br/>
              <hr/>
              <p className="paraghrap">Déja vous avez un compte ? <Link to="/Login"><a  style={{textDecoration:'none'}}>Se connecter</a></Link></p>
            </div>
        </form>
    </div>
  )
}