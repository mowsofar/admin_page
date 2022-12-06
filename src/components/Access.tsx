import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
// @ts-ignore
import yes from '../images/success.png';
// @ts-ignore
import no from '../images/no.png'

interface User {
    id: number,
    name: string,
    lastName: string,
    access: boolean
}

const Access = () => {

    const names = [{id: 11, name: 'Лена', lastName: 'Иванова', access: true},
        {id: 12, name: 'Катя', lastName: 'Петрова', access: false},
        {id: 13, name: 'Даша', lastName: 'Игорева', access: undefined}]


    const [users, setUsers] = useState<Array<User>>([]);

    const getUsers = async () => {

        const requestOptions: RequestInit = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        }
        const response = await fetch('url/getusers', requestOptions); // Получение списка юзеров
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {getUsers()}, [])

    const setTrueAccess = (index) => { // устанавливаю по нажатию на 'предоставить доступ' access=true и отправляю на url с индексом как параметр

        const findVariable = users.find(obj => obj.id===index);

        if (!findVariable) return;

        const setTrueMethod = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({access: true})
        }

        fetch(`url${index}`, setTrueMethod)
            .then(response => {return response.json()})
            .then(data => {console.log(data)})
    }

    const setFalseAccess = (index) => {

        const findVariable = users.find(obj => obj.id === index);

        if (!findVariable) return;

        const setTrueMethod = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({access: false})
        }

        fetch(`url${index}`, setTrueMethod)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
            })
    }

    const renderUserRequest = (user, index) => {
        return (
            <tr key={index}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.access === true ? <img src={yes} height="30px"/>: (user.access === false ? <img src={no} height="30px"/> : <div><button type="button" className="btn btn-success" onClick={()=>setTrueAccess(index)}>Предоставить доступ</button>
                    <button type="button" className="btn btn-danger" onClick={() => setFalseAccess(index) }>Запретить доступ</button></div>)}</td>
            </tr>
        )

    }

    return (
        <div className="table">
            <h2>Запрос на доступ</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Предоставить доступ</th>
                </tr>
                </thead>
                <tbody>
                   {names.map(renderUserRequest)}
                </tbody>
            </Table>
        </div>
    );
};

export default Access;