import React, { useEffect, useState } from 'react';

import Logo from '../../images/logo.svg';
 
import "./MinhaConta.css";

import api from '../../services/api';

export function MinhaConta(){
    const [userData, setUserData] = useState({});
    const [leagueData, setLeagueData ] = useState();
    const user_id = localStorage.getItem("user_id");
    
    useEffect(()=>{
        api.get(`/getInfo/${user_id}`)
        .then((res)=>{
            setUserData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    useEffect(()=>{
        api.get(`/getAllLeagues/${user_id}`)
        .then((res)=>{
            const aux = res.data.map((league)=>{
                return(
                    <div 
                        onClick={()=>window.location=`liga/${league.league_id}`}
                        style={{cursor: "pointer"}}>
                            {league.name}
                    </div>
                )
            })
            setLeagueData(aux);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
            <img src={Logo} alt="Logo" style={{marginTop: "6vw"}}/>
            <h1 className='minhaConta--title'>Olá, pronto para mitar?</h1>
            <p className='minhaConta--description'>
                Bem-vindo(a) à sua conta! Gostaríamos de lembrar que para cada liga criada, um crédito 
                será consumido da sua conta. Por favor, tenha em mente que esses créditos não serão 
                devolvidos caso você decida excluir uma liga, então é importante usar com cuidado. 
            </p>

            <p className='minhaConta--credit-text'>Seus créditos: {userData?.credits ? userData?.credits : 0}</p>
            <button 
                className='minhaConta--buttons' 
                style={{backgroundColor: ' #FE7301'}}
                onClick={()=>window.location.assign("https://api.whatsapp.com/send?phone=5511912345678&text=Olá.%20Vi%20o%20produto%20no%20Facebook,%20aguardo%20mais%20informações")}>
                    Comprar créditos
            </button>

            <p className='minhaConta--description'>Seu código de usuário é: {userData?.user_code ? userData?.user_code : "-"}. </p>

            <div className='minhaconta--table-ligas-container-header'>
                <p className='minhaConta--table-title'>Suas ligas</p>
                <button 
                className='minhaConta--buttons' 
                style={{backgroundColor: '#21A70B'}}>
                    Criar liga
                </button>
            </div>
            <div className='minhaconta--table-ligas-container-body'>
                {leagueData ? leagueData : "Você ainda não criou nenhuma liga."}
            </div>

            <div className='minhaConta--buttons-bottom'>
                <button 
                    className='minhaConta--buttons' 
                    style={{backgroundColor: 'white', color:'#222222'}}
                    onClick={()=>{
                        localStorage.clear();
                        window.location="/login";
                    }}>
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