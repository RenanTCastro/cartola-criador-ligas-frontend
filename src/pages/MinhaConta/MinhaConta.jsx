import React from 'react';

import Logo from '../../images/logo.svg';
 
import "./MinhaConta.css";

export function MinhaConta(){

    return(
        <div>
            <img src={Logo} alt="Logo" style={{marginTop: "6vw"}}/>
            <h1 className='minhaConta--title'>Olá, pronto para mitar?</h1>
            <p className='minhaConta--description'>
                Bem-vindo(a) à sua conta! Gostaríamos de lembrar que para cada liga criada, um crédito 
                será consumido da sua conta. Por favor, tenha em mente que esses créditos não serão 
                devolvidos caso você decida excluir uma liga, então é importante usar com cuidado. 
            </p>

            <p className='minhaConta--credit-text'>Seus creditos: 1</p>
            <button 
                className='minhaConta--buttons' 
                style={{backgroundColor: ' #FE7301'}}
                onClick={()=>window.location.assign("https://api.whatsapp.com/send?phone=5511912345678&text=Olá.%20Vi%20o%20produto%20no%20Facebook,%20aguardo%20mais%20informações")}>
                    Comprar créditos
            </button>

            <p className='minhaConta--description'>Seu código de usuário é: AB233. </p>

            <div className='minhaconta--table-ligas-container-header'>
                <p className='minhaConta--table-title'>Suas ligas</p>
                <button 
                className='minhaConta--buttons' 
                style={{backgroundColor: '#21A70B'}}>
                    Criar liga
                </button>
            </div>
            <div className='minhaconta--table-ligas-container-body'>
                <div>Liga MilGrau</div>
                <div>Rodada premiada</div>
            </div>

            <div className='minhaConta--buttons-bottom'>
                <button 
                    className='minhaConta--buttons' 
                    style={{backgroundColor: 'white', color:'#222222'}}>
                        Sair
                </button>
                <button 
                    className='minhaConta--buttons' 
                    style={{backgroundColor: '#FE0101'}}>
                        Excluir conta
                </button>
            </div>
        </div>
    );
}