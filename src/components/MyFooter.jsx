import React from 'react';
import { Link } from 'react-router-dom';

const MyFooter = () => {
    return (
        <div className='footer'>
            <div className="container footer-main d-flex">
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
                    <div className="footer-content d-flex">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium unde iure non similique, eligendi autem officiis facere commodi corrupti. Ea labore earum dolorum minima, animi et quasi dolores officiis voluptatibus excepturi! Unde deleniti facilis dolores molestias itaque ut doloremque hic!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nulla voluptatibus voluptatum dolore nisi quis nostrum unde nesciunt aliquid ex explicabo delectus, animi iste sunt non? Amet distinctio dolores molestiae.</p>
                       <div className="footer-left">
                       <div className="saits d-flex">
                            <a className='instagram' href="#">
                                <img src="/img/pngegg (15).png" alt="instagram" />
                            </a>
                            <a className='instagram' href="#">
                                <img src="/img/pngegg (16).png" alt="WhatsApp" />
                            </a>
                            <a className='instagram' href="#">
                                <img src="/img/pngegg (17).png" alt="telegram" />
                            </a>
                        </div>
                        <div className="num">
                            Телефон номер:
                            <a type='phone' href="#">0755410910</a>
                        </div>
                       </div>
                    </div>
              </div>
        </div>
    );
};

export default MyFooter;