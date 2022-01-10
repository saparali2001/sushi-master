
import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useEffect } from 'react';
import { ProductContext } from '../context/ProductPravider';

const AdminPanel = () => {
    const {getProduct,product, deleteProduct } =useContext(ProductContext);
    useEffect(() => {
        getProduct()
    },[])
    if(!product){
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <div className="container">
            
                <div className="sylki">
                    <div className="admin-add-btn">
                    <Link to="/add">Добавить продукт +</Link>
                    </div>    
                    <div className="add-user-btn">
                        <Link to="/users">Наши ползователи</Link>
                    </div>
                    <div className="zakazy-btn">
                        <Link to="/users">Заказы</Link>
                    </div>
                </div>

                <div className="products">
                    <h3>Наши продукты</h3>
                    
                </div>
            </div>
            <section id="sushi" >
            <div class="container">
                <h2>Суши</h2>
                <div class="sushi-cards d-flex"> 
                
                  {
                  product && product.map((item) => {
                    if(item.categor == "Суши"){
                        return <div className="cards">
                          <div className="card-imege">
                              <img src={item.img} alt="" />
                          </div>
                          <h4 className="sostav-text">{item.name}</h4>
                          <h5 className="sostav-text">Цена: {item.price}</h5>
                          <p className="sostav-text">Состав: {item.sostav}</p>
                          <div className="admin-card-btns">
                            <div className="change-btn">Изменить</div>
                            <div className="delete-btn">Удалить</div>
                          </div>
                        </div>
                    }
                 })
                  }
                </div>
            </div>
            </section>
            <section id="firm-rolli" >
                <div class="container">
                    <h2>Роллы</h2>
                <div class="firm-roll-cards d-flex">
                {
                  product && product.map((item) => {
                    if(item.categor == "Роллы"){
                        return <div className="cards">
                          <div className="card-imege">
                              <img src={item.img} alt="" />
                          </div>
                          <h4 className="sostav-text">{item.name}</h4>
                          <h5 className="sostav-text">Цена: {item.price}</h5>
                          <p className="sostav-text">Состав: {item.sostav}</p>
                          <div className="admin-card-btns">
                            <div className="change-btn">Изменить</div>
                            <div className="delete-btn">Удалить</div>
                          </div>
                        </div>
                    }
                 })
                  }
                </div>
                </div>
            </section>
            <section id="sety" >
                <div class="container">
                    <h2>Сеты</h2>
                <div class="sety-cards d-flex">
                {
                  product && product.map((item) => {
                    if(item.categor == "Сеты"){
                        return <div className="cards">
                          <div className="card-imege">
                              <img src={item.img} alt="" />
                          </div>
                          <h4 className="sostav-text">{item.name}</h4>
                          <h5 className="sostav-text">Цена: {item.price}</h5>
                          <p className="sostav-text">Состав: {item.sostav}</p>
                          <div className="admin-card-btns">
                            <div className="change-btn">Изменить</div>
                            <div className="delete-btn">Удалить</div>
                          </div>
                        </div>
                    }
                 })
                  }
                </div>
                </div>
            </section>
            <section id="dopol" >
                <div class="container">
                    <h2>Дополнительно</h2>
                <div class="dopol-cards d-flex">
                {
                  product && product.map((item) => {
                    if(item.categor == "Дополнительно"){
                        return <div className="cards">
                          <div className="card-imege">
                              <img src={item.img} alt="" />
                          </div>
                          <h4 className="sostav-text">{item.name}</h4>
                          <h5 className="sostav-text">Цена: {item.price}</h5>
                          <p className="sostav-text">Состав: {item.sostav}</p>
                          <div className="admin-card-btns">
                            <div className="change-btn">Изменить</div>
                            <div className="delete-btn">Удалить</div>
                          </div>
                        </div>
                    }
                 })
                  }
                </div>
                </div>
            </section>
            <section id="desert" >
                <div class="container">
                    <h2>Десерты</h2>
                <div class="desert-cards d-flex">
                {
                  product && product.map((item) => {
                    if(item.categor == "Десерты"){
                        return <div className="cards">
                          <div className="card-imege">
                              <img src={item.img} alt="" />
                          </div>
                          <h4 className="sostav-text">{item.name}</h4>
                          <h5 className="sostav-text">Цена: {item.price}</h5>
                          <p className="sostav-text">Состав: {item.sostav}</p>
                          <div className="admin-card-btns">
                            <div className="change-btn">Изменить</div>
                            <div className="delete-btn">Удалить</div>
                          </div>
                        </div>
                    }
                 })
                  }
                </div>
                </div>
            </section>
            <section id="drink" >
                <div class="container">
                    <h2>Напитки</h2>
                <div class="napitki-cards d-flex">
                {
                  product && product.map((item) => {
                    if(item.categor == "Напитки"){
                        return <div className="cards">
                          <div className="card-imege">
                              <img src={item.img} alt="" />
                          </div>
                          <h4 className="sostav-text">{item.name}</h4>
                          <h5 className="sostav-text">Цена: {item.price}</h5>
                          <p className="sostav-text">Состав: {item.sostav}</p>
                          <div className="admin-card-btns">
                            <div className="change-btn">Изменить</div>
                            <div className="delete-btn">Удалить</div>
                          </div>
                        </div>
                    }
                 })
                  }
                </div>
                </div>
            </section> 

        </div>
    );
};

export default AdminPanel;