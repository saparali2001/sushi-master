import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import ProductPravider from './context/ProductPravider';
import AddPage from './pages/AddPage';
import MainPage from './pages/MainPage'
import EditPage from './pages/EditPage'
import KorzinaPage from './pages/KorzinaPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminPanel from './pages/AdminPanel';
import UsersPage from './pages/UsersPage';
import MyFooter from './components/MyFooter';

const MyRoutes = () => {
    return (
        <ProductPravider>
            <BrowserRouter>
                <MyNavbar/>
                <Routes>
                    <Route exact path="/add" element={<AddPage/>}/>
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route exact path="/admin" element={<AdminPanel/>}/>
                    <Route exact path="/edit/:name/:id" element={<EditPage/>}/>
                    <Route exact path="/users" element={<UsersPage/>}/>
                    <Route exact path="/korzina" element={<KorzinaPage/>}/>
                </Routes>
                <MyFooter/>
            </BrowserRouter>
       </ProductPravider>
    );
};

export default MyRoutes;