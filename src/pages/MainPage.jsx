
import Button from '@restart/ui/esm/Button';
import React, { useContext } from 'react';
import { useEffect } from 'react';

import { ProductContext } from '../context/ProductPravider';


const MainPage = () => {
    const {getProduct,product, checkProductInCart, addAndDeleteProductInCart} =useContext(ProductContext);
  
    useEffect(() => {
        getProduct()
    },[])
    
    if(!product){
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <div className="container header">
                <div className="header-content">
                     <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, vitae consequatur. Odit odio similique quibusdam?</p>
                     <div className="header-btns">
                         <div className="zakaz-btn">Заказать</div>
                         <div className="pozvonit-btn">Позвонить</div>
                     </div>
                     <div className="header-text">
                         <div className="header-text-1">
                             <h5>Lorem, ipsum dolor.</h5>
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus fuga ipsa est eligendi cumque!</p>
                         </div>
                         <div className="header-text-1">
                             <h5>Lorem, ipsum dolor.</h5>
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus fuga ipsa est eligendi cumque!</p>
                         </div>
                     </div>
                </div>
                <div className="header-img">
                     <img src="/img/pngegg (9).png" alt="sushi" />
                </div>
            </div>
            <section>
                <div className="container d-flex">
                <h2 className="our-main">О нас</h2>
                </div>
                <div className="container our-cards d-flex">
                    <div className="our-card">
                        <div className="our-img">
                            
                        <img src="/img/sushi-icon.png" alt="" />
                        </div>
                        <h4>Lorem, ipsum dolor.</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore corrupti earum tempore deserunt dolor quod? Accusantium, quibusdam. Reiciendis, reprehenderit est.</p>
                    </div>
                    <div className="our-card">
                        <div className="our-img">
                            
                        <img src="/img/delivery.png" alt="" />
                            </div>
                        <h4>Lorem, ipsum dolor.</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore corrupti earum tempore deserunt dolor quod? Accusantium, quibusdam. Reiciendis, reprehenderit est.</p>
                    </div>
                    <div className="our-card">
                           <div className="our-img">
                             <img src="/img/time.png" alt="" />
                            
                            </div>
                        <h4>Lorem, ipsum dolor.</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore corrupti earum tempore deserunt dolor quod? Accusantium, quibusdam. Reiciendis, reprehenderit est.</p>
                    </div>
                </div>
            </section>
                
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
                          <div className="cards-content">
                            <h4 className="sostav-text">{item.name}</h4>
                            <h5 className="sostav-text">Цена: {item.price}</h5>
                            <p className="sostav-text">Состав: {item.sostav}</p>
                           
                            {checkProductInCart(item.id) ? (
                              <Button
                                color="error"
                                onClick={() => addAndDeleteProductInCart(item)}
                                size="small"
                              >
                                В корзине
                              </Button>
                            ) : (
                              <Button onClick={() => addAndDeleteProductInCart(item)} size="small">
                                В корзину
                              </Button>
                            )}
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
                          <div className="cards-content">
                            <h4 className="sostav-text">{item.name}</h4>
                            <h5 className="sostav-text">Цена: {item.price}</h5>
                            <p className="sostav-text">Состав: {item.sostav}</p>
                            <button onClick={() => handleKorzina(item)} className="zakazat-btn">Заказать</button>
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
                          <div className="cards-content">
                            <h4 className="sostav-text">{item.name}</h4>
                            <h5 className="sostav-text">Цена: {item.price}</h5>
                            <p className="sostav-text">Состав: {item.sostav}</p>
                            <button onClick={() => handleKorzina(item)} className="zakazat-btn">Заказать</button>
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
                          <div className="cards-content">
                            <h4 className="sostav-text">{item.name}</h4>
                            <h5 className="sostav-text">Цена: {item.price}</h5>
                            <p className="sostav-text">Состав: {item.sostav}</p>
                            <button onClick={() => handleKorzina(item)} className="zakazat-btn">Заказать</button>
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
                          <div className="cards-content">
                            <h4 className="sostav-text">{item.name}</h4>
                            <h5 className="sostav-text">Цена: {item.price}</h5>           
                            <p  className="sostav-text">Состав: {item.sostav}</p>
                            <button onClick={() => handleKorzina(item)} className="zakazat-btn">Заказать</button>
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
                          <button onClick={() => handleKorzina(item)} className="zakazat-btn">Заказать</button>
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

export default MainPage;