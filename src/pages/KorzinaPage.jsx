import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { ProductContext } from '../context/ProductPravider';


const KorzinaPage = () => {
    const {} =useContext(ProductContext);
     let products = JSON.parse(sessionStorage.getItem("list")) || [];
     
    return  (
        
        <div>
            
           { 
           
               
                  products && products.map((item ,index) => {
                          
                           return <Container>

                               <div className="cart-body">
                                   <div className="cart-products">
                                       <img src={item.name.img} alt="" />
                                   </div>
                                   <div className="cart-total"></div>
                               </div>

                               {/* <div className="cards">
                                <div className="card-imege">
                                    <img src={item.name.img} alt="" />
                                </div>
                                <div className="cards-content">
                                    <h4 className="sostav-text">{item.name.name}</h4>
                                    <h5 className="sostav-text">Цена: {item.name.price}</h5>
                                    <p className="sostav-text">Состав: {item.name.sostav}</p>                                   
                                </div>
                                </div> */}

                               </Container>
                        }
                    
                 )
                  }
        </div>
    )
};

export default KorzinaPage;