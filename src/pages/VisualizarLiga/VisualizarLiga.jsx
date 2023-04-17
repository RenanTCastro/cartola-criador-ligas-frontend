import React, {useEffect, useMemo, useState } from 'react';

import Logo from '../../images/logo.svg';
 
import api from '../../services/api';

import "./VisualizarLiga.css";

export function VisualizarLiga(){
    const [leagueData, setLeagueData ] = useState();
    const id = useMemo(()=>{
        const url = window.location.href;
        const parts = url.split('/');
        const id = parts.pop();
        return id;
    })

    useEffect(()=>{
        api.get(`/getLeague/${id}`)
        .then((res)=>{
            setLeagueData(res.data[0]);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);
    return(
        <div>
            <img src={Logo} alt="Logo" />
            <h1 className='visualizarLiga--title'>{leagueData?.name ? leagueData?.name : "Nome da liga"}</h1>
            <p className='visualizarLiga--description'>
                {leagueData?.description ? leagueData?.description : "Aqui fica a descrição da sua liga"}
            </p>

            <table>
                <tr>
                    <th className='visualizarLiga--table-header'>Posição</th>
                    <th className='visualizarLiga--table-header'>Time</th>
                    <th className='visualizarLiga--table-header'>Última pontuação</th>
                    <th className='visualizarLiga--table-header'>Pontuação geral</th>
                    <th className='visualizarLiga--table-header'>Cartoletas</th>
                </tr>
                <tr>
                    <td className='visualizarLiga--table-body'>1°</td>
                    <td className='visualizarLiga--table-body'>Caraíbas FC</td>
                    <td className='visualizarLiga--table-body'>102,45</td>
                    <td className='visualizarLiga--table-body'>569,67</td>
                    <td className='visualizarLiga--table-body'>235,45</td>
                </tr>
                <tr>
                    <td className='visualizarLiga--table-body'>2°</td>
                    <td className='visualizarLiga--table-body'>Luizinho FC</td>
                    <td className='visualizarLiga--table-body'>88,45</td>
                    <td className='visualizarLiga--table-body'>502,02</td>
                    <td className='visualizarLiga--table-body'>144,98</td>
                </tr>
            </table>
        </div>
    );
}