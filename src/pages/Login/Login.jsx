import React, { useState } from 'react';


import Logo from '../../images/logo.svg';
import { Modal } from '../../components/Modal/Modal';

import auth from "../../utils/auth";
import api from "../../services/api";

import "./Login.css";

export function Login(){
    const [modal, setModal] = useState(true);
    const [userData, setUserData] = useState({});

    const handleInput = (e)=>{
        setUserData({...userData, [e.target.name] : e.target.value});
        console.log(userData)
    }
    
    const handleClick = async ()=>{
        await api.post('/login', userData)
        .then((res)=>{
            auth.save(res.data);
            window.location="/produtos";
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    
    return(
        <div>
            {modal &&
                <Modal>
                    <div className='login--modal-container'>
                        <p className='login-modal-info'>
                            Será enviado um e-mail para o endereço cadastrado na sua conta. 
                            Por favor, verifique sua caixa de entrada e siga as instruções 
                            contidas no e-mail para confirmar a redefinição de senha.
                        </p>
                        <p className='login--modal-text'>Email</p>
                        <input className='login--modal-input' type="email"/>

                        <p className='login--modal-text'>Nova senha</p>
                        <input className='login--modal-input' type="password"/>

                        <p className='login--modal-text'>Repetir senha</p>
                        <input className='login--modal-input' type="password"/>

                        <div className='login--modal-button-container'>
                            <button 
                                className='login--modal-button' 
                                style={{backgroundColor: '#222222'}}
                                onClick={()=>setModal(!modal)}>
                                    Cancelar
                            </button>
                            <button 
                                className='login--modal-button' 
                                style={{backgroundColor: '#21A70B'}}
                                onClick={()=>console.log("")}>
                                    Salvar
                            </button>
                        </div>
                    </div>
                </Modal>
            }

            <img src={Logo} alt="Logo"/>
            <p className='login--text'>Email</p>
            <input className='login--input' type="email" onChange={handleInput} name="email"/>
            <p className='login--text'>Senha</p>
            <input className='login--input' type="password" onChange={handleInput} name="password"/>
            <p className='login--text-reset'>Não sabe sua senha?
                <a className='login--text-link' onClick={()=>setModal(!modal)}> Clique aqui.</a>
            </p>
            <button className='login--button'>ENTRAR</button>
            <p className='login--text-register'>Não tem uma conta?
                <a href='http://localhost:3000/' className='login--text-link'> Criar conta.</a>
            </p>
        </div>
    );
}