import React, { useState } from 'react';

import Logo from '../../images/logo.svg';
import { Modal } from '../../components/Modal/Modal';

import api from '../../services/api';

import "./Cadastro.css";

export function Cadastro(){
    const [userData, setUserData] = useState({});
    const [errorMessage, setErrorMessage] = useState("sdsddf");
    const [modalError, setModalError] = useState(false);

    const handleInput = (e)=>{
        setUserData({...userData, [e.target.name] : e.target.value});
    }

    const handleClick = () =>{
        let validateEmail = /\S+@\S+\.\S+/;
        const email = document.getElementById("email").value;

        if(!validateEmail.test(email)){
            setModalError(true);
            setErrorMessage("E-mail inválido");
        }else{
            const pass = document.getElementById("pass").value;
            const repeatPass = document.getElementById("repeatpass").value;
            
            if(!(pass.length >= 8)){
                setModalError(true);
                setErrorMessage("Senha muito curta.");
            }else{
                if(pass === repeatPass){
                    api.post("/register", userData)
                    .then(()=>{
                        window.location="/login";
                    })
                    .catch((err)=>{
                        setModalError(true);
                        setErrorMessage(err.response.data);
                    })
                }else{
                    setModalError(true);
                    setErrorMessage("Senhas não coincidem.");
                }
            }
        }
    }
    
    return(
        <div>
            {
                modalError &&
                <Modal>
                    <div className='cadastro--modal-container'>
                        <p className='cadastro-modal-info-error'>
                            {errorMessage}
                        </p>
                        <div>
                            <button
                                className='cadastro--modal-button'
                                style={{backgroundColor: '#222222'}}
                                onClick={()=>setModalError(!modalError)}>
                                    Fechar
                            </button>
                        </div>
                    </div>
                </Modal>
            }

            <img src={Logo} alt="Logo"/>

            <p className='cadastro--text'>Email</p>
            <input className='cadastro--input' id="email" type="email" name="email" onChange={handleInput}/>

            <p className='cadastro--text'>Senha</p>
            <input className='cadastro--input'id="pass" type="password" name="password" onChange={handleInput}/>

            <p className='cadastro--text'>Repetir senha</p>
            <input className='cadastro--input' id="repeatpass" type="password"/>
            
            <p></p>
            
            <button className='cadastro--button' onClick={handleClick}>CRIAR CONTA</button>
            
            <p className='cadastro--text-register'>Já tem uma conta?
                <a href='http://localhost:3000/' className='cadastro--text-link'> Fazer login.</a>
            </p>
        </div>
    );
}