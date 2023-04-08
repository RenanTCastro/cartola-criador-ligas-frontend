import React from 'react';
import Logo from '../../images/logo.svg';
 
import "./EditarLiga.css";

export function EditarLiga(){
    return(
        <div>
            <img src={Logo} alt="Logo" />
            <h1 className='editarLiga--title'>Liga Milgrau</h1>
            <p className='editarLiga--description'>Aqui fica a descrição da sua liga</p>

            <div className='editarLiga--button-container'>
                <button className='editarLiga--buttons'>✏️ Editar Liga</button>
                <button className='editarLiga--buttons'>✅ Adicionar Time</button>
                <button className='editarLiga--buttons'>🔗 Compartilhar</button>
            </div>

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