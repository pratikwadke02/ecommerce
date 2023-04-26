import React , {useState, useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import { useRouter } from 'next/router';

import { useStateContext } from '../context/StateContext'; 

import { runFireworks } from '../lib/utils';

const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);

    return(
        <div className="succes-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>Thank You For Your Purchase</h2>
                <p className='email-msg'>Check your email for the invoice</p>
                <p className="description">
                    If you have any questions, please email<a href="mailto:ryanreynoldscr7@gmail.com" className='email'>
                        @ryanreynoldscr7@gmail.com
                    </a>
                </p>
                <Link href="/">
                    <button type='button' width="300px" className='btn'> Continue Shopping</button>
                </Link>
            </div>
        </div>
    )

}

export default Success;