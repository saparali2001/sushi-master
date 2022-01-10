import axios from 'axios';
import React, { useReducer } from 'react';
import { API } from '../helpers/const';
import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";

export const ProductContext = React.createContext();
let cart = JSON.parse(sessionStorage.getItem("cart"));
const INIT_STATE = {
    product: null,
    detail: null,
    productsCount: cart ? cart.products.length : 0,
    cart: null,
  };

const reduser = (state,action) => {
    switch(action.type){
        case "GET_PRODUCT":
            return {...state, product: action.payload};
        case "ADD_AND_DELETE_PRODUCT_IN_CART":
            return { ...state, productsCount: action.payload };    
        default:
            return state;    
    }
}

const ProductPravider = (props) => {
    const [state, dispatch] = useReducer(reduser, INIT_STATE)


    const  addProduct = async(newProduct) => {
        try{
            const response = await axios.post(API, newProduct);
        } catch(error){
            console.log(error)
        }
    }

    const getProduct = async () =>{
        try{
            const response =await axios(API);
            let action = {
                type: "GET_PRODUCT",
                payload: response.data,

            }
            dispatch(action)
        } catch(error){
            console.log(error)
        }
    }

    function checkProductInCart(id) {
        let cart = JSON.parse(sessionStorage.getItem("cart"));
        if (!cart) {
          cart = {
            products: [],
          };
        }
        let check = cart.products.find((item) => {
          return item.product.id === id;
        });
    
        if (!check) {
          return false;
        } else {
          return true;
        }
      }

    function addAndDeleteProductInCart(product) {
        let cart = JSON.parse(sessionStorage.getItem("cart"));
        if (!cart) {
          cart = {
            products: [],
            totalPrice: 0,
          };
        }
    
        let cartProduct = {
          product: product,
          count: 1,
          subPrice: 0,
        };
        cartProduct.subPrice = calcSubPrice(cartProduct);
    
        let check = cart.products.find((item) => {
          return item.product.id === product.id;
        });
    
        if (!check) {
          cart.products.push(cartProduct);
        } else {
          cart.products = cart.products.filter((item) => {
            return item.product.id !== product.id;
          });
        }
        cart.totalPrice = calcTotalPrice(cart.products);
        localStorage.setItem("cart", JSON.stringify(cart));
    
        let action = {
          type: "ADD_AND_DELETE_PRODUCT_IN_CART",
          payload: cart.products.length,
        };
        dispatch(action);
      }

   


    return <ProductContext.Provider value={{
        addProduct: addProduct,
        getProduct: getProduct,
        checkProductInCart:checkProductInCart,
        addAndDeleteProductInCart:addAndDeleteProductInCart,
        product: state.product
    }}>
        {props.children}
    </ProductContext.Provider>
};




export default ProductPravider;