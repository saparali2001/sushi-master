import React from 'react';
import { Accordion, Button, Dropdown, Form, Modal, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import App from '../App';

const MyNavbar = () => {
    return (
        <div className='navbars container'>
            <div className="navbar ">
               <div className="navbar-left">
               <Link
               onClick={() => {
                window.scrollTo(0, 0);
                }}
                className="logo" to="/">
                     <img src="/img/logo.png" alt="logo" className='logo-brand'/>
                     <div className="logo-text">
                        <h4>SUSHI</h4>
                        <p>center</p>
                     </div>
                 </Link>
                 <div className="nav">
                     
                         <div className='menu'>
                         <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                            Меню
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <NavDropdown.Item href="#sushi">Суши</NavDropdown.Item>
                                <NavDropdown.Item href="#firm-rolli">Роллы</NavDropdown.Item>
                                <NavDropdown.Item href="#sety">Сеты</NavDropdown.Item>
                                <NavDropdown.Item href="#dopol">Дополнительно</NavDropdown.Item>
                                <NavDropdown.Item href="#desert">Десерты</NavDropdown.Item>
                                <NavDropdown.Item href="#drink">Напитки</NavDropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            
                         </div>
                 </div>
               </div>
               <div className="navbar-right d-flex">
                   <ul className='nav-ul'>
                   
                   
                    <li className=''>Регистрация</li>
                    <li className=''>
                        <Link
                         onClick={() => {
                            window.scrollTo(0, 0);
                            
                            }}
                        to="/admin">Админ панел</Link>  
                    </li>
                    
                   </ul>
                   <Link
                         onClick={() => {
                            window.scrollTo(0, 0);
                            
                            }}
                        to="/korzina">
                             <div className="korzina">
                       <img src="img/pngegg (10).png" alt="basket" />
                   </div>
                        </Link> 
                  
               </div>
            </div>
        </div>
    );
};

export default MyNavbar;