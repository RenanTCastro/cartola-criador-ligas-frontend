import React, { useMemo, useState } from 'react';
import Logo from '../../images/logo.svg';
import { Modal } from '../../components/Modal/Modal';

import "./EditarLiga.css";

export function EditarLiga(){
    const [modal, setModal] = useState(true);

    // Uso do useMemo para evitar que o array de opções seja recriado a cada renderização
    const options = useMemo(() => {
        let opt = [];
        for (let i = 1; i <= 38; i++) {
          opt.push(<option value={i}>{i}° rodada</option>);
        }
        return opt;
    },[])

    return(
        <div>
            {modal &&
                <Modal>
                    <div className='editarLiga--modal-container'>
                        <p className='editarLiga--modal-text'>Nome</p>
                        <input className='editarLiga--modal-input'/>
                        
                        <p className='editarLiga--modal-text'>Descrição</p>
                        <textarea className='editarLiga--modal-textarea'/>

                        <div className='editarLiga--modal-select-container'>
                            <div>
                                <p className='editarLiga--modal-text'>Rodada inicio</p>
                                <select className='editarLiga--modal-select'>
                                    {options}
                                </select>
                            </div>
                            <div>
                                <p className='editarLiga--modal-text'>Rodada final</p>
                                <select className='editarLiga--modal-select'>
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
                                onClick={()=>console.log("")}>
                                    Salvar
                            </button>
                        </div>
                    </div>
                </Modal>
            }

            <img src={Logo} alt="Logo" />
            <h1 className='editarLiga--title'>Liga Milgrau</h1>
            <p className='editarLiga--description'>Aqui fica a descrição da sua liga</p>

            <div className='editarLiga--button-container'>
                <button className='editarLiga--buttons' onClick={()=>setModal(!modal)}>✏️ Editar Liga</button>
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