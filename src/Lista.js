import React from "react";
import { useState } from 'react';


const Lista = ({ currentProduct }) => {

    let [userValue, setUserValue] = useState(-1)

    const [openModal, setOpenModal] = useState(false);

    const [openUp, setOpenUp] = useState(0);


    const chang = event => {
        setUserValue(event.target.value)
    } 
    const click = () => {
        userValue = setUserValue
        
    }

    let H = Number(userValue)
    
    const filtered = currentProduct.filter(x => x.id === H)

    if(openUp > H && openModal == true) {
        return (
            <div className="list">
            <div className="inputdiv">
                <p>Wyszukaj po id:</p>
                <input
                min='-1'
                max='6'
                type='number'
                value={userValue}
                onClick={click}
                onChange={chang}
                ></input>
            </div>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Pantone value</th>
                    </tr> 
                        {currentProduct.map(name => (
                            <tr
                            style={{backgroundColor:name.color}} 
                            key={name.id} 
                            onClick={() => {setOpenModal(false)}}
                            >
                                <td>{name.id}</td>
                                <td>{name.name}</td>
                                <td>{name.year}</td>
                                <td>{name.color}</td>
                                <td>{name.pantone_value}</td>
                            </tr>
                        ))}
                </table>
                <p>Kliknij w wiersz, żeby zobaczyć mniej informacji</p>
            </div>
        )
    }

    if(openModal === true) {
        return (
            <div className="list">
            <div className="inputdiv">
                <p>Wyszukaj po id:</p>
                <input
                min='-1'
                max='6'
                type='number'
                value={userValue}
                onClick={click}
                onChange={chang}
                ></input>
            </div>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Pantone value</th>
                    </tr> 
                        {filtered.map(name => (
                            <tr
                            style={{backgroundColor:name.color}} 
                            key={name.id} 
                            onClick={() => {setOpenModal(false)}}
                            >
                                <td>{name.id}</td>
                                <td>{name.name}</td>
                                <td>{name.year}</td>
                                <td>{name.color}</td>
                                <td>{name.pantone_value}</td>
                            </tr>
                        ))}
                </table>
                <p>Kliknij w wiersz, żeby zobaczyć mniej informacji</p>
            </div>
        )
    } 

    if (openUp > H && openModal == false) {
        return (
            <div className="list">
            <div className="inputdiv">
                <p>Wyszukaj po id:</p>
                <input
                min='-1'
                max='6'
                type='number'
                value={userValue}
                onClick={click}
                onChange={chang}
                ></input>
            </div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Year</th>
                </tr> 
                    {currentProduct.map(name => (
                        <tr
                        style={{backgroundColor:name.color}} 
                        key={name.id} 
                        onClick={() => {setOpenModal(true)}}
                        >
                            <td>{name.id}</td>
                            <td>{name.name}</td>
                            <td>{name.year}</td>
                        </tr>
                    ))}
            </table> 
            <p>Kliknij w wiersz, żeby zobaczyć więcej informacji</p>
        </div>
        )
    } 

    return (
        <div className="list">
            <div className="inputdiv">
                <p>Wyszukaj po id:</p>
                <input
                min='-1'
                max='6'
                type='number'
                value={userValue}
                onClick={click}
                onChange={chang}
                ></input>
            </div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Year</th>
                </tr> 
                    {filtered.map(name => (
                        <tr
                        style={{backgroundColor:name.color}} 
                        key={name.id} 
                        onClick={() => {setOpenModal(true)}}
                        >
                            <td>{name.id}</td>
                            <td>{name.name}</td>
                            <td>{name.year}</td>
                        </tr>
                    ))}
            </table> 
            <p>Kliknij w wiersz, żeby zobaczyć więcej informacji</p>
        </div>
    )
    
}

export default Lista;