import React from 'react';

import Logo from '../../images/logo.svg';
 
import "./VisualizarLiga.css";

export function VisualizarLiga(){

    return(
        <div>
            <img src={Logo} alt="Logo" />
            <h1 className='visualizarLiga--title'>Liga Milgrau</h1>
            <p className='visualizarLiga--description'>Aqui fica a descrição da sua liga</p>

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