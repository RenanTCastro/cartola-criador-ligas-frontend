import React from 'react';

import Logo from '../../images/logo.svg';

import "./Cadastro.css";

export function Cadastro(){
    return(
        <div>
            <img src={Logo} alt="Logo"/>

            <p className='cadastro--text'>Email</p>
            <input className='cadastro--input' type="email"/>

            <p className='cadastro--text'>Senha</p>
            <input className='cadastro--input' type="password"/>

            <p className='cadastro--text'>Repetir senha</p>
            <input className='cadastro--input' type="password"/>
            
            <p></p>
            
            <button className='cadastro--button'>CRIAR CONTA</button>
            
            <p className='cadastro--text-register'>Já tem uma conta?
                <a href='http://localhost:3000/' className='cadastro--text-link'> Fazer login.</a>
            </p>
        </div>
    );
}