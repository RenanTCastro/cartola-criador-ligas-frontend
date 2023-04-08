import React from 'react';
import Logo from '../../images/logo.svg';
 
import "./EditarLiga.css";

export function EditarLiga(){
    return(
        <div>
            <img src={Logo} alt="Logo" />
            <h1 className='visualizarLiga--title'>Liga Milgrau</h1>
            <p className='visualizarLiga--description'>Aqui fica a descrição da sua liga</p>

            <div className='visualizarTime--button-container'>
                <button className='visualizarTime--buttons'>✏️ Editar Liga</button>
                <button className='visualizarTime--buttons'>✅ Adicionar Time</button>
                <button className='visualizarTime--buttons'>🔗 Compartilhar</button>
            </div>

            <table>
                <tr>
                    <th className='visualizarTime--table-header'>Posição</th>
                    <th className='visualizarTime--table-header'>Time</th>
                    <th className='visualizarTime--table-header'>Pontuação geral</th>
                    <th className='visualizarTime--table-header'>Cartoletas</th>
                    <th className='visualizarTime--table-header'></th>
                </tr>
                <tr>
                    <td className='visualizarTime--table-body'>1°</td>
                    <td className='visualizarTime--table-body'>Caraíbas FC</td>
                    <td className='visualizarTime--table-body'>102,45</td>
                    <td className='visualizarTime--table-body'>569,67</td>
                    <td className='visualizarTime--table-body'>✖️</td>
                </tr>
                <tr>
                    <td className='visualizarTime--table-body'>2°</td>
                    <td className='visualizarTime--table-body'>Luizinho FC</td>
                    <td className='visualizarTime--table-body'>88,45</td>
                    <td className='visualizarTime--table-body'>502,02</td>
                    <td className='visualizarTime--table-body'>✖️</td>
                </tr>
            </table>
        </div>
    );
}