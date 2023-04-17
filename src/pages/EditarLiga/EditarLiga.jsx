import React, { useEffect, useMemo, useState } from 'react';
import Logo from '../../images/logo.svg';

import { Modal } from '../../components/Modal/Modal';
import { Loading } from '../../components/Loading/Loading';

import api from '../../services/api';

import "./EditarLiga.css";

export function EditarLiga(){
    const [modal, setModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [leagueData, setLeagueData ] = useState();
    const [newLeagueData, setnewLeagueData ] = useState();
    const id = useMemo(()=>{
        const url = window.location.href;
        const parts = url.split('/');
        const id = parts.pop();
        return id;
    })

    const options = useMemo(() => {
        let opt = [];
        for (let i = 1; i <= 38; i++) {
          opt.push(<option value={i}>{i}° rodada</option>);
        }
        return opt;
    },[])
    
    useEffect(()=>{
        setIsLoading(true);
        api.get(`/getLeague/${id}`)
        .then((res)=>{
            setLeagueData(res.data[0]);
        })
        .catch((err)=>{
            console.log(err);
        });
        setIsLoading(false);
    },[]);

    
    const handleInput = (e)=>{
        setnewLeagueData({...newLeagueData, [e.target.name] : e.target.value});
    }

    const handleSave = () => {
        setIsLoading(true);
        api.put(`/editLeague/${id}`, newLeagueData)
        .then((res)=>{
            setModal(!modal);
            window.location.reload();
        })
        .catch((err)=>{
            console.log(err);
        });
        setIsLoading(false);
    }

    return(
        <div>
            {isLoading && <Loading/>}
            {modal &&
                <Modal>
                    <div className='editarLiga--modal-container'>
                        <p className='editarLiga--modal-text'>Nome</p>
                        <input className='editarLiga--modal-input' defaultValue={leagueData?.name} onChange={handleInput} name="name"/>
                        
                        <p className='editarLiga--modal-text'>Descrição</p>
                        <textarea className='editarLiga--modal-textarea' defaultValue={leagueData?.description} onChange={handleInput} name="description"/>

                        <div className='editarLiga--modal-select-container'>
                            <div>
                                <p className='editarLiga--modal-text'>Rodada inicio</p>
                                <select className='editarLiga--modal-select' defaultValue={leagueData?.start_round} onChange={handleInput} name="start_round">
                                    {options}
                                </select>
                            </div>
                            <div>
                                <p className='editarLiga--modal-text'>Rodada final</p>
                                <select className='editarLiga--modal-select' defaultValue={leagueData?.end_round} onChange={handleInput} name="end_round">
                                    {options}
                                </select>
                            </div>
                        </div>

                        <div className='editarLiga--modal-button-container'>
                            <button 
                                className='editarLiga--modal-button' 
                                style={{backgroundColor: '#222222'}}
                                onClick={()=>setModal(!modal)}>
                                    Cancelar
                            </button>
                            <button 
                                className='editarLiga--modal-button' 
                                style={{backgroundColor: '#21A70B'}}
                                onClick={handleSave}>
                                    Salvar
                            </button>
                        </div>
                    </div>
                </Modal>
            }

            <img src={Logo} alt="Logo" />
            <h1 className='editarLiga--title'>{leagueData?.name ? leagueData?.name : "Nome da liga"}</h1>
            <p className='editarLiga--description'> {leagueData?.description ? leagueData?.description : ""}</p>

            <div className='editarLiga--button-container'>
                <button className='editarLiga--buttons' onClick={()=>setModal(!modal)}>✏️ Editar Liga</button>
                <button className='editarLiga--buttons'>✅ Adicionar Time</button>
                <button className='editarLiga--buttons'>🔗 Compartilhar</button>
            </div>

            <p className='editarLiga--description'>{
                leagueData?.start_round === leagueData?.end_round ?
                "Válido pela " +  leagueData?.start_round  + "° rodada" :
                "Válido da " + leagueData?.start_round + "° rodada até a " + leagueData?.end_round + "° rodada"
            }
            </p>
            <table>
                <tr>
                    <th className='editarLiga--table-header'>Posição</th>
                    <th className='editarLiga--table-header'>Time</th>
                    <th className='editarLiga--table-header'>Pontuação geral</th>
                    <th className='editarLiga--table-header'>Cartoletas</th>
                    <th className='editarLiga--table-header'></th>
                </tr>
                <tr>
                    <td className='editarLiga--table-body'>1°</td>
                    <td className='editarLiga--table-body'>Caraíbas FC</td>
                    <td className='editarLiga--table-body'>102,45</td>
                    <td className='editarLiga--table-body'>569,67</td>
                    <td className='editarLiga--table-body'>✖️</td>
                </tr>
                <tr>
                    <td className='editarLiga--table-body'>2°</td>
                    <td className='editarLiga--table-body'>Luizinho FC</td>
                    <td className='editarLiga--table-body'>88,45</td>
                    <td className='editarLiga--table-body'>502,02</td>
                    <td className='editarLiga--table-body'>✖️</td>
                </tr>
            </table>
        </div>
    );
}