import React, { useEffect, useState, useMemo } from 'react';

import { Modal } from '../../components/Modal/Modal';
import Logo from '../../images/logo.svg';
 
import "./MinhaConta.css";

import api from '../../services/api';

export function MinhaConta(){
    const [userData, setUserData] = useState({});
    const [leagueData, setLeagueData ] = useState();
    const [newLeagueData, setnewLeagueData ] = useState();
    const [modalDelete, setModalDelete] = useState(false);
    const [modalCreate, setModalCreate] = useState(false);
    const user_id = localStorage.getItem("user_id");

    const options = useMemo(() => {
        let opt = [];
        for (let i = 1; i <= 38; i++) {
          opt.push(<option value={i}>{i}° rodada</option>);
        }
        return opt;
    },[])

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

    const handleInput = (e)=>{
        setnewLeagueData({...newLeagueData, [e.target.name] : e.target.value});
    }

    const handleClick = async ()=>{
        api.post("/createLeague", {...newLeagueData,  user_id: user_id})
        .then(()=>{
            setModalCreate(!modalCreate);
            //window.location = "/liga/idquevouamndar";
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    const handleDeleteAccount = ()=>{
        api.delete(`/deleteUser/${user_id}`)
        .then(()=>{
            localStorage.clear();
            window.location="/login";
            setModalDelete(!modalDelete);
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    
    return(
        <div>
            {modalCreate &&
            <Modal>
                <div className='minhaConta--modal-container'>
                    <p className='minhaConta--modal-text'>Nome</p>
                    <input className='minhaConta--modal-input' onChange={handleInput} name="name"/>
                        
                    <p className='minhaConta--modal-text'>Descrição</p>
                    <textarea className='minhaConta--modal-textarea' onChange={handleInput} name="description"/>

                    <div className='minhaConta--modal-select-container'>
                        <div>
                            <p className='minhaConta--modal-text'>Rodada inicio</p>
                            <select className='minhaConta--modal-select' onChange={handleInput} name="start_round">
                                {options}
                            </select>
                        </div>
                        <div>
                            <p className='minhaConta--modal-text'>Rodada final</p>
                            <select className='minhaConta--modal-select' onChange={handleInput} name="end_round">
                                {options}
                            </select>
                        </div>
                    </div>

                    <div className='minhaConta--modal-button-container'>
                        <button 
                            className='minhaConta--modal-button' 
                            style={{backgroundColor: '#222222'}}
                            onClick={()=>setModalCreate(!modalCreate)}>
                                Cancelar
                        </button>
                        <button 
                            className='minhaConta--modal-button' 
                            style={{backgroundColor: '#21A70B'}}
                            onClick={handleClick}>
                                Salvar
                        </button>
                    </div>
                </div>
            </Modal>
            }
            
            {modalDelete &&
            <Modal>
                <div>
                    <div className='minhaConta--modal-delete-account-text'>
                        Tem certeza que deseja excluir sua conta? Todos créditos disponíveis 
                        serão perdidos. Você não poderá reverter essa ação depois
                    </div>
                    <div className='minhaConta--modal-container-buttons'>
                        <button 
                        className='minhaConta--buttons' 
                        style={{backgroundColor: '#222222'}}
                        onClick={()=>setModalDelete(!modalDelete)}>
                            Cancelar
                        </button>
                        <button 
                        className='minhaConta--buttons' 
                        style={{backgroundColor: '#FE0101'}}
                        onClick={handleDeleteAccount}>
                            Excluir
                        </button>
                    </div>
                </div>
            </Modal>
            }

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

            <div className='minhaConta--table-ligas-container-header'>
                <p className='minhaConta--table-title'>Suas ligas</p>
                <button 
                className='minhaConta--buttons' 
                style={{backgroundColor: '#21A70B'}}
                onClick={()=>setModalCreate(!modalCreate)}>
                    Criar liga
                </button>
            </div>
            <div className='minhaConta--table-ligas-container-body'>
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
                    style={{backgroundColor: '#FE0101'}}
                    onClick={()=>setModalDelete(!modalDelete)}>
                        Excluir conta
                </button>
            </div>
        </div>
    );
}