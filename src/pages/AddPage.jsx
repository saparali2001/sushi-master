import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductPravider';

const AddPage = () => {

    const [ name, setName] = useState("");
    const [ img, setImg] = useState("");
    const [ price, setPrice] = useState("");
    const [ sostav, setSostav] = useState("");
    const [ categor, setCategor] = useState("");
    const {addProduct} = useContext(ProductContext)

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!name.trim() ||
           !price.trim() ||
            !sostav.trim() ||
            !img.trim()){
            alert("Заполните поля");
            return;
        }
        let newProduct = {
            name: name,
            price: price,
            sostav: sostav,
            categor: categor,
            img: img,
        }
        addProduct(newProduct)
        setName("");
        setPrice("");
        setSostav("");
        setCategor("");
        setImg("");
    }
    return (
        <div className='container'>
            <Link className='admin-nazad' to="/admin">&#8592;  Назад</Link>
            <h3>Добавления нового товара</h3>
          
           <form className='add-page-form' onSubmit={handleSubmit}>
           <input onChange={ (event) => 
               setImg(event.target.value)
               } 
               type="text" 
               placeholder='Загрузите картиинку'
               value={img} />
               
               <input onChange={ (event) => 
               setName(event.target.value)
               } 
               type="text" 
               placeholder='Введите называния'
               value={name} />
               <input onChange={ (event) => 
               setPrice(event.target.value)
               } 
               type="text" 
               placeholder='Введите цену'
               value={price} />
               <input onChange={ (event) => 
               setSostav(event.target.value)
               } 
               type="text" 
               placeholder='Введите состав'
               value={sostav} />
               <select
                aria-placeholder="Выберите категорию" 
                className='input-categiriya-edit'
                onChange={(event) =>
                 setCategor(event.target.value)
               }
               value={categor}> 
               <option >Выберите категорию</option>
                <option value="Роллы" selected>Роллы</option>
                <option value="Суши">Суши</option>
                <option value="Сеты">Сеты</option>
                <option value="Дополнительно">Дополнительно</option>
                <option value="Десерты">Десерты</option>
                <option value="Напитки">Напитки</option>
            </select>
               <button className='add-btn' type='submit'>Добавить</button>
           </form>
        </div>
    );
};

export default AddPage;