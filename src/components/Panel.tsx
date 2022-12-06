import React from 'react';
import {Link} from 'react-router-dom';
// @ts-ignore
import image from '../images/access.png';


const Panel = () => {

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue'
    };

    return (
        <div className="left-panel">
            <h1>Admin page</h1>
            <h2>Главное меню</h2>
            <div className="access">
                <img src={image} alt="" height="40px"/>
                <Link to="/" style={linkStyle}>Запрос на доступ</Link>
            </div>

        </div>
    );
};

export default Panel;